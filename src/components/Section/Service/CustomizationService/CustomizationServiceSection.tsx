import React from "react";
import styles from "../../SectionCommon.module.scss";
import sectionStyles from "./CustomizationServiceSection.module.scss";
import InnerSection from "../../InnerSection";
import InfoBox from "../../../Display/InfoBox";
import { useTranslation } from "react-i18next";

interface CustomizationServiceSectionProps {}

const CustomizationServiceSection: React.FC<
  CustomizationServiceSectionProps
> = ({}) => {
  const { t } = useTranslation();

  return (
    <InnerSection className={`${styles.container} ${sectionStyles.margin}`}>
      <div className={styles.section}>
        <div className={styles.title}>{t(`service.customization_service`)}</div>
        <div className={styles.shortDescription}>
          {t(`customization_service.shortDescription`)}
        </div>
       
      </div>
      <div className={sectionStyles.block}/>
      <div className={sectionStyles.textBox}>
          <InfoBox
            title={`送貨服務`}
            content={`出發點由屯門至送貨地區包括港九新界，並與客戶溝通安排合理時間收貨`}
          />
          <InfoBox
            title={`廢膠廢鐵回收`}
            content={`回收包括化工桶/裝過料的吉桶細桶罐仔，需要客戶溝通和拍照吉桶內外面，通常不用回收費但視情況而定收費`}
          />
          <InfoBox
            title={`鐵桶交地盤`}
            content={`倒石屎鐵桶，用於田螺車屙屎，可分期交貨，分期付款`}
          />
       
        </div>
        <div className={sectionStyles.textBox}>
        <InfoBox
            title={`農莊種植`}
            content={`化肥，堆肥，廚餘可用，通常交易桶數量不大，可到店自取，改尺寸`}
          />
          <InfoBox
            title={`燒衣元寶桶`}
            content={`訂做化寶大鐵桶，可用十幾年，大量燒，通常送到屋苑，交易桶數量不大甚至個位數交易`}
          />
          <InfoBox
            title={`養魚桶漁桶`}
            content={`漁桶會交向漁市場裝魚，可以私人養魚用，做魚菜共生`}
          />
       
        </div>



  
      <div className={sectionStyles.textBox}>
        
        <InfoBox
          title={`漂水廠罐仔回收`}
          content={`用完漂水的罐仔可用高於廢膠回收價錢回收，詳細需要與客戶溝通及拍照給我們查看`}
        />
        <InfoBox
          title={`洗潔精廠梘油桶回收`}
          content={`用完洗淨精的梘油桶可用高於廢膠回收價錢回收，詳細需要與客戶溝通及拍照給我們查看`}
        />
        <InfoBox
          title={`食物廠食物/豬油桶回收`}
          content={`用完的食物/豬油桶可用高於廢膠回收價錢回收，詳細需要與客戶溝通及拍照給我們查看`}
        />
      </div>
      <div className={sectionStyles.textBox}>
        <InfoBox
          title={`蠔油豉油裝醋回收`}
          content={`用完蠔油豉油裝醋的罐仔/吉桶可用高於廢膠回收價錢回收，詳細需要與客戶溝通及拍照給我們查看`}
        />
        <InfoBox
          title={`膠桶鋸開定製`}
          content={`因客人要求而定，方便擺存，疊高擺存，鋸開兩半高度訂製，開桶面口`}
        />
        <InfoBox
          title={`鐵桶開蓋定製`}
          content={`因客人要求而定，方便擺存，作開桶面，中間開窿做元寶桶`}
        />
      </div>
      <div className={sectionStyles.textBox}>
        
        <InfoBox
          title={`有耳倒泥頭桶`}
          content={`每星期根據回收膠桶數量回收膠桶數量做大量倒泥頭桶供給地盤施工用`}
        />
        <InfoBox
          title={`有耳漁桶`}
          content={`每星期根據回收膠桶數量回收膠桶數量做大量漁桶供賣魚用`}
        />
        <InfoBox
          title={`有耳倒垃圾桶`}
          content={`每星期根據回收膠桶數量回收膠桶數量做大量倒垃圾供客人倒垃圾用`}
        />
      </div>
      <div className={sectionStyles.textBox}>
        <InfoBox
          title={`有耳廚餘桶`}
          content={`每星期根據回收膠桶數量回收膠桶數量做大量倒垃圾供餐廳/酒樓/街市倒垃圾用`}
        />
        <InfoBox
          title={`有耳打漿桶`}
          content={`每星期根據回收膠桶數量回收膠桶數量做大量打漿桶供外牆批盪/維修大廈用`}
        />
        <InfoBox
          title={`有耳滑底桶`}
          content={`每星期根據回收膠桶數量回收膠桶數量做大量滑底桶，可以拖拉搬運，疊成一棟`}
        />
      </div>

      <div className={sectionStyles.textBox}>
 
        <InfoBox 
        
        title={`藍色大桶`} content={`可鋸開兩半並訂做不同用途，可上門回收或者買賣`} />
        <InfoBox

          title={`白色大桶`}
          content={`白色大膠桶，可上門回收或者買賣`}
        />
 <InfoBox
          title={`大鐵桶`}
          content={`電油桶/豬油桶/化工鐵桶，可上門回收或者買賣`}
          
        />
        
      </div>


      <div className={sectionStyles.textBox}>
        <InfoBox title={`雙邊魚排桶`} content={`拆漁排用，養魚養蠔，做木筏，可上門回收或者買賣`} />

      <InfoBox title={`有蓋鐵桶`}
      
      content={`可上門回收或者買賣`} />
        <InfoBox

          title={`蓋鈷鐵桶`}
          content={`做環保桶用，化學廢理，回收化學廢料，可上門回收或者買賣，通常一車做50~60個`}
        /></div>
      <div className={sectionStyles.textBox}>
     
    
        <InfoBox
        
        title={`中桶`} content={`一車可以裝到最多110個，可上門回收或者買賣`} />

      
        <InfoBox

          title={`膠罐`}
          content={`可上門回收或者買賣，通常做大量，至少100~200隻，一車可以車500~600個`}
        />
        <InfoBox title={`化肥桶`} content={`農場用，堆肥，化肥，廚餘用`} />

      </div>

      <div className={sectionStyles.textBox}>
        <InfoBox

          title={`漂水罐仔`}
          content={`可上門回收或者買賣，通常做大量，至少100~200隻，一車可以車500~600個`}
        />
        <InfoBox 
        
        title={`手抽桶`} content={`二手但9成新，外牆開水泥/泥漿用`} />
        <InfoBox
          title={`1000升水箱`}
          content={`地盤用／裝食水/儲水/其他用途`}
        />
      </div>
    </InnerSection>
  );
};

export default CustomizationServiceSection;
