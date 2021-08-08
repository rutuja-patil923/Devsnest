import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState(null);
  const [query, setQuery] = useState("Jabalpur");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=50de925b3daa9f647dbad7228c7264e0`;
        const response = await fetch(url);
        const resJson = await response.json();
        console.log(resJson);
        setCity(resJson?.list[0]);
      } catch (e) {
        console.log(e);
        e;
      }
    };
    fetchApi();
  }, [query]);
  return (
    <div className="app">
      <div className="container">
        {city && (
          <img
            className="desc"
            src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
            alt="imgicon"
          />
        )}
        <div className="container1">
          <input
            type="search"
            placeholder="Enter City..."
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </div>
      </div>
      {!city ? (
        <p>Not Found</p>
      ) : (
        <div className="container2">
          <h1>{query}</h1>
          <h1 className="temp">{city.main.temp}°Cel</h1>
          <h1 className="temp_max">
            Min : {city.main.temp_min}
            °Cel | Max : {city.main.temp_max}
            °Cel
          </h1>
        </div>
      )}
    </div>
  );
}

export default App;
