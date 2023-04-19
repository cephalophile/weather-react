import React, {useState} from "react";

export default function UnitTemps(props){
    if (props.weatherData.unit === `metric`){
        return(
        <div id="current-temp" className="temperature">
              {props.weatherData.temperature}℃
            </div>
        );
    } else {
        <div id="current-temp" className="temperature">
         {(props.weatherData.temperature)*(9/5)+32}℉
        </div>
        return "F";
    }
}