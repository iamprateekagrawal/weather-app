import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");
  const [city, setCity] = useState(null);
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6719d32b652fe28155d01d21980d3432`;

  useEffect(() => {
    const fetchData = async () => {
      setCity(city);
      const response = await axios.get(apiURL);
      setData(response.data);
    };
    fetchData();
  }, [city]);

  const formatTemp = (temp) => {
    return (temp - 273.15).toFixed(2);
  };

  return (
    <>
      <div id="full-box">
        <h1 id="heading">Weather Site</h1>
        <div className="set">
          <input
            placeholder="Search for any City"
            className="search-field"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        {data.weather ? (
          <div className="data">
            <ul>
              <li>
                <span>Name: </span>
                {data.name} [{data.sys.country}]
              </li>
              <li>
                <span> Weather: </span>
                {data.weather[0].main} - {data.weather[0].description}
              </li>
              <li>
                <span>Temperature: </span>
                {formatTemp(data.main.temp)}&#176;C &nbsp; [<span>Min: </span>
                {formatTemp(data.main.temp_min)}&#176;C -<span> Max: </span>
                {formatTemp(data.main.temp_max)}&#176;C]
              </li>
              <li>
                <span>Pressure: </span>
                {data.main.pressure} mbar &nbsp; &nbsp; <span> Humidity: </span>
                {data.main.humidity} %
              </li>
            </ul>
          </div>
        ) : (
          <p id="no-data">Data Not Available</p>
        )}
      </div>
      <footer>
        All data are based on{" "}
        <a target="_blank" href="https://openweathermap.org/">
          {" "}
          OpenWeather
        </a>
      </footer>
    </>
  );
}

export default App;
