import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
    });
  }

  function search() {
    const apiKey = "a6bb6oe20805b9ecd0dta4d24747d30f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    const currentTime = new Date().getHours();
    let timeOfDay;

    if (currentTime >= 6 && currentTime < 12) {
      timeOfDay = "morning";
    } else if (currentTime >= 12 && currentTime < 18) {
      timeOfDay = "afternoon";
    } else if (currentTime >= 18 && currentTime < 21) {
      timeOfDay = "evening";
    } else {
      timeOfDay = "night";
    }

    return (
      <div className={`Weather ${timeOfDay} ${weatherData.icon}`}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
