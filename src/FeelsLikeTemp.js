import React from "react";

export default function FeelsLikeTemp(props){
    if (props.units === `metric`){
        return(
            <div>
                <li className="container feelsLike">
                Feels Like<span className="feelsLikeValue temperature">{props.weatherData.feelslike}℃</span>
                </li>
            </div>
        );
    } else {
        let fahrenheit = (Math.round((props.weatherData.temperature)*(9/5)+32));
        return(
            <div>
                <li className="container feelsLike">
                    Feels Like<span className="feelsLikeValue temperature">{fahrenheit}℉</span>
                </li>
            </div>
        );
    }
}