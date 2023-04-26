import React,  {useState} from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function ForecastDay (props){
    const [loaded, setLoaded] = useState(false);
    const [forecastData, setForecastData] = useState(null);

    function handleResponse(response){
        console.log(response);
        setForecastData(response.data);
        setLoaded(true);
    }

    if(loaded){
        console.log(forecastData);
        return(
            <div className="forecastArea day1">
            <p className="weatherIcon" id="day1-icon">
            {forecastData.daily[0].weather[0].icon}
            </p>
            <p className="forecastDay" id="day1-day">
            {forecastData.daily[0].dt}
            </p>
            <p className="forecastDate" id="day1-date">
            {forecastData.daily[0].dt}
            </p>
            <p>
            <span className="forecastHigh temperature" id="day1-high">
                {Math.round(forecastData.daily[0].temp.max)}°
            </span>{" "}
            |{" "}
            <span className="forecastLow temperature" id="day1-low">
                {Math.round(forecastData.daily[0].temp.min)}°
            </span>
            </p>
        </div>
        );
    } else {
        console.log(props.weatherData);
        let lat = props.weatherData.lat;
        let lon = props.weatherData.lon;
        let apiKey = `b95f179627c8dd37f41e1be6e3250e19`;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}&units=metric`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
        return null;
    }
}