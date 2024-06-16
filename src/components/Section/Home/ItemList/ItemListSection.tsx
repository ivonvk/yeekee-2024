import React, { useEffect } from "react";
import styles from "../../SectionCommon.module.scss";
import sectionStyles from "./ItemListSection.module.scss";
import InnerSection from "../../InnerSection";
import { useTranslation } from "react-i18next";
import items_array from "../../../../assets/items/items_array";
import { useRouter } from "next/router";

interface ItemListSectionProps {}

const ItemListSection: React.FC<ItemListSectionProps> = ({}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useRouter();
  const renderItemArray = () => {
    var array = [] as any[];
    var items = [] as any[];

    const getId = (item:any)=>{
      var temp = item.split("/").find((x:string)=>x.includes("IMG"))
      var id = temp.toString().split(".")[0].toString()
      return id
    }


    items_array.map(async (item, index) => {
      if (index % 3 === 2 || index === items_array.length - 1) {
        items.push(
          <img
            alt={item}
            onClick={() => {
              router.push({ pathname: `/homepage/item_page`, query: { id:getId(item) } });
            }}
            src={item}
            className={sectionStyles.img}
            key={index}
          ></img>
        );

        array.push(
          <div className={sectionStyles.imgBoxRow} key={"array_" + index}>
            {items}
          </div>
        );
        items = [];
      } else {
        items.push(
          <img
          alt={item}
            onClick={() => {
              router.push({ pathname: `/homepage/item_page`, query: { id: getId(item) } });
            }}
            src={item}
            className={sectionStyles.img}
            key={index}
          ></img>
        );
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
