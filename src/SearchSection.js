import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  React, {useState} from "react";

export default function SearchSection() {
  

  return (
    <div className="SearchSection">
      <form className="searchBox" id="new-location-form">
        <input type="text" id="city-submit" placeholder="search..."/>
        <input type="submit" id="search-city" value="Search"></input>
      </form>
      <button id="current-location-button">Current</button>
      <h3 className="tempOptions">
        <span id="celsius">℃</span>|<span id="fahrenheit">℉</span>
      </h3>
    </div>
  );
}