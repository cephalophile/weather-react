import React, {useState} from "react";
import axios from "axios";

export default function UVIinfo(props){
    const [uvIndex, setUVIndex] = useState(null);

    function showUVindex(response) {
        let currentUVI = document.querySelector(".uvIndex");
        let UVIvalue = `${uvIndex}`;
        if (UVIvalue >= 11) {
          currentUVI.innerHTML = `<li class="container uvIndex UVIextreme">
                    UV Index<span class="uvIndexValue">${Math.round(UVIvalue)}</span>
                  </li>`;
        } else if (UVIvalue >= 8 && UVIvalue < 11) {
          currentUVI.innerHTML = `<li class="container uvIndex UVIveryHigh">
                    UV Index<span class="uvIndexValue">${Math.round(UVIvalue)}</span>
                  </li>`;
        } else if (UVIvalue >= 6 && UVIvalue < 8) {
          currentUVI.innerHTML = `<li class="container uvIndex UVIhigh">
                    UV Index<span class="uvIndexValue">${Math.round(UVIvalue)}</span>
                  </li>`;
        } else if (UVIvalue >= 3 && UVIvalue < 6) {
          currentUVI.innerHTML = `<li class="container uvIndex UVImoderate">
                    UV Index<span class="uvIndexValue">${Math.round(UVIvalue)}</span>
                  </li>`;
        } else {
          currentUVI.innerHTML = `<li class="container uvIndex UVIlow">
                    UV Index<span class="uvIndexValue">${Math.round(UVIvalue)}</span>
                  </li>`;
        }
      }

    if(props.weatherData.ready){
        let lat = props.weatherData.lat;
        let lon = props.weatherData.lon;
        let apiKey = `b95f179627c8dd37f41e1be6e3250e19`;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then((response) => {setUVIndex(Math.round(response.data.current.uvi));
        showUVindex();
    });
        return(
                    <div>
                        <li className="container">
                            UV Index<span className="uvIndexValue">{uvIndex}</span>
                        </li>
                    </div>
                );
            }
}