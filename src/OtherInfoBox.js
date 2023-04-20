import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FeelsLikeTemp from "./FeelsLikeTemp.js";
import CurrentWind from "./CurrentWind.js";

export default function OtherInfoBox(props) {
  if (props.weatherData.ready){
    return (
      <div className="OtherInfoBox">
        <ul className="container otherInfo">
          <FeelsLikeTemp weatherData={props.weatherData} units={props.units}/>
          <div className="uvIndex">
            <li className="container">
              UV Index<span className="uvIndexValue">7/10</span>
            </li>
          </div>
          <CurrentWind weatherData={props.weatherData} units={props.units}/>
        </ul>
      </div>
    );

    
  } else {
   return "...";
  }
}
