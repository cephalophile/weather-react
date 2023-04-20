import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentTemp from "./CurrentTemp.js";



export default function CurrentSection(props) {
  if (props.weatherData.ready){
    return (
      <div className="CurrentSection">
        <div className="currentWeatherbox">
          <div className="currentWeatherInfo">
            <div id="current-weather-icon">
              <img
                id="icon-1"
                src={props.weatherData.iconUrl}
                alt={props.weatherData.description}
              />
            </div>
            <div id="current-weather">{props.weatherData.description}</div>
            <div id="current-temp" className="temperature">
              <CurrentTemp weatherData={props.weatherData} units={props.units}/>
            </div>
            <div id="current-humidity">Humidity: </div>
            <div id="current-humidity-value">{props.weatherData.humidity}%</div>
          </div>
        </div>
      </div>
    );
  } else {
   

    return "Loading..."; 
  }
}
 //let apiKey = "0f381e023853e05653c74e1a82013505";
    //let city = "Durham";
    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    //axios.get(apiUrl).then(handleResponse);

//function handleResponse(response){
    //console.log(response.data);
    //setWeatherData({
      //ready: true,
      //temperature: `${Math.round(response.data.main.temp)}`,
      //description: response.data.weather[0].main,
      //humidity: `${response.data.main.humidity}%`,
      //city: response.data.name,
      //iconUrl: "http://openweathermap.org/img/wn/10d@2x.png"
    //});
  //};