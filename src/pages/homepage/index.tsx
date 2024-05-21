import type { NextPage } from "next";

import { useEffect } from "react";
import styles from "../../styles/main.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from "../../components/Navbars/Header";
import { SEO } from "../../components/seo";
import { usePages } from "../../contexts/pages/use-pages";
import { PagesType } from "../../types/pages";
import Footer from "../../components/Footers/Footer";
import ThemeSection from "../../components/Section/ThemeSection";
import { useTranslation } from "react-i18next";
import ItemListSection from "../../components/Section/Home/ItemListSection";

interface HomeProps {}
const Home: NextPage<HomeProps> = ({}) => {
  const pagesContext = usePages();
  const { t } = useTranslation();

  useEffect(() => {
    pagesContext.setPages(PagesType.homepage);
  }, []);
  return (
    <>
      <SEO title={t("seo.title_long")} description={t("seo.description")} />

      <Header scrollTransparent />

      <section
        id="home"
        className={
          pagesContext.pages === PagesType.homepage
            ? styles.sectionHome
            : styles.nonDisplay
        }
      >
        <ThemeSection>
          <ItemListSection/>
          <Footer />
        </ThemeSection>
      </section>
    </>
  );
};

export default Home;
