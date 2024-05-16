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

interface MainCarouselProps {
  children?: any;
}

const ThemeSection: React.FC<MainCarouselProps> = ({ children }) => {
  const { formatMessage } = useIntl();

  return (
    <div className={`${styles.margin}`}>
      <div className={styles.titleImg}>
        <div className={styles.websiteBox}>
          <div className={styles.websiteName}>
            {formatMessage({ id: `website.name` })}
          </div>
          <div className={styles.websiteDesc}>
            {formatMessage({ id: `website.shortDescription` })}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ThemeSection;
