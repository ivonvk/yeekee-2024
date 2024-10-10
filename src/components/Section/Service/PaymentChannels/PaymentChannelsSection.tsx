import React from "react";
import styles from "../../SectionCommon.module.scss";
import sectionStyles from "./PaymentChannelsSection.module.scss";
import InnerSection from "../../InnerSection";
import IconBox from "../../../Display/IconBox";
import assets from "../../../../assets/img/assets";
import { useTranslation } from "react-i18next";


interface PaymentChannelsSectionProps {}

const PaymentChannelsSection: React.FC<
  PaymentChannelsSectionProps
> = ({  }) => {
  const { t } = useTranslation();

  return (
    <InnerSection className={`${styles.container} ${sectionStyles.margin} ${sectionStyles.container}`}>
        <div className={styles.section}>
            <div className={styles.title}>
              {t(`service.payment_channels`)}
            </div>
            <div className={styles.shortDescription}>
              {t(`payment_channels.shortDescription`)}
            </div>
            <div className={sectionStyles.textBox}>
      <IconBox title={t('payment_channels.fps')} img={assets.SERVICE_FPS}/>
    <IconBox title={t('payment_channels.payme')} img={assets.SERVICE_PAYME}/>
    <IconBox title={t('payment_channels.cash')} img={assets.SERVICE_PAYMENT}/></div>
    </div>
    </InnerSection>
  );
};

export default PaymentChannelsSection;
