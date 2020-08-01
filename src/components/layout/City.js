import React, { Component } from "react";
import { Consumer } from "../../context";
class City extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { city } = value;
          if (city) {
            return (
              <div className="header-2-content">
                <div className="city_name">
                  {city.name} | {city.country}
                </div>
                <div className="city_population">
                  population: {city.population}
                </div>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}
export default City;
