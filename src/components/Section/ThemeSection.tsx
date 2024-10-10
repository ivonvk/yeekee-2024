import React from "react";
import styles from "../Section/ThemeSection.module.scss";
import { useTranslation } from "react-i18next";
import Footer from "components/Footers/Footer";

interface MainCarouselProps {
  children?: any;
}

const ThemeSection: React.FC<MainCarouselProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.margin}`}>
      <div className={styles.titleImg}>
        <div className={styles.websiteBox}>
         <div className={styles.websiteBottom}>
         <div className={styles.websiteName}>
            {t(`website.name`)}
          </div>
          <div className={styles.websiteDesc}>
            {t(`website.shortDescription`)}
          </div>
         </div>
        </div>
      </div>
      <div className={styles.padding}>
      {children}</div>
      <Footer />

    </div>
  );
};

export default ThemeSection;
