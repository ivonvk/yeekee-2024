import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import styles from "../Modal/Modal.module.scss";

interface ImageModalProps {
    isOpen:boolean, onClose:Function, image?:string
}

const ImageModal: React.FC<ImageModalProps> = ({isOpen,onClose,image }) => {



  return (
    <a onClick={()=>{onClose()}}>
   <div  className={isOpen?  styles.overlay:styles.nonDisplay}>
      <div className={styles.content}>
        <img src={image} className={styles.img}></img>
        {/* <button className={styles.close} onClick={()=>{onClose()}}>
          Close
        </button> */}
      </div>
    </div></a>
  );
};

export default ImageModal;
