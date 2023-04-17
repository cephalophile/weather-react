import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";

export default function LocationInfoBox() {
const [weatherData, setWeatherData] = useState({});




function handleResponse(response){
  console.log(response.data);
  setWeatherData({
    ready: true,
    city: response.data.name,
    country: response.data.sys.country,
    date: new Date(response.data.dt * 1000),
  });
  };

  if(weatherData.ready){
    return (
      <div className="LocationInfoBox">
        <h1>
          <span id="current-city">{weatherData.city}, </span>
          <span id="current-state">{weatherData.country}</span>
        </h1>
        <h2 id="current-date"><FormattedDate date={weatherData.date} /></h2>
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
