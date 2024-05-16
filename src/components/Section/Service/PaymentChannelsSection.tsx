import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "../SectionCommon.module.scss";
import sectionStyles from "../Service/PaymentChannelsSection.module.scss";
import InnerSection from "../InnerSection";
import InfoBox from "../../Display/InfoBox";
import { payment, serviceInfos } from "../../../constant/text/services";
import IconBox from "../../Display/IconBox";
import assets from "../../../assets/img/assets";



interface PaymentChannelsSectionProps {}

const PaymentChannelsSection: React.FC<
  PaymentChannelsSectionProps
> = ({  }) => {
  const { formatMessage } = useIntl();

  return (
    <InnerSection className={`${styles.container} ${sectionStyles.margin}`}>
        <div className={styles.section}>
            <div className={styles.title}>
              {formatMessage({
                id: `service.payment_channels`,
              })}
            </div>
            <div className={styles.shortDescription}>
              {formatMessage({
                id: `payment_channels.shortDescription`,
              })}
            </div>
            <div className={sectionStyles.textBox}>
      <IconBox title={formatMessage({ id: 'payment_channels.fps' })} img={assets.SERVICE_FPS}/>
    <IconBox title={formatMessage({id:'payment_channels.payme'})} img={assets.SERVICE_PAYME}/>
    <IconBox title={formatMessage({id:'payment_channels.cash'})} img={assets.SERVICE_PAYMENT}/></div>
    </div>
    </InnerSection>
  );
};

export default PaymentChannelsSection;
