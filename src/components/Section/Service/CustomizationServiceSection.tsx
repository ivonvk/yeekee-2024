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
    <div className={sectionStyles.textBox}>
      <InfoBox title={formatMessage({id:'customization_service.type'})} content={`我們提供多種不同類型的鐵桶和膠桶，以滿足各種需求。我們的鐵桶和膠桶包括儲存桶、運輸桶和工業用桶等。這些鐵桶具有堅固耐用、防腐蝕和耐壓的特點，適用於化學品、液體和固體的儲存和運輸。另外，我們的膠桶分為開口膠桶和密封膠桶兩種類型，適用於食品、油漆、化學品等不同行業的使用。`}/>
    <InfoBox title={formatMessage({id:'customization_service.size'})} content={""}/>
    <InfoBox title={formatMessage({id:'customization_service.process'})} content={""}/></div>
    </div>
    </InnerSection>
  );
};

export default CustomizationServiceSection;
