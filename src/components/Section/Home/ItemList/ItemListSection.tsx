import React, { useEffect, useState } from "react";
import styles from "../../SectionCommon.module.scss";
import sectionStyles from "./ItemListSection.module.scss";
import InnerSection from "../../InnerSection";
import { useTranslation } from "react-i18next";
import items_array from "../../../../assets/items/items_array";
import { useRouter } from "next/router";
import ItemModel from "../../../../types/model/ItemModel";
import { ItemCategory } from "../../../../types/item";
const item_description = require("../../../../assets/item_description.csv");

interface ItemListSectionProps {}

const ItemListSection: React.FC<ItemListSectionProps> = ({}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = useRouter();
  const [allItems, setAllItems] = useState([] as ItemModel[]);
  const [currentCategory, setCurrentCategory] = useState(ItemCategory.L200);

  useEffect(() => {
    setAllItems(item_description as ItemModel[]);
  }, []);

  const rednerTab = () => {
    var items = [] as any[];
    var array = [] as any[];
    var count = 0;
    Object.entries(ItemCategory).map((x: any,index) => {
    


      if (count % 3 === 2 || index ===  Object.entries(ItemCategory).length - 1) {
        items.push(
          <div
          className={sectionStyles.text}
          onClick={() => {
            setCurrentCategory(x[1] as ItemCategory);
          }}
        >
          {x[1].toString()}
        </div>
        );

        array.push(
          <div className={sectionStyles.imgBoxRow} key={"array_" + index}>
            {items}
          </div>
        );
        items = [];
        count=0;

      } else {
        count+=1;
        items.push(
          <div
          className={sectionStyles.text}
          onClick={() => {
            setCurrentCategory(x[1] as ItemCategory);
          }}
        >
          {x[1].toString()}
        </div>
        );
      }





    });

    return <div className={sectionStyles.imgBoxColumm}>{array}</div>;
  };

  const renderItemArray = () => {
    var array = [] as any[];
    var items = [] as any[];
var count = 1;
    const getId = (item: any) => {
      var temp = item.split("/").find((x: string) => x.includes("IMG"));
      var id = temp.toString().split(".")[0].toString();
      return id;
    };

    items_array.map(async (item, index) => {
      if (
        new ItemModel({ ...allItems.find((x) => x?.id?.includes(getId(item))) })
          .category === currentCategory
      ) {
        count+=1
        if (count% 3===0 || index === items_array.length - 1) {
          items.push(
            <div
              className={sectionStyles.imgBox}
              onClick={() => {
                router.push({
                  pathname: `/homepage/item_page`,
                  query: { id: getId(item) },
                });
              }}
            >
              <img
                alt={item}
                src={item}
                className={sectionStyles.img}
                key={index}
              ></img>
              <div className={sectionStyles.text}>
                {new ItemModel({
                  ...allItems.find((x) => x?.id?.includes(getId(item))),
                }).name_zh ?? "-"}
              </div>
            </div>
          );

          array.push(
            <div className={sectionStyles.imgBoxRow} key={"array_" + index}>
              {items}
            </div>
          );
          items = [];

        } else {
          items.push(
            <div
              className={sectionStyles.imgBox}
              onClick={() => {
                router.push({
                  pathname: `/homepage/item_page`,
                  query: { id: getId(item) },
                });
              }}
            >
              <img
                alt={item}
                src={item}
                className={sectionStyles.img}
                key={index}
              ></img>
              <div className={sectionStyles.text}>
                {new ItemModel({
                  ...allItems.find((x) => x?.id?.includes(getId(item))),
                }).name_zh ?? "-"}
              </div>
            </div>
          );
        }
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
          {rednerTab()}
          {renderItemArray()}
        </div>
      </div>
    </InnerSection>
  );
};

export default ItemListSection;
