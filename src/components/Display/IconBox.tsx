import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "../Display/DisplayCommon.module.scss";



interface IconBoxProps {

title:string;
img:any;
content?:string;

className?:any

}

const IconBox: React.FC<
  IconBoxProps
> = ({  title,img,className,content}) => {

  return (
   <div className={`${styles.iconBox} ${className}`}>
    <img src={img} className={`${styles.img}`}></img>
    <div className={styles.title}>{title}</div>
    <div className={styles.imgBar}></div>
    <div className={styles.content}>{content}</div>

   </div>
  );
};

export default IconBox;
