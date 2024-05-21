import React from "react";
import styles from "../SectionCommon.module.scss";
import sectionStyles from "../Service/HardwareRecyclingSection.module.scss";
import InnerSection from "../InnerSection";
import { useTranslation } from "react-i18next";

interface HardwareRecyclingSectionProps {}

const HardwareRecyclingSection: React.FC<
  HardwareRecyclingSectionProps
> = ({}) => {
  const { t } = useTranslation();

  return (
    <InnerSection className={`${styles.container} ${sectionStyles.margin} ${sectionStyles.container}`}>
      <div className={`${styles.section} ${sectionStyles.section}`}>
        <div className={`${styles.title} ${sectionStyles.zIndex}`}>
          {t(`service.hardware_recycling`)}
        </div>
        <div className={`${styles.shortDescription} ${sectionStyles.zIndex}`}>
          {t(`hardware_recycling.shortDescription`)}
        </div>
        <div className={sectionStyles.box}>
          <div
            className={`${sectionStyles.content} ${sectionStyles.zIndex}`}
          >{`五金回收是一個重要的環保行業，旨在回收和再利用各種金屬和塑料製品，尤其是膠桶和鐵桶等五金製品。這些製品通常在工業、商業和家庭使用中產生，並且在使用結束後往往被視為廢棄物。

五金回收業的目標是將這些廢棄物材料回收並加以處理，以降低對環境的影響。這些回收的材料可以進一步被重新加工和再利用，以生產新的產品或原材料。

在五金回收業中，膠桶和鐵桶是常見的回收對象。膠桶通常用於儲存和運輸各種化學物質、液體或固體物料，而鐵桶則用於儲存和運輸金屬、石油產品等。這些桶子在使用過程中可能會損壞或變得不再適用，因此回收並再利用它們對於節省資源、減少廢棄物和減少對自然環境的負擔至關重要。

五金回收業通常與廢物處理和再生產業相關聯。回收公司或回收站通常接收這些膠桶和鐵桶，對其進行分類、處理和再加工。這些過程可能包括清潔、拆解、破碎、熔化或其他方法，以便回收材料可以被重新製造和使用。

五金回收的好處包括減少對自然資源的需求、減少能源消耗、減少廢棄物產生和減少環境污染。此外，透過回收和再利用五金製品，還可以節省生產新材料所需的成本和能源。

總的來說，五金回收是一個重要的行業，有助於實現資源循環利用和環境可持續發展的目標。通過回收和再利用膠桶、鐵桶等五金製品，我們可以最大程度地減少對大自然的負擔，同時降低生產新材料的成本和能源消耗。`}</div>
        </div>
      </div>
    </InnerSection>
  );
};

export default HardwareRecyclingSection;
