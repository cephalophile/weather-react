import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React  from "react";


export default  function FormattedDate(props){
    let day = days[props.date.getDay()];
    let month = months[props.date.getMonth()];
    let date = props.date.getDate();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
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
    ]

    return `${day} ${month}, ${date}`;
}