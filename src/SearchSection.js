import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  React, {useState} from "react";
import axios from "axios";

export default function SearchSection() {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(null);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      lat: response.data.coord.lat,
      long: response.data.coord.long,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    console.log(weatherData.city);
  }


  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "0f381e023853e05653c74e1a82013505";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }


  return (
    <div className="SearchSection">
      <form className="searchBox" id="new-location-form" onSubmit={handleSubmit}>
        <input type="text" id="city-submit" placeholder="search..." />
        <input type="submit" id="search-city" value="Search"onChange={handleCityChange}></input>
      </form>
      <button id="current-location-button">Current</button>
      <h3 className="tempOptions">
        <span id="celsius">℃</span>|<span id="fahrenheit">℉</span>
      </h3>
    </div>
  );
}