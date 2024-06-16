/*eslint-disable*/

import { useEffect } from "react";
import styles from "./Footer.module.scss";
import assets from "../../assets/img/assets";
import { googleMapLink } from "../../constant/link";
import { useTranslation } from "react-i18next";

// core components

const Footer = () => {
  const { t } = useTranslation();


  useEffect(() => {
    const handleWindowResize = () => {
      const root = document.documentElement;
      root.style.setProperty("--window-width", `${window.innerWidth}px`);
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <div className={styles.textBoxes}>
          <div className={styles.textBox}>
            <div className={styles.label}>
              {`${t(`footer.mailing_address`)}: `}
            </div>
            <div
              className={styles.text}
            >{`新界屯門康寶路88號前，請在英文字牌TREVI轉右，在意大利地基門口左邊鐵門`}</div>
          </div>

          <div className={styles.textBox}>
            <div className={styles.label}>
              {`${t(`footer.phone`)}: `}
            </div>
            <div className={styles.text}>{`93558010 陳生`}</div>
          </div>
          <div className={styles.textBox}>
            <div className={styles.label}>
              {`${t(`footer.email`)}: `}
            </div>
            <div className={styles.text}>{"YUSING1961@GMAIL.COM"}</div>
          </div>
        </div>
        <div style={{flex:1}}/>
        <a href={googleMapLink} target="_blank">
          <div className={styles.clickMe}>{`${t(`footer.clickMe`)}: `}</div>
        <img src={assets.FOOTER_FOOTER_MAP} className={styles.mapImg}></img></a>
      </div>
      <div
        className={styles.bottomText}
      >{`CopyRight(c) 2024 義記YK-EE All Rights Revsered`}</div>
    </footer>
  );
};

export default Footer;
