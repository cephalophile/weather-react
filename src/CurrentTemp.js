import React from "react";


export default function CurrentTemp(props){
    if (props.units === `metric`){
        return(
        <div id="current-temp" className="temperature">
              {Math.round(props.weatherData.temperature)}℃
            </div>
        );
    } else {
        let fahrenheit = (Math.round((props.weatherData.temperature)*(9/5)+32));
        return(
        <div id="current-temp" className="temperature">
         {fahrenheit}℉
        </div>
        );
    }
}