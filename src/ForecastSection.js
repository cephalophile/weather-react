import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ForecastDay from "./ForecastDay.js";
import axios from "axios";
import React,  {useState, useEffect} from "react";


export default function ForecastSection(props) {

  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleResponse(response){
    setForecastData(response.data.daily);
    setLoaded(true);
}

useEffect(() => {
  let lat = props.weatherData.lat;
  let lon = props.weatherData.lon;
  let units=props.units;
  let apiKey = `b95f179627c8dd37f41e1be6e3250e19`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
}, [props.weatherData]);

useEffect(() => {
  let lat = props.weatherData.lat;
  let lon = props.weatherData.lon;
  let units=props.units;
  let apiKey = `b95f179627c8dd37f41e1be6e3250e19`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
}, [props.units]);

  if(loaded){
    return(
      <div className="ForecastSection">
        {forecastData.map(function(dailyForecast, index) {
          if (index < 5) {
          return( 
            <div key={index}>
          <ForecastDay data={dailyForecast} units={props.units}/>
          </div>
          );}
        })}
      </div>
    );  
    } else {
      let lat = props.weatherData.lat;
      let lon = props.weatherData.lon;
      let apiKey = `b95f179627c8dd37f41e1be6e3250e19`;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
      return null;
    }
}