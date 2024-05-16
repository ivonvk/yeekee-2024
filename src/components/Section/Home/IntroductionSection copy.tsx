import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "../SectionCommon.module.scss";
import sectionStyles from "../Home/IntroductionSection.module.scss";
import InnerSection from "../InnerSection";



interface IntroductionSectionProps {}

const IntroductionSection: React.FC<
  IntroductionSectionProps
> = ({  }) => {
  const { formatMessage } = useIntl();

  return (
    <InnerSection className={`${styles.container} ${sectionStyles.margin}`}>
        <div className={styles.section}>
          <div className={sectionStyles.bottomBox}>
            <div className={styles.title}>
              {formatMessage({
                id: `homepage.service`,
              })}
            </div>
            <div className={styles.shortDescription}>
              {formatMessage({
                id: `homepage.service.shortDescription`,
              })}
            </div>

            <div
              className={sectionStyles.bottomTextRegular}
            >{``}</div>
          </div>
        </div>
    </InnerSection>
  );
};

export default IntroductionSection;
