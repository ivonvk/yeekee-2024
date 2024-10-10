import React from "react";
import styles from "../SectionCommon.module.scss";
import sectionStyles from "../Career/CareerPathSection.module.scss";
import InnerSection from "../InnerSection";
import assets from "../../../assets/img/assets";
import { useTranslation } from "react-i18next";
import Career from "components/Display/CareerPath";
import { CareerNode } from "types/career";
import CareerPath from "components/Display/CareerPath";


interface ProductListSectionProps {}

const CareerSection: React.FC<ProductListSectionProps> = ({}) => {
  const { t } = useTranslation();
  const careerSteps = [
    {
      title: "Software Engineer",
      description: "Developed web applications using React and Node.js.",
      year: "2020 - Present"
    },
    {
      title: "Intern",
      description: "Assisted in front-end development and design.",
      year: "2019 - 2020"
    },
    {
      title: "Freelancer",
      description: "Worked on various projects for clients.",
      year: "2018 - 2019"
    },
    {
      title: "Freelancer",
      description: "Worked on various projects for clients.",
      year: "2018 - 2019"
    },
    {
      title: "Freelancer",
      description: "Worked on various projects for clients.",
      year: "2018 - 2019"
    },
    {
      title: "Freelancer",
      description: "Worked on various projects for clients.",
      year: "2018 - 2019"
    }
  ];
  return (
    <InnerSection
      className={`${styles.container} ${sectionStyles.margin} ${sectionStyles.container}`}
    >
      <div className={`${styles.section} ${sectionStyles.section}`}>
        <div className={styles.title}>{`起源與過去，現在`}</div>
        <div className={styles.shortDescription}>
          {`桶的起源創立了義記，義記的創立陪伴了社會的改變，義記直至今日依然屹立不倒，無休盡責地貢獻社會`}
        </div>
        <CareerPath steps={careerSteps} />

      </div>
    </InnerSection>
  );
};

export default CareerSection;
