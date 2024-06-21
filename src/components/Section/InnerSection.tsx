import React from "react";
import styles from '../Section/InnerSection.module.scss';
import ScrollToTopBtn from "../Button/ScrollToTopBtn";
interface InnerSectionProps {
  className?:any
    children?:any
}
const InnerSection: React.FC<InnerSectionProps> = ({ className,children }) => {
  return (
    <div className={`${styles.margin} ${className}`}>

            {children}
            
            </div>
  );
};

export default InnerSection;
