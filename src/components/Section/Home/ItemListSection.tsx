import React, { useEffect } from "react";
import styles from "../../Section/SectionCommon.module.scss";
import sectionStyles from "../../Section/Home/ItemListSection.module.scss";
import InnerSection from "../InnerSection";
import { useTranslation } from "react-i18next";
import items_array from "../../../assets/items/items_array";

interface ItemListSectionProps {}

const ItemListSection: React.FC<ItemListSectionProps> = ({}) => {
  const { t } = useTranslation();
  const renderItemArray = () => {
    var array = [] as any[];
    var items = [] as any[];

      items_array.map((item, index) => {
        if (index % 3 === 0||(index === items_array.length-1)) {
          items.push(<img src={item}className={sectionStyles.img} key={index}></img>)

          array.push(<div className={sectionStyles.imgBoxRow} key={"array_"+index}>{items}</div>);
          items = [];
        }else{
          items.push(<img src={item}className={sectionStyles.img} key={index}></img>)

        }

      });
      return <div className={sectionStyles.imgBoxColumm}>{array}</div>;

  };
  return (
    <InnerSection className={`${styles.container} ${sectionStyles.margin}`}>
      <div className={styles.section}>
        <div className={sectionStyles.bottomBox}>
          <div className={styles.title}>{t(`homepage.service`)}</div>
          <div className={styles.shortDescription}>
            {t(`homepage.service.shortDescription`)}
          </div>

          {renderItemArray()}
        </div>
      </div>
    </InnerSection>
  );
};

export default ItemListSection;
