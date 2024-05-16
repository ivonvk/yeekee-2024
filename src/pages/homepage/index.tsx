import type { NextPage } from "next";
import { useIntl } from "react-intl";

import { useEffect } from "react";
import ccxt from "ccxt";
import styles from '../../styles/main.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HardwareRecyclingSection from "../../components/Section/Service/HardwareRecyclingSection";
import ProductListSection from "../../components/Section/Service/ProductListSection";
import CustomizationServiceSection from "../../components/Section/Service/CustomizationServiceSection";
import PaymentChannelsSection from "../../components/Section/Service/PaymentChannelsSection";
import Header from "../../components/Navbars/Header";
import { SEO } from "../../components/seo";
import { usePages } from "../../contexts/pages/use-pages";
import { ContactUsSection } from "../../feature/index/ContactUsSection";
import { PagesType } from "../../types/pages";
import { HomeSection } from "../../feature/index/HomeSection";
import Footer from "../../components/Footers/Footer";
import ThemeSection from "../../components/Section/ThemeSection";

interface HomeProps {
}

// export const getServerSideProps = async (context: NextPageContext) => {
//   // TODO?: call api for FAQ?
//   return {
//     props: {
//       initialRate: await fetchTickers(),
//     },
//   };
// };

const Home: NextPage<HomeProps> = ({}) => {
  const { formatMessage } = useIntl();
  const pagesContext = usePages();
  useEffect(()=>{
    pagesContext.setPages(PagesType.homepage)
  },[])
  return (
    <>
      <SEO
        title={formatMessage({
          id: "seo.title_long",
        })}
        description={formatMessage({
          id: "seo.description",
        })}
      />
     
      <Header scrollTransparent />
      
      <section id="home" className={pagesContext.pages===PagesType.homepage? styles.sectionHome:styles.nonDisplay}>
    <ThemeSection>

   <Footer/>

    </ThemeSection>
 
  </section>
 
    </>
  );
};

export default Home;
