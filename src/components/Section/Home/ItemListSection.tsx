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

      items_array.map(async (item, index) => {
       const callWhatsApp = async ()=>{
        const phone = '93558010'
        const response = await fetch(item);
        const blob = await response.blob();
        const link = document.createElement('a');
        // 设置链接的href属性为图片数据
        link.href = URL.createObjectURL(blob);
        // 设置链接的download属性为文件名
        link.download = 'image.jpg';
        // 将链接添加到文档中
        document.body.appendChild(link);
        // 触发链接的点击事件
        link.click();
        // 从文档中移除链接
        document.body.removeChild(link);
            // 构建WhatsApp分享URL
    const message = '我想查詢價格';
    const whatsAppUrl = `https://wa.me/?phone=${phone}&text=${encodeURIComponent(message)} ${URL.createObjectURL(blob)}`;
    // 在新窗口或标签页中打开分享URL
    window.open(whatsAppUrl, '_blank');
       }

        if (index % 3 === 2||(index === items_array.length-1)) {



          

          items.push(<img 
            
            onClick={()=>{
            //  callWhatsApp()
            }}
            src={item}className={sectionStyles.img} key={index}></img>)

          array.push(<div className={sectionStyles.imgBoxRow} key={"array_"+index}>{items}</div>);
          items = [];
        }else{
          items.push(<img 
            onClick={()=>{
             // callWhatsApp()
            }}
            src={item}className={sectionStyles.img} key={index}></img>)

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
