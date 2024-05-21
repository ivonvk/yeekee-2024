import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useIntl } from "react-intl";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../Section/ThemeSection.module.scss";
import globals from "../../styles/Home.module.css";
import { sliderImageLinks } from "../../constant/link";
import assets from "../../assets/assets";
import { useTranslation } from "react-i18next";

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
      {children}
    </div>
  );
};

export default ThemeSection;
