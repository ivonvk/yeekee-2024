import type { NextPage } from "next";

import { useEffect } from "react";
import styles from "../../styles/main.module.scss";
import HardwareRecyclingSection from "../../components/Section/Service/HardwareRecyclingSection";
import ProductListSection from "../../components/Section/Service/ProductListSection";
import CustomizationServiceSection from "../../components/Section/Service/CustomizationServiceSection";
import PaymentChannelsSection from "../../components/Section/Service/PaymentChannelsSection";
import Header from "../../components/Navbars/Header";
import { SEO } from "../../components/seo";
import { usePages } from "../../contexts/pages/use-pages";
import { PagesType } from "../../types/pages";
import Footer from "../../components/Footers/Footer";
import ThemeSection from "../../components/Section/ThemeSection";
import { useTranslation } from "react-i18next";
interface HomeProps {}
const Home: NextPage<HomeProps> = ({}) => {
  const { t } = useTranslation();

  const pagesContext = usePages();
  useEffect(() => {
    pagesContext.setPages(PagesType.service);
  }, []);
  return (
    <>
      <SEO title={t("seo.title_long")} description={t("seo.description")} />
      <Header scrollTransparent />
      <section
        id="service"
        className={
          pagesContext.pages === PagesType.service
            ? styles.sectionHome
            : styles.nonDisplay
        }
      >
        <ThemeSection>
          <CustomizationServiceSection />

          <ProductListSection />
          <PaymentChannelsSection />

          <HardwareRecyclingSection />
          <Footer />
        </ThemeSection>
      </section>
    </>
  );
};

export default Home;
