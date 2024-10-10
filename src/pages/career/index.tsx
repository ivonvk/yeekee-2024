import type { NextPage } from "next";

import { useEffect } from "react";
import Header from "../../components/Navbars/Header";
import { usePages } from "../../contexts/pages/use-pages";
import { PagesType } from "../../types/pages";
import ThemeSection from "../../components/Section/ThemeSection";
import { useTranslation } from "react-i18next";
import CareerTreeSection from "components/Section/Career/CareerPathSection";

interface HomeProps {}
const Career: NextPage<HomeProps> = ({}) => {
  const pagesContext = usePages();
  const { t } = useTranslation();

  useEffect(() => {
    pagesContext.setPages(PagesType.career);
  }, []);
  return (
    <>

      <Header scrollTransparent />

      <section
        id="home"
  
      >
        <ThemeSection>
  <CareerTreeSection/>
        </ThemeSection>
      </section>
    </>
  );
};

export default Career;
