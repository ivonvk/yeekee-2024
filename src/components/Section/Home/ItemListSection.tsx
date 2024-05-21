import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "../../Section/SectionCommon.module.scss";
import sectionStyles from "../../Section/SectionCommon.module.scss";
import InnerSection from "../InnerSection";
import { useTranslation } from "react-i18next";


interface ItemListSectionProps {}

const ItemListSection: React.FC<
  ItemListSectionProps
> = ({  }) => {
  const { t } = useTranslation();

  return (
    <InnerSection className={`${styles.container} ${sectionStyles.margin}`}>
        <div className={styles.section}>
          <div className={sectionStyles.bottomBox}>
            <div className={styles.title}>
              {t(`homepage.service`)}
            </div>
            <div className={styles.shortDescription}>
              {t(`homepage.service.shortDescription`)}
            </div>

            <div
              className={sectionStyles.bottomTextRegular}
            >{``}</div>
          </div>
        </div>
    </InnerSection>
  );
};

export default ItemListSection;
