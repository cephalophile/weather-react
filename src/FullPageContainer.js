import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import clearSky from "./images/clearsky.jpg";
import brokenClouds from "./images/brokenclouds.jpg";
import fewClouds from "./images/fewclouds.jpg";
import mist from "./images/mist.jpg";
import rain from "./images/rain.jpg";
import scatteredClouds from "./images/scatteredclouds.jpg";
import showerRain from "./images/showerrain.jpg";
import snow from "./images/snow.jpg";
import thunderstorm from "./images/thunderstorm.jpg";
import SearchSection from "./SearchSection.js";
import Footer from "./Footer";
import React, {useState} from "react";


//<header className="App-header"  style ={{ backgroundImage: "url(/${image2})"}}></header>

export default function FullPageContainer() {
  const [backgroundImage, setBackgroundImage] = useState(clearSky);

  function setBackground(icon) {
    if (icon === "01d" || icon === "01n") {
      setBackgroundImage(clearSky);
    } else if (icon === "02d" || icon === "02n") {
      setBackgroundImage(fewClouds);
    } else if (icon === "03d" || icon === "03n") {
      setBackgroundImage(scatteredClouds);
    } else if (icon === "04d" || icon === "04n") {
      setBackgroundImage(brokenClouds);
    } else if (icon === "09d" || icon === "09n") {
      setBackgroundImage(showerRain);
    } else if (icon === "10d" || icon === "10n") {
      setBackgroundImage(rain);
    } else if (icon === "11d" || icon === "11n") {
      setBackgroundImage(thunderstorm);
    } else if (icon === "13d" || icon === "13n") {
      setBackgroundImage(snow);
    } else if (icon === "50d" || icon === "50n") {
      setBackgroundImage(mist);
    } else {
      setBackgroundImage(clearSky);
    }
  }

  return (
    <div
      className="FullPageContainer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SearchSection setBackground={setBackground} />
      <Footer />
    </div>
  );
  }