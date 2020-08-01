import React, { Component } from "react";
import { Consumer } from "../../context";
import Weather from "./Weather";
import Cloud from "./Cloud";
import Weekly from "./Weekly";
class Body extends Component {
  state = {
    main: {},
    weather: [],
    wind: {},
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { today_weather, info, city, error } = value;
          if (!error) {
            if (today_weather.length > 0) {
              return (
                <div className="wrapper">
                  <div className="main">
                    <div>
                      <div className="main_temp">
                        <div className="main_sub_temp">
                          <div className="main_temp_value">
                            <div className="main_temp_value_heading">
                              <h1>
                                {(today_weather[0].main.temp - 273).toFixed(2)}{" "}
                                ℃
                              </h1>
                              <p>
                                <span>Humidity:</span>{" "}
                                {today_weather[0].main.humidity}%
                              </p>
                              <p>
                                <span>wind speed:</span>{" "}
                                {today_weather[0].wind.speed}meter/sec
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="weekly_weather_forecast">
                        <ul>
                          {today_weather.map((weather, index) => {
                            return <Weekly key={index} value={weather} />;
                          })}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="extended_forecast">
                        <div className="extended_forecast_heading">
                          EXTENDED FORECAST
                        </div>
                        <div className="extended_forecast_grid">
                          <Weather />
                          <Cloud />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          } else {
            alert("No data available for this country");
          }
        }}
      </Consumer>
    );
  }
}

export default Body;
