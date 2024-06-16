import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./Label.module.scss"
interface CommonLabelProps {
    text:string,
    className?:any
}


const SectionLabel: React.FC<CommonLabelProps> = ({ text,className }) => {



  return (
    <div className={`${styles.sectionLabel} ${className}`}>{text}</div>
  );
};

export default SectionLabel;
