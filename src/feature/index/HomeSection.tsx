import React, { useState } from "react";
import Image from "next/image";

import styles from "./HomeSection.module.scss";
import { Collapse, Container } from "react-bootstrap";
import { useIntl } from "react-intl";
import ThemeSection from "../../components/Section/ThemeSection";
import Footer from "../../components/Footers/Footer";
import { usePages } from "../../contexts/pages/use-pages";
import { PagesType } from "../../types/pages";
import IntroductionSection from "../../components/Section/Service/IntroductionSection";
import ItemListSection from "../../components/Section/Home/ItemListSection";


interface HomeSectionProps {
}


export const HomeSection: React.FC<HomeSectionProps> = ({  }) => {
  const pagesContext = usePages();
  return (
    <section id="home" className={pagesContext.pages===PagesType.homepage? styles.sectionHome:styles.nonDisplay}>
    <ThemeSection>
<ItemListSection/>
   <Footer/>

    </ThemeSection>
 
  </section>
  );
};
