import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./Label.module.scss"
interface SectionLabelLineProps {
    text:string,
    className?:any
}


const SectionLabelLine: React.FC<SectionLabelLineProps> = ({ text,className }) => {



  return (
     <div className={styles.titleBox}>
            <div className={styles.title}>{text}</div>
            <div className={styles.greenBox}>
              <div className={styles.greenLine} />
              <div className={styles.greenCircle} />
            </div>
          </div>
  );
};

export default SectionLabelLine;
