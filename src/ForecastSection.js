import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ForecastDay from "./ForecastDay.js";
import axios from "axios";
import React,  {useState} from "react";


export default function ForecastSection(props) {

  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleResponse(response){
    console.log(response);
    setForecastData(response.data.daily[0]);
    setLoaded(true);
}

  if(loaded){
    return(
      <div className="ForecastSection">
        {forecastData.map(function(dailyForecast, index) {
          return( 
            <div key={index}>
          <ForecastDay forecastData={dailyForecast} units={props.units}/>
          </div>
          );
        })}
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