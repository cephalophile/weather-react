import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ForecastDay (props){
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