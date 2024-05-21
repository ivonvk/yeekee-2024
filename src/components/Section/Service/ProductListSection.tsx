import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "../SectionCommon.module.scss";
import sectionStyles from "../Service/ProductListSection.module.scss";
import InnerSection from "../InnerSection";
import InfoBox from "../../Display/InfoBox";
import { payment, serviceInfos } from "../../../constant/text/services";
import assets from "../../../assets/img/assets";
import { useTranslation } from "react-i18next";



interface ProductListSectionProps {}

const ProductListSection: React.FC<
  ProductListSectionProps
> = ({  }) => {
  const { t } = useTranslation();

  return (
    <InnerSection className={`${styles.container} ${sectionStyles.margin} ${sectionStyles.container}`}>
        <div className={`${styles.section} ${sectionStyles.section}`}>
            <div className={styles.title}>
              {t(`service.product_list`)}
            </div>
            <div className={styles.shortDescription}>
              {t(`product_list.shortDescription`)}
            </div>
            <div className={sectionStyles.box}>
              <img className={sectionStyles.img} src={assets.SERVICE_LIST}></img>
          <div
            className={sectionStyles.content}
          >{`中桶60kg、化工桶120kg、藍色大桶200kg、雙邊魚排桶200kg、白色大桶、大鐵桶、有蓋鐵桶200kg、膠罐30kg、漂水罐仔25kg、化肥桶50kg、手抽桶25kg，1000升水箱。`}</div>
        </div>

        </div>
    </InnerSection>
  );
};

export default ProductListSection;
