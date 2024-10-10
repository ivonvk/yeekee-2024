import type { NextPage } from "next";

import { useEffect } from "react";
import styles from "../../styles/main.module.scss";
import Header from "../../components/Navbars/Header";
import { SEO } from "../../components/seo";
import { usePages } from "../../contexts/pages/use-pages";
import { PagesType } from "../../types/pages";
import Footer from "../../components/Footers/Footer";
import ThemeSection from "../../components/Section/ThemeSection";
import { useTranslation } from "react-i18next";
import ItemListSection from "../../components/Section/Home/ItemList/ItemListSection";

interface HomeProps {}
const Home: NextPage<HomeProps> = ({}) => {
  const pagesContext = usePages();
  const { t } = useTranslation();

  useEffect(() => {
    pagesContext.setPages(PagesType.homepage);
  }, []);
  return (
    <>

      <Header scrollTransparent />

      <section
        id="home"
  
      >
        <ThemeSection>
  
        </ThemeSection>
      </section>
    </>
  );
};

export default Home;
