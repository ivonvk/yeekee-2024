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
              onClick={() => {
                navigator.clipboard.writeText(
                  `新界屯門康寶路88號前，請在英文字牌TREVI轉右，在意大利地基門口左邊鐵門`
                );
                alert(t("alert.copyDone"));
              }}
            >{`新界屯門康寶路88號前，請在英文字牌TREVI轉右，在意大利地基門口左邊鐵門 (${t(
              `label.clickCopy`
            )})`}</div>
          </div>

          <div className={styles.textBox}>
            <div className={styles.label}>{`${t(`footer.phone`)}: `}</div>
            <div
              className={styles.text}
              onClick={() => {
                navigator.clipboard.writeText(`93558010 陳生`);
                alert(t("alert.copyDone"));
              }}
            >{`93558010 陳生 (${t(`label.clickCopy`)})`}</div>
          </div>
          <div className={styles.textBox}>
            <div className={styles.label}>{`${t(`footer.email`)}: `}</div>
            <div
              className={styles.text}
              onClick={() => {
                navigator.clipboard.writeText(`YUSING1961@GMAIL.COM`);
                alert(t("alert.copyDone"));
              }}
            >{`YUSING1961@GMAIL.COM (${t(`label.clickCopy`)})`}</div>
          </div>

          <div className={styles.textBox}>
            <div className={styles.label}>{`${t(`footer.wechat`)}: `}</div>
            <div
              className={styles.text}
              onClick={() => {
                navigator.clipboard.writeText(`wxid_ftqdcyzzlb5n22`);
                alert(t("alert.copyDone"));
              }}
            >{`wxid_ftqdcyzzlb5n22 (${t(`label.clickCopy`)})`}</div>
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <a href={googleMapLink} target="_blank">
          <div className={styles.clickMe}>{`${t(`footer.clickMe`)}: `}</div>
          <img src={assets.FOOTER_FOOTER_MAP} className={styles.mapImg}></img>
        </a>
      </div>
      <div
        className={styles.bottomText}
      >{`CopyRight(c) 2024 義記YK-EE All Rights Revsered`}</div>
    </footer>
  );
};

export default Footer;
