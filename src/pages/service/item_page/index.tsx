import type { NextPage } from "next";

import { useEffect } from "react";
import styles from "../../../styles/main.module.scss";
import Header from "../../../components/Navbars/Header";
import { SEO } from "../../../components/seo";
import { usePages } from "../../../contexts/pages/use-pages";
import { PagesType } from "../../../types/pages";
import Footer from "../../../components/Footers/Footer";
import ThemeSection from "../../../components/Section/ThemeSection";
import { useTranslation } from "react-i18next";
import ItemPageSection from "../../../components/Section/Home/ItemList/ItemPage/ItemPageSection";

interface ItemPageProps {}
const ItemPage: NextPage<ItemPageProps> = ({}) => {
  const pagesContext = usePages();
  const { t } = useTranslation();

  useEffect(() => {
    pagesContext.setPages(PagesType.service);
  }, []);
  return (
    <>

      <Header scrollTransparent />

      <section
        id="home"
        className={
         styles.sectionItemPage
        }
      >
        <ThemeSection>
          <ItemPageSection/>
        </ThemeSection>
      </section>
    </>
  );
};

export default ItemPage;
