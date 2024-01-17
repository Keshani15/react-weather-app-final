import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="forecast-temperature">
            <span className="forecast-temp-max">19°</span>
            <span className="forecast-temp-min">11°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
