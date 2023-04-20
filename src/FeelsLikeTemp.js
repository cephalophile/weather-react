import React from "react";

export default function FeelsLikeTemp(props){
    if (props.units === `metric`){
        return(
            <div>
                <li className="container feelsLike">
                Feels Like<span className="feelsLikeValue temperature">{Math.round(props.weatherData.feelslike)}℃</span>
                </li>
            </div>
        );
    } else {
        let fahrenheit = (Math.round((props.weatherData.feelslike)*(9/5)+32));
        return(
            <div>
                <li className="container feelsLike">
                    Feels Like<span className="feelsLikeValue temperature">{fahrenheit}℉</span>
                </li>
            </div>
        );
    }
}