import Header from "../components/Navbars/Header";
import { SEO } from "../components/seo";
import type { NextPage } from "next";
import { useIntl } from "react-intl";

import { useEffect } from "react";
import { usePages } from "../contexts/pages/use-pages";
import { PagesType } from "../types/pages";
import Footer from "../components/Footers/Footer";
import ccxt from "ccxt";
import { HomeSection } from "../feature/index/HomeSection";
import { sliderImageLinks } from "../constant/link";
import styles from '../styles/main.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ServiceSection } from "../feature/index/ServiceSection";
import { ContactUsSection } from "../feature/index/ContactUsSection";
import router from "next/router";

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
    router.push('/homepage')
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
     
      
  
    </>
  );
};

export default Home;
