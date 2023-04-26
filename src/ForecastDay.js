import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function ForecastDay (props){

    if(props.weatherData.ready){
        let lat = props.weatherData.lat;
        let lon = props.weatherData.lon;
        let apiKey = `b95f179627c8dd37f41e1be6e3250e19`;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then((response) => {showForecast(response); showForecast(); });
    
        function showForecast(response){
            return(
                <div className="forecastArea day1">
                <p className="weatherIcon" id="day1-icon">
                ☀
                </p>
                <p className="forecastDay" id="day1-day">
                Thu
                </p>
                <p className="forecastDate" id="day1-date">
                Aug 12
                </p>
                <p>
                <span className="forecastHigh temperature" id="day1-high">
                    82°
                </span>{" "}
                |{" "}
                <span className="forecastLow temperature" id="day1-low">
                    66°
                </span>
                </p>
            </div>
            );
        }
    }
}