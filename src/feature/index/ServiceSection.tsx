import React, { useState } from "react";
import Image from "next/image";

import styles from "./ServiceSection.module.scss";
import { Collapse, Container } from "react-bootstrap";
import { useIntl } from "react-intl";
import ThemeSection from "../../components/Section/ThemeSection";
import Footer from "../../components/Footers/Footer";
import { usePages } from "../../contexts/pages/use-pages";
import { PagesType } from "../../types/pages";
import IntroductionSection from "../../components/Section/Service/IntroductionSection";


interface ServiceSectionProps {
}


export const ServiceSection: React.FC<ServiceSectionProps> = ({  }) => {
  const pagesContext = usePages();
  return (
    <section id="home" className={pagesContext.pages===PagesType.service? styles.sectionHome:styles.nonDisplay}>
    <ThemeSection>

   <Footer/>

    </ThemeSection>
 
  </section>
  );
};
