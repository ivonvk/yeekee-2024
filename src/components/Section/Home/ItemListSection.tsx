import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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
          items.push(<img src={item}className={sectionStyles.img}></img>)

          array.push(<div className={sectionStyles.imgBoxRow}>{items}</div>);
          items = [];
        }else{
          items.push(<img src={item}className={sectionStyles.img}></img>)

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
