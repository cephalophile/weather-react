import React from "react";


export default function UnitTemps(props){
    console.log(props.weatherData);
    if (props.units === `metric`){
        return(
        <div id="current-temp" className="temperature">
              {props.weatherData.temperature}℃
            </div>
        );
    } else {
        let fahrenheit = (Math.round(props.weatherData.temperature)*(9/5)+32);
        return(
        <div id="current-temp" className="temperature">
         {fahrenheit}℉
        </div>
        );
    }
}