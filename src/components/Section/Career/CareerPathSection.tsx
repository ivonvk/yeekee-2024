import React from "react";
import styles from "../SectionCommon.module.scss";
import sectionStyles from "../Career/CareerPathSection.module.scss";
import InnerSection from "../InnerSection";
import { useTranslation } from "react-i18next";
import CareerPath from "components/Display/CareerPath";


interface ProductListSectionProps {}

const CareerSection: React.FC<ProductListSectionProps> = ({}) => {
  const { t } = useTranslation();
  const careerSteps = [
    {
      title: "政府漁農處鼓勵\n有機復耕",
      description: "政府鼓勵大學在河套區研究農耕漁業新科技發展,鼓勵年青人參與科研發展,包括新的耕種方法",
        year: "2017後"
    },
    {
      title: "有機耕種\n荒田復耕",
      description: "當時政府提倡新界荒廢用地復耕,吸引了很多當時的年青人,由城市走到大自然耕種,回歸大自然,產生了很多有機耕種和有機農場,例如魚菜共生/人工養殖基圍蝦/元朗有機大米,所以膠桶需求增加",
        year: "2017"
    },
    {
      title: "病毒肆虐\n一漂難求",
      description: "餐廳/酒樓/醫院,因為要殺滅SARS病菌所以需要大量漂水消毒,所以25kg膠罐需求大增,當時膠罐漂水漲價幾倍,而且大廈坑渠設計不良,所以要大量漂水消毒,影響樓價大趺",
        year: "2002 - 2003"
    },
    {
      title: "工業式微",
      description: "因為面對內地生產,很多在香港工廠生產的品牌開始式微,導致化工桶大減,例如玩具製造業/鐘錶製造業/紡織業/漂染業/甚至飲食業,因為人們開始北上消費",
        year: "2000後"
    },
    {
      title: "工業式微",
      description: "因為面對內地生產,很多在香港工廠生產的品牌開始式微,導致化工桶大減,例如玩具製造業/鐘錶製造業/紡織業/漂染業/甚至飲食業,因為人們開始北上消費",
        year: "2000後"
    },
    {
      title: "面向中國大陸",
      description: "回歸後大量香港人北上投資,工廠北移,導致各行各業化工產品需求大減",
        year: "2000後"
    },
    {
      title: "有失",
      description: "因為廢料處理,化工桶屬於化學原料的容器,化工桶需要清洗,所以環保處要限制使用,導理各行各業逼於逐漸減少用使用化工桶,因為城市規劃,地方限制,環保意識限制,對處理化工行業產生運作很大困難",
        year: "2000後"
    },
    {
      title: "有得",
      description: "遷拆七層大廈徙置區導致大量石棉出現,所以用大量空鐵桶盛載,因為時代變遷,公屋需求重新改造生活環境,有新的公屋出現,加上廢料處理需要大量空桶盛載,例如廢油/廢油渣/石棉/廢豬油,其實環保意識的抬頭,現在的化工桶用保險袋盛裝原料再放入化工桶,便可循環再用,不用清洗",
        year: "2000後"
    },

    
    {
      title: "環保意識抬頭",
      description: "化工桶開始沒落,人們對環境保護增強,導致需要化工產品污染性行業開始管制,興盛興衰落",
        year: "2000後"
    },

    {
      title: "有機耕種\n魚菜共生",
      description: "用60KG/100KG去做農耕化肥桶,200L大膠桶/1000升水箱做儲水農耕灌溉",
        year: "2000後"
    },
    {
      title: "新機場興建\n和工業巔峰",
      description: "新機場興建/工業/油庫需要大量空桶盛裝電油,大電油桶空桶需求大增,根據發電機需求,地盤用工業用油渣大增",
        year: "90年代 - 2000"
    },
    {
      title: "戶外活動發展",
      description: "紮魚排伸延出在用木筏來做水上活動包括在紮排上釣魚,用桶去做射擊WARGAME,而且WARGAME包括用200L膠桶,200L大鐵桶和1000升水箱的桶類去舉行",
        year: "90年代 - 2000"
    },

    {
      title: "漁業蓬勃發展",
      description: "因為酒樓多人吃海鮮導致海鮮業蓬勃發展,伸延出漁桶膠桶裝漁,吸引了很多人去做紮魚排",
        year: "80年代 - 90年代"
    },
    {
      title: "餐飲業蓬勃發展",
      description: "最初用火水罐去裝豆腐,80年代 - 90年代豆腐桶俗稱包仔豆腐,用膠桶來裝包仔豆腐。餐廳酒樓興盛,用化工桶鋸開大半再穿繩俗稱有耳廚餘桶",
        year: "80年代 - 90年代"
    },
    {
      title: "建築業蓬勃發展",
      description: "因為徙置區人口開始增多,導致公屋需求增大需不斷擴建,造成地盤需要大量鐵桶需求,例如鐵桶改造成鐵桶槽倒石屎廢物,加上90年代有山泥傾瀉,政府需要大量空鐵桶做圍牆斜坡維修,",
        year: "80年代 - 90年代"
    },
    {
      title: "時代演變",
      description: "過往50年代 - 60年代用火水罐去裝水, 80年代 - 90年代是用塑膠紅A/化工桶裝水/1000升水箱/大膠桶/大電油桶都是工廠常用的容器",
       year: "80年代 - 90年代"
    },
    {
      title: "黃金時代",
      description: "工業起飛,不同桶類的需求龐大,各個回收桶買賣供給各行各業使用,不限於工廠而且伸延至餐廳/漁牌/地盤/食品......以及更多的行業",
      year: "80年代"
    },
    {
      title: "娛樂事業\n黃金時代",
      description: "因為武打片興起,以及動作片潮流帶動,誕生很多槍擊畫面/大製作,需要大量鐵桶膠桶佈景裝飾,無論室內和室外電影大製作的場景擺設需求都大增",
        year: "70年代 - 80年代"
    },
    {
      title: "舊事物回顧",
      description: "徙置區當時有很多人用火水罐裝火水煮食,香港沒有鐵罐生產,主要用黑色塑膠扁盒膠罐,因為當時曾發生意外,塑膠罐容易破爛發生火警,20年後改用鐵罐而禁用膠罐裝火水",
        year: "70年代 - 80年代"
    },

    {
      title: "化工桶循環再用",
      description: "因為人口增加,因為衛生問題要生活/工作需要用到洗頭水/洗手液/漂水,將從工廠裡回收的25KG罐仔裝洗潔精/漂水供給飛髮舖/餐廳/大廈清潔消毒",
        year: "70年代 - 80年代"
    },
    {
      title: "工廠新需求",
      description: "香港70年代紡織業發達,漂染廠大量生產布匹原材料,另外電子業和鐘錶業發達,帶動電鍍廠蓬勃發展,生產後剩餘大量廢罝化工桶出現,香港沒有化工桶生產,工廠卻對化工產品需求大增,例如漂染劑/柔順劑做製衣成本需求,變成循環再用,讓回收的化工桶等化工產品再供應回工廠使用",
        year: "70年代 - 80年代"
    },
    {
      title: "新需求",
      description: "工廠生產後剩餘各種化工桶,但工廠老闆不想浪費又不想提高成本去進口新桶,當時沒有原隻新桶製造,伸延出桶類循環再用,回收桶買賣升級改造的時代誕生",
        year: "70年代 - 80年代"
    },
    {
      title: "工業興盛",
      description: "香港工廠興盛,電導廠/漂染廠/油公司/顏料五金廠/食物廠/蠔油廠生產後剩餘各種化工桶, 而不同的盛載容器開始自家生產,包括塑膠紅A品牌面世,",
      year: "70年代"
    },
    {
      title: "制水",
      description: "徙置區七層大廈,這個年代生活比較艱苦,因為經歷三日供一次水,而且沒有東江水,導致人們將各種各樣的桶去裝水和擔水,火水罐/木桶/鋅鐵桶/其他人手造的桶/少量化工桶去儲水",
      year: "50年代 - 60年代"
    }
  ];
  return (
    <InnerSection
      className={`${styles.container} ${sectionStyles.margin} ${sectionStyles.container}`}
    >
      <div className={`${styles.section} ${sectionStyles.section}`}>
        <div className={styles.title}>{`起源與過去，現在`}</div>
        <div className={styles.shortDescription}>
          {`桶的起源創立了義記，義記的創立陪伴了社會的改變，義記直至今日依然屹立不倒，無休盡責地貢獻社會`}
        </div>
        <CareerPath steps={careerSteps} />

      </div>
    </InnerSection>
  );
};

export default CareerSection;
