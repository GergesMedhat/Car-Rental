import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


const SingleCard = (props) => {
    const {title, icon,percent}= props.item;
    return(
        <div className="single__card">
        <div className="card__content">
            <h4>{title}</h4>
       
        </div >
        
         <span className="card__icon"><i class={icon}></i></span>
         <div style={{ width: 100, height: 100 }}>
        
         <span><CircularProgressbar  value={percent} text={`${percent}%`}
          styles={buildStyles({
            pathColor: '#01d293',
            textColor: '#fff',
            trailColor: '#0b0c28',
            textSize: "18px",
          })}
          />;
</span>
         </div>
        
    </div>
    )
}
export default SingleCard