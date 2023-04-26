
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function ForecastDay (props){
    let iconUrl=`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`
    let iconDescription=`{data.weather[0].description}`;
    
    function showDay(){
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
        let date = new Date(props.data.dt*1000);
        let day =  date.getDay();
        return days[day];
    }

    function showDate(){
        let newDate = new Date(props.data.dt*1000);
        let date = newDate.getDate();
        return date;
    }

    function showMonth(){
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December/",
          ];
        let date = new Date(props.data.dt*1000);
        let month = date.getMonth();
        return months[month];
    }
    return( 
        <div className="ForecastDay">    
           <div className="forecastArea day1">
                <p className="weatherIcon" id="day1-icon">
                <img id="icon-1" src={iconUrl} alt={iconDescription} />
                </p>
                <p className="forecastDay" id="day1-day">{showDay()}</p>
                <p className="forecastDate" id="day1-date">{showMonth()} {showDate()}</p>
                <p>
                    <span className="forecastHigh temperature" id="day1-high">
                        {Math.round(props.data.temp.max)}°
                    </span>{" "}
                    |{" "}
                    <span className="forecastLow temperature" id="day1-low">
                        {Math.round(props.data.temp.min)}°
                    </span>
                </p>
            </div>
        </div>
        );
}