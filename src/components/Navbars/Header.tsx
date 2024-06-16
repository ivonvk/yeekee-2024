import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import styles from "./Header.module.scss";
import Menu from "./Menu";
import { usePages } from "../../contexts/pages/use-pages";
import { PagesType } from "../../types/pages";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  scrollTransparent?: boolean;
}

const switchColorThreshold = 299;

const Header: React.FC<HeaderProps> = ({ scrollTransparent }) => {
  const { locale } = useRouter();
  const { t } = useTranslation();

  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isTransparent, setIsTransparent] = React.useState(scrollTransparent);

  const pagesContext = usePages();
  useEffect(() => {

    


  }, [pagesContext.pages]);
useEffect(() => {
    const handleWindowResize = () => {
      const root = document.documentElement;
      root.style.setProperty('--window-width', `${window.innerWidth}px`);
    };

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const toggleMenu = () => {
    if (collapseOpen) {
      setIsClosing(true);

      setTimeout(() => {
        setIsClosing(false);
        setCollapseOpen(false);
      }, 300);
    } else {
      setCollapseOpen(true);
    }
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > switchColorThreshold ||
        document.body.scrollTop > switchColorThreshold
      ) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };
    if (scrollTransparent) {
      window.addEventListener("scroll", updateNavbarColor);
      return () => {
        window.removeEventListener("scroll", updateNavbarColor);
      };
    } else {
      window.removeEventListener("scroll", updateNavbarColor);
      setIsTransparent(false);
    }
  }, [scrollTransparent]);
  const renderBtns = (page: PagesType, href: string) => {
    return (
      <Link href={href} passHref legacyBehavior>
        <div className={styles.smalContainer}>
          <div className={styles.forceHeight}>
            <a
              className={styles.link}
              onClick={() => {
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
    <>
      <div
        className={`${styles.bar} ${
          !isTransparent || collapseOpen || isClosing ? styles.raised : ""
        }`}
      >
          <div className={styles.wrapper}>
            <div className={styles.bottomIcon} >
              <div
                className={`${styles.menusContainer} ${
                  collapseOpen || isClosing ? styles.hideMenu : ""
                }`}
              >
                {renderBtns(PagesType.homepage, `/${locale}/homepage`)}
                {renderBtns(PagesType.service, `/${locale}/service`)}
                {renderScrollPageBtn(PagesType.contact_us, `/${locale}/contact_us`)}
              </div>
              <button
                role="button"
                className={`${styles.menuButton} ${
                  collapseOpen ? styles.collapsed : ""
                }`}
                onClick={toggleMenu}
              >
                <div
                  className={`${styles.hamburger} ${
                    collapseOpen ? styles.close : ""
                  }`}
                >
                  <div />
                  <div />
                  <div />
                </div>
              </button>
            </div>
        
          </div>
      </div>
      <Menu open={isClosing ? false : collapseOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
