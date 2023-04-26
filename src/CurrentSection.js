import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentTemp from "./CurrentTemp.js";



export default function CurrentSection(props) {
  if (props.weatherData.ready){
    return (
      <div className="CurrentSection">
        <div className="currentWeatherbox">
          <div className="currentWeatherInfo">
            <div id="current-weather-icon">
              <img
                id="icon-1"
                src={props.weatherData.iconUrl}
                alt={props.weatherData.description}
              />
            </div>
            <div id="current-weather">{props.weatherData.description}</div>
            <div id="current-temp" className="temperature">
              <CurrentTemp weatherData={props.weatherData} units={props.units}/>
            </div>
            <div id="current-humidity">Humidity: </div>
            <div id="current-humidity-value">{props.weatherData.humidity}%</div>
          </div>
        </div>
      </div>
    );
  } else {
   

    return "Loading..."; 
  }
}