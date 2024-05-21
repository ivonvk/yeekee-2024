import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from "react";
import styles from "./Menu.module.scss";
import { PagesType } from '../../types/pages';
import { t } from 'i18next';
import { usePages } from '../../contexts/pages/use-pages';


interface MenuProps {
  open: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ open, toggleMenu }) => {
  const pagesContext = usePages();
  const { locale } = useRouter();

  useEffect(() => {

    


  }, [pagesContext.pages]);
  const renderBtns = (page: PagesType, href: string) => {
    return (
      <Link href={href} passHref legacyBehavior>
        <div className={styles.smalContainer}>
          <div className={styles.forceHeight}>
            <a
              className={pagesContext.pages === page?styles.underline:styles.link}
              onClick={() => {
                toggleMenu()

              }}
            >
              {t(`menu.${page}`)}
            </a>
          </div>
       
        </div>
      </Link>
    );
  };
  const renderScrollPageBtn = (page: PagesType, href: string) => {
    return (
        <div className={styles.smalContainer}>
          <div className={styles.forceHeight}>
            <a
              className={styles.link}
              onClick={() => {
                window.scrollTo(0, document.documentElement.scrollHeight);
                toggleMenu()
              }}
            >
              {t(`menu.${page}`)}
            </a>
          </div>
          <div
            className={
              pagesContext.pages === page
                ? styles.underline
                : styles.nonUnderline
            }
          ></div>
        </div>
    );
  };
  return (
    <div className={`${styles.root} ${open ? styles.open : ""}`}>
      <div className={styles.wrapper}>
        
      {renderBtns(PagesType.homepage, `/${locale}/homepage`)}
                {renderBtns(PagesType.service, `/${locale}/service`)}
                {renderScrollPageBtn(PagesType.contact_us, `/${locale}/contact_us`)}
      </div>
    </div>
  );
};

export default Menu;
