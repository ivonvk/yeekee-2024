import React, { useEffect, useState } from "react";
import styles from "../../../SectionCommon.module.scss";
import sectionStyles from "./ItemPageSection.module.scss";
import InnerSection from "../../../InnerSection";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import ItemModel from "../../../../../types/model/ItemModel";
import items_array from "../../../../../assets/items/items_array";
import CommonLabel from "../../../../Label/CommonLabel";
import ImageModal from "../../../../Modal/ImageModal";
const item_description = require("../../../../../assets/item_description.csv");
interface ItemPageSectionProps {}

const ItemPageSection: React.FC<ItemPageSectionProps> = ({}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;
  const [items, setItems] = useState([] as ItemModel[]);
  const [targetItem, setTargetItem] = useState({} as ItemModel);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setItems(item_description as ItemModel[]);
  }, [id]);
  useEffect(() => {
    var temp = new ItemModel({
      ...items.find((x) => x?.id?.includes(id as any)),
    });

    if (temp.other_ids?.length !== 0) {
      temp.other_ids += ",";
    }
    items?.map((x: ItemModel, index) => {
      if (
        x?.other_ids?.toString()?.includes(id as any) &&
        !temp.other_ids?.includes(x?.id as any)
      ) {
        temp.other_ids += (x?.id as any) + (index === items?.length ? "" : ",");
      }
    });
    setTargetItem(temp);
  }, [id, items]);

  const renderImg = () => {
    return items_array.find((x) => x.includes(id));
  };
  const renderImgById = (targetId: string) => {
    return items_array.find((x) => x.includes(targetId));
  };
  const renderItemArray = () => {
    var array = [] as any[];
    var temp_items = [] as any[];
    var count = 1;
    const getId = (item: any) => {
      var temp = item.split("/").find((x: string) => x.includes("IMG"));
      var id = temp?.toString()?.split(".")?.[0]?.toString();
      return id;
    };
    console.log();
    items &&
      targetItem &&
      targetItem?.other_ids?.split(",")?.map(async (item, index) => {
        count += 1;
        if (
          (count % 5 === 0 ||
          (targetItem?.other_ids &&
            index === targetItem?.other_ids?.split(",")?.length - 1))
        ) {
          if(item&&item!==''&&item!=="undefined") {
          temp_items.push(
            <img
              alt={item}
              onClick={() => {
                router.push({
                  pathname: `/homepage/item_page`,
                  query: { id: getId(item) },
                });
              }}
              src={renderImgById(item)}
              className={sectionStyles.img}
              key={index}
            ></img>
          );
        }
          array.push(
            <div className={sectionStyles.imgBoxRow} key={"array_" + index}>
              {temp_items}
            </div>
          );
          temp_items = [];
        } else if(item&&item!==''&&item!=="undefined") {
          temp_items.push(
            <img
              alt={item}
              onClick={() => {
                router.push({
                  pathname: `/homepage/item_page`,
                  query: { id: getId(item) },
                });
              }}
              src={renderImgById(item)}
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
        <div
          className={`${styles.title} ${sectionStyles.back}`}
          onClick={() => {
            router.push({
              //   pathname: `/homepage`
              pathname: `/`,
            });
          }}
        >
          {t(`label.backHomepage`)}
        </div>
        <div className={sectionStyles.box}>
          <img
            alt={`${id}`}
            onClick={() => {
              setOpenModal(true);
            }}
            className={sectionStyles.mainImg}
            src={renderImg()}
          />

          <div className={sectionStyles.infoBox}>
            <div className={sectionStyles.row}>
              <div className={sectionStyles.labelStyle}>
                <CommonLabel text={t(`label.name`)} />
              </div>
              <CommonLabel text={targetItem.name_zh ?? "-"} />
            </div>

            <div className={sectionStyles.row}>
              <div className={sectionStyles.labelStyle}>
                <CommonLabel text={t(`label.description`)} />
              </div>
              <CommonLabel text={targetItem.description ?? "-"} />
            </div>
            {/* <div className={sectionStyles.labelClick}>
                {t(`label.askItem`)}
            </div> */}
            {/* <div className={sectionStyles.row}>
             {targetItem?.other_ids?.split(',')?.map((x)=>{
              return <img alt={x}className={styles.smallImg} src={renderImgById(x)}></img>
             })}
             <img className={styles.smallImg}></img>
            </div> */}

            <div className={sectionStyles.row}>
              <div className={sectionStyles.labelStyle}>
                <CommonLabel text={t(`label.otherImgs`)} />
              </div>
            </div>

            {renderItemArray()}
          </div>
        </div>
      </div>
      <ImageModal
        image={renderImg()}
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      />
    </InnerSection>
  );
};

export default ItemPageSection;
