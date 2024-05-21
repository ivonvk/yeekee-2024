import React, { useEffect } from "react";
import styles from "../SectionCommon.module.scss";
import sectionStyles from "../Service/IntroductionSection.module.scss";
import InnerSection from "../InnerSection";
import InfoBox from "../../Display/InfoBox";
import { payment, serviceInfos } from "../../../constant/text/services";
import { useTranslation } from "react-i18next";



interface IntroductionSectionProps {}

const IntroductionSection: React.FC<
  IntroductionSectionProps
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
              {t(`service.shortDescription`)}
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
