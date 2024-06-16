import React, { useEffect, useState } from "react";
import styles from "../../../SectionCommon.module.scss";
import sectionStyles from "./ItemPageSection.module.scss";
import InnerSection from "../../../InnerSection";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

import { convertCsvToObjectArray } from "../../../../../utils/getData";
import { usePapaParse } from "react-papaparse";
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
    setTargetItem(
      new ItemModel({ ...items.find((x) => x?.id?.includes(id as any)) })
    );
  }, [id, items]);

  const renderImg = () => {
    return items_array.find((x) => x.includes(id));
  };
  const renderImgById = (targetId: string) => {
    return items_array.find((x) => x.includes(targetId));
  };
  const renderItemArray = () => {
    var array = [] as any[];
    var items = [] as any[];

    const getId = (item: any) => {
      var temp = item.split("/").find((x: string) => x.includes("IMG"));
      var id = temp.toString().split(".")[0].toString();
      return id;
    };

    targetItem.other_ids?.split(",").map(async (item, index) => {
      if (index % 5 === 4 || index === items_array.length - 1) {
        items.push(
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
      onClick={()=>{
        router.push({
          pathname: `/homepage`
        });
      }}
      className={sectionStyles.back}>{t('label.backHomepage')}</div>

        <div className={sectionStyles.box}>
          
          {/* <div className={styles.title}>{t(`homepage.service`)}</div>
          <div className={styles.shortDescription}>
            {t(`homepage.service.shortDescription`)}
          </div> */}
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
              <div className={sectionStyles.label}>
                <CommonLabel text={t(`label.name`)} />
              </div>
              <CommonLabel text={targetItem.name_zh ?? "-"} />
            </div>
            <div className={sectionStyles.row}>
              <div className={sectionStyles.label}>
                <CommonLabel text={t(`label.description`)} />
              </div>
              <CommonLabel text={targetItem.name_zh ?? "-"} />
            </div>
            {/* <div className={sectionStyles.row}>
             {targetItem?.other_ids?.split(',')?.map((x)=>{
              return <img alt={x}className={styles.smallImg} src={renderImgById(x)}></img>
             })}
             <img className={styles.smallImg}></img>
            </div> */}
                <CommonLabel text={t(`label.otherImgs`)} />
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
