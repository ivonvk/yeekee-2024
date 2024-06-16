import React, { useEffect, useState } from "react";

import styles from "../Modal/Modal.module.scss";

interface ModalProps {
    isOpen:boolean, onClose:Function, children? :any,
    className?:any
}

const Modal: React.FC<ModalProps> = ({isOpen,onClose,className, children }) => {



  return (
   <div className={isOpen?  styles.overlay:styles.nonDisplay}>
      <div className={`${styles.content} ${{className}}`} onClick={()=>{onClose()}}>
        {children}
  
      </div>
    </div>
  );
};

export default Modal;
