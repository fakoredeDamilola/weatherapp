import React, { Component } from "react";
import { Consumer } from "../../context";
class Cloud extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { today_weather, info } = value;
          if (today_weather[0]) {
            return (
              <div>
                <div className="extended_forecast_div">
                  <div className="extended_forecast_name">cloud</div>
                  <div className="main_ground_level box">
                    Cloudiness
                    <div className="main_pressure_value box_value">
                      <p>
                        {today_weather[0].clouds.all}
                        <span>%</span>
                      </p>
                    </div>
                  </div>
                  <div className="extended_forecast_name">Weather</div>
                  <div className="weather_cover">
                    <div className="main_pressure box">
                      Main
                      <div className="main_pressure_value box_value">
                        <p> {today_weather[0].weather[0].main}</p>
                      </div>
                    </div>
                    <div className="main_pressure box">
                      Description
                      <div className="main_pressure_value box_value">
                        {" "}
                        <p> {today_weather[0].weather[0].description}</p>
                      </div>
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
export default Cloud;
