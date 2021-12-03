import React from "react";

const Weather = () => {
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search"
            className="searchTerm"
            autoFocus
          />
          <button className="searchButton">Search</button>
        </div>
      </div>
      <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny "}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>25.5&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place">Hisar, India</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={" wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 PM <br /> sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={" wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                74 <br /> humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={" wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                1011MM<br /> 
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={" wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                2.24
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weather;
