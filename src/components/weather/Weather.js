import React, { Component } from "react";
import { Consumer } from "../../context";
class Weather extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { today_weather, info } = value;
          if (today_weather[0]) {
            return (
              <div>
                <div className="extended_forecast_div">
                  <div className="extended_forecast_name">Pressure</div>
                  <div className="main_pressure box">
                    {" "}
                    <p> Atmospheric pressure on the ground level, hPa</p>
                    {/* on the sea level by default, hPa */}
                    <div className="main_pressure_value box_value">
                      <p>
                        {today_weather[0].main.grnd_level}
                        <span>hpa</span>
                      </p>
                    </div>
                  </div>
                  <div className="main_sea_level box">
                    Atmospheric pressure on the sea level, hPa
                    <div className="main_pressure_value box_value">
                      <p>
                        {today_weather[0].main.sea_level}
                        <span>hpa</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}
export default Weather;
