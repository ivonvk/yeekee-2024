import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from '../Section/InnerSection.module.scss';
interface InnerSectionProps {
  className?:any
    children?:any
}
const InnerSection: React.FC<InnerSectionProps> = ({ className,children }) => {
  return (
    <div className={`${styles.margin} ${className}`}>

            {children}</div>
  );
};

export default InnerSection;
