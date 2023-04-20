import React from "react";

export default function CurrentWind(props){  
    if (props.units === `metric`){
        let metricWind = (Math.round((props.weatherData.wind)*1.609));
        return(
            <li className="container Wind">
                Wind<span className="windValue">{metricWind} kph</span>
            </li>
        );
    } else {
        return(
            <li className="container Wind">
            Wind<span className="windValue">{props.weatherData.wind} mph</span>
        </li>
        );
    }
}
