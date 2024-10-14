import React, { useEffect } from "react";
import styles from "../Display/DisplayCommon.module.scss";



interface InfoBoxProps {

title:string;
content:string;
className?:any
containerStyles?:React.CSSProperties

}

const InfoBox: React.FC<
  InfoBoxProps
> = ({  title,content,className,containerStyles}) => {

  return (
   <div className={`${styles.infoBox} ${className}`} style={{...containerStyles}}>
    <div className={styles.title}>{title}</div>
    <div className={styles.bar}></div>
    <div className={styles.content}>{content}</div>
   </div>
  );
};

export default InfoBox;
