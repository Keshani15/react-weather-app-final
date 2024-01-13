import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFah}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahTemp = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahTemp)}</span>
        <span className="unit">
          <a href="/" onClick={showCel}>
            °C
          </a>{" "}
          | °F{" "}
        </span>
      </div>
    );
  }
}
