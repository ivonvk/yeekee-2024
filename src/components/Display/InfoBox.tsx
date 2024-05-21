import React, { useEffect } from "react";
import styles from "../Display/DisplayCommon.module.scss";



interface InfoBoxProps {

title:string;
content:string;
className?:any

}

const InfoBox: React.FC<
  InfoBoxProps
> = ({  title,content,className}) => {

  return (
   <div className={`${styles.infoBox} ${className}`}>
    <div className={styles.title}>{title}</div>
    <div className={styles.bar}></div>
    <div className={styles.content}>{content}</div>
   </div>
  );
};

export default InfoBox;
