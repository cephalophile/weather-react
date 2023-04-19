import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


export default function OtherInfoBox(props) {
  if (props.weatherData.ready){
    return (
      <div className="OtherInfoBox">
        <ul className="container otherInfo">
          <li className="container feelsLike">
            Feels Like<span className="feelsLikeValue temperature">{props.weatherData.feelslike}°</span>
          </li>
          <div className="uvIndex">
            <li className="container">
              UV Index<span className="uvIndexValue">7/10</span>
            </li>
          </div>
          <li className="container wind">
            Wind<span className="windValue">{props.weatherData.wind} mph</span>
          </li>
        </ul>
      </div>
    );

    
  } else {
   return "...";
  }
}
