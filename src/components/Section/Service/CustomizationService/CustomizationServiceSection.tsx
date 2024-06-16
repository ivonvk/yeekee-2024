import React from "react";
import styles from "../../SectionCommon.module.scss";
import sectionStyles from "./CustomizationServiceSection.module.scss";
import InnerSection from "../../InnerSection";
import InfoBox from "../../../Display/InfoBox";
import { useTranslation } from "react-i18next";



interface CustomizationServiceSectionProps {}

const CustomizationServiceSection: React.FC<
CustomizationServiceSectionProps
> = ({  }) => {
  const { t } = useTranslation();
  
  return (
    <InnerSection className={`${styles.container} ${sectionStyles.margin}`}>
    <div className={styles.section}>
    <div className={styles.title}>
    {t(`service.customization_service`)}
    </div>
    <div className={styles.shortDescription}>
    {t(`customization_service.shortDescription`)}
    </div>
    <div className={sectionStyles.textBox}>
      <InfoBox title={t('customization_service.type')} content={`我們提供多種不同類型的鐵桶和膠桶，以滿足各種需求。我們的鐵桶和膠桶包括儲存桶、運輸桶和工業用桶等。
      
      這些鐵桶具有堅固耐用、防腐蝕和耐壓的特點，適用於化學品、液體和固體的儲存和運輸。另外，我們的膠桶分為開口膠桶和密封膠桶兩種類型，適用於食品、油漆、化學品等不同行業的使用。`}/>
    <InfoBox title={t('customization_service.size')} content={`尺寸差異就了鐵桶和膠桶各自的用途特點。鐵桶因為身材高大,非常適合用作雨水收集、垃圾儲存等需要較大容量的場合。而相對矮小的膠桶則更適合作為日常儲存食用油、化學溶劑等液體物品的容器,攜帶起來也更加方便。

不僅如此,兩者的材質差異同樣影響到了它們的實際用途。鐵桶堅固耐用,可承受較大的重壓,非常適合作為承重容器使用。但相對來說,它也更加沉重笨重。而膠桶雖然不如鐵桶堅固,但得益於塑料的輕便性,在需要經常搬運的場景中更有優勢。`}/>
    <InfoBox title={t('customization_service.process')} content={`膠桶和鐵桶除了原有的用途,還可以進行一些升級改造,賦予它們新的功能。

    可以將膠桶的上半部分裁切下來,底部留作容器在容器側面開一個大口,用作裝填泥土或其他材料, 這樣就可以方便地將泥土、沙子等倒入容器中使用。
    
    去除桶蓋,在桶體上開洞,就可以成為簡易的燒烤爐具, 鐵桶的金屬材質非常耐高溫,十分適合燒烤使用, 還可以在桶體上加裝支架,使其更穩固`}/></div>
    </div>
    </InnerSection>
  );
};

export default CustomizationServiceSection;
