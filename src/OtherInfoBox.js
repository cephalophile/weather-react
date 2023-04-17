import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import axios from "axios";

export default function OtherInfoBox() {
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      feelslike: `${Math.round(response.data.main.feels_like)}°`,
      wind: `${Math.round(response.data.wind.speed)}`,
    });
    };

    

  if (weatherData.ready){
    return (
      <div className="OtherInfoBox">
        <ul className="container otherInfo">
          <li className="container feelsLike">
            Feels Like<span className="feelsLikeValue temperature">{weatherData.feelslike}</span>
          </li>
          <div className="uvIndex">
            <li className="container">
              UV Index<span className="uvIndexValue">7/10</span>
            </li>
          </div>
          <li className="container wind">
            Wind<span className="windValue">{weatherData.wind} mph</span>
          </li>
        </ul>
      </div>
    );

    
  } else {
    let apiKey = "0f381e023853e05653c74e1a82013505";
    let city = "Durham";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
