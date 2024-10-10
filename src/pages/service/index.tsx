import type { NextPage } from "next";

import { useEffect } from "react";
import styles from "../../styles/main.module.scss";
import HardwareRecyclingSection from "../../components/Section/Service/HardwareRecycling/HardwareRecyclingSection";
import ProductListSection from "../../components/Section/Service/ProductListSection";
import CustomizationServiceSection from "../../components/Section/Service/CustomizationService/CustomizationServiceSection";
import PaymentChannelsSection from "../../components/Section/Service/PaymentChannels/PaymentChannelsSection";
import Header from "../../components/Navbars/Header";
import { SEO } from "../../components/seo";
import { usePages } from "../../contexts/pages/use-pages";
import { PagesType } from "../../types/pages";
import Footer from "../../components/Footers/Footer";
import ThemeSection from "../../components/Section/ThemeSection";
import { useTranslation } from "react-i18next";
import ItemListSection from "components/Section/Home/ItemList/ItemListSection";
interface HomeProps {}
const Home: NextPage<HomeProps> = ({}) => {
  const { t } = useTranslation();

  const pagesContext = usePages();
  useEffect(() => {
    pagesContext.setPages(PagesType.service);
  }, []);
  return (
    <>
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
         
          <ItemListSection/>

        </ThemeSection>
      </section>
    </>
  );
};

export default Home;
