import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "../SectionCommon.module.scss";
import sectionStyles from "../Service/CustomizationServiceSection.module.scss";
import InnerSection from "../InnerSection";
import InfoBox from "../../Display/InfoBox";
import { payment, serviceInfos } from "../../../constant/text/services";



interface CustomizationServiceSectionProps {}

const CustomizationServiceSection: React.FC<
  CustomizationServiceSectionProps
> = ({  }) => {
  const { formatMessage } = useIntl();

  return (
    <InnerSection className={`${styles.container} ${sectionStyles.margin}`}>
        <div className={styles.section}>
            <div className={styles.title}>
              {formatMessage({
                id: `service.customization_service`,
              })}
            </div>
            <div className={styles.shortDescription}>
              {formatMessage({
                id: `customization_service.shortDescription`,
              })}
            </div>
         
        </div>
    </InnerSection>
  );
};

export default CustomizationServiceSection;
