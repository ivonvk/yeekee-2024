import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface CommonLabelProps {
    text:string
}


const CommonLabel: React.FC<CommonLabelProps> = ({ text }) => {



  return (
    <div style={{color:'#252525',fontSize:32,letterSpacing:1,textAlign:'left',width:'100%'}}>{text??"-"}</div>
  );
};

export default CommonLabel;
