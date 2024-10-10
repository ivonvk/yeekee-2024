import { SEO } from "../components/seo";
import type { NextPage } from "next";

import { useEffect } from "react";
import { usePages } from "../contexts/pages/use-pages";
import { PagesType } from "../types/pages";
import router, { useRouter } from "next/router";
import { useTranslation } from "react-i18next";



import styles from "../styles/main.module.scss";
import Header from "../components/Navbars/Header";
import Footer from "../components/Footers/Footer";
import ItemListSection from "../components/Section/Home/ItemList/ItemListSection";
import ThemeSection from "../components/Section/ThemeSection";
import PaymentChannelsSection from "components/Section/Service/PaymentChannels/PaymentChannelsSection";
import CustomizationServiceSection from "components/Section/Service/CustomizationService/CustomizationServiceSection";
import HardwareRecyclingSection from "components/Section/Service/HardwareRecycling/HardwareRecyclingSection";

interface HomeProps {
}
const Home: NextPage<HomeProps> = ({}) => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const pagesContext = usePages();
  useEffect(()=>{
    pagesContext.setPages(PagesType.homepage)
  //  router.push(`/${locale}/homepage`)
  },[])
  return (
    <>
      <SEO
        title={t("seo.title_long")}
        description={t("seo.description")}
        canonical="https://yk-ee.hk"
      />
     
      
     <Header scrollTransparent />

<section
  id="home"
  className={
styles.sectionHome
  }
>
  <ThemeSection>
  <CustomizationServiceSection />

{/* <ProductListSection /> */}
<PaymentChannelsSection />

<HardwareRecyclingSection />
  </ThemeSection>
</section>
    </>
  );
};

export default Home;
