import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "../SectionCommon.module.scss";
import sectionStyles from "../Service/IntroductionSection.module.scss";
import InnerSection from "../InnerSection";
import InfoBox from "../../Display/InfoBox";
import { payment, serviceInfos } from "../../../constant/text/services";



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
                id: `service.shortDescription`,
              })}
            </div>
          </div>
          <div className={sectionStyles.infoBoxes}>
            {serviceInfos?.map((item)=>{
              return (<InfoBox title={item.title} content={item.content}></InfoBox>)
            })}
          </div>
          <InfoBox title={payment.title} content={payment.content}></InfoBox>
        </div>
    </InnerSection>
  );
};

export default IntroductionSection;
