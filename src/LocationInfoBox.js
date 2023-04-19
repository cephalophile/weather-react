import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function LocationInfoBox(props) {
//const [weatherData, setWeatherData] = useState({});

  if(props.weatherData.ready){
    return (
      <div className="LocationInfoBox">
        <h1>
          <span id="current-city">{props.weatherData.city}, </span>
          <span id="current-state">{props.weatherData.country}</span>
        </h1>
        <h2 id="current-date"><FormattedDate date={props.weatherData.date} /></h2>
      </div>
    );
  } else {
  return "...";
  }
}
