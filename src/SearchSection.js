import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  React, {useState, useEffect} from "react";
import axios from "axios";
import CurrentInfoLine from "./CurrentInfoLine.js";
import ForecastSection from "./ForecastSection.js";

export default function SearchSection(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(null);
  let apiKey = "0f381e023853e05653c74e1a82013505";
  const [units, setUnits] = useState("metric");
  const [firstView, setFirstView] = useState(false);

  useEffect(() => {
    setFirstView(true);
    getFirstCurrentPosition();
  }, [firstView]);



  function handleResponse(response, units) {
    let iconUrl = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setWeatherData({
      ready: true,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      iconUrl: iconUrl,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      country: response.data.sys.country,
      feelslike: response.data.main.feels_like,
      unit: units,
    });
    props.setBackground(response.data.weather[0].icon);
  }

  function getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(response => handleResponse(response, units));
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
}

function getFirstCurrentPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(response => handleResponse(response, units));
    });
  } else {
    return (
      <div className="SearchSection">
        <form className="searchBox" id="new-location-form" onSubmit={handleSubmit}>
          <input type="text" id="city-submit" placeholder="search..." onChange={handleCityChange} />
          <input type="submit" id="search-city" value="Search"></input>
        </form>
        <button id="current-location-button" onClick={getCurrentPosition}>Current</button>
        <h3 className="tempOptions">
          <span id="celsius" onClick={showC}>℃</span>|<span id="fahrenheit" onClick={showF}>℉</span>
        </h3>
        <CurrentInfoLine weatherData={weatherData} units={units}/>
        <ForecastSection weatherData={weatherData} units={units}/>
      </div>
    );
  }
}
  
  function handleSubmit(event){
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(response => handleResponse(response, units));
    clearSearch();
  }


  function handleCityChange(event){
    setCity(event.target.value);
  }


  function clearSearch() {
    let formInput = document.getElementById(`city-submit`);
    formInput.value = ``;
  }

  function showC(event){
    event.preventDefault();
    setUnits("metric");
  }

  function showF(event){
    event.preventDefault();
    setUnits("imperial");
  }

  return (
    <div className="SearchSection">
      <form className="searchBox" id="new-location-form" onSubmit={handleSubmit}>
        <input type="text" id="city-submit" placeholder="search..." onChange={handleCityChange} />
        <input type="submit" id="search-city" value="Search"></input>
      </form>
      <button id="current-location-button" onClick={getCurrentPosition}>Current</button>
      <h3 className="tempOptions">
        <span id="celsius" onClick={showC}>℃</span>|<span id="fahrenheit" onClick={showF}>℉</span>
      </h3>
      <CurrentInfoLine weatherData={weatherData} units={units}/>
      <ForecastSection weatherData={weatherData} units={units}/>
    </div>
  );

}