import React, { Component } from "react";
const Context = React.createContext();
const getData = (data) => {
  if (data.list) {
    let d = new Date();
    let current_day = d.getDate() < 9 ? `0${d.getDate()}` : d.getDate();
    let current_date = `${d.getFullYear()}-0${d.getMonth() + 1}-${current_day}`;

    // Wed Feb 29 2012 11:00:00 GMT+1100 (EST)

    d.setDate(d.getDate() + 1);
    let day = d.getDate() < 9 ? `0${d.getDate()}` : d.getDate();
    let next_date = `${d.getFullYear()}-0${d.getMonth() + 1}-${day}`;
    let list = [...data.list];
    let date_value,
      arr_date,
      ini_value = list[0].dt_txt.split(" ")[0],
      today_arr = [];
    for (let i = 0; i < list.length - 1; i++) {
      date_value = list[i].dt_txt;
      arr_date = date_value.split(" ")[0];
      if (ini_value === current_date) {
        if (current_date == arr_date) {
          today_arr.push(list[i]);
        }
      } else if (ini_value === next_date) {
        if (next_date == arr_date) {
          today_arr.push(list[i]);
        }
      }
    }

    return today_arr;
  }
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INSERT_DATA":
      return {
        ...state,
        today_weather: action.payload,
      };
    case "INSERT_INFO":
      let data = getData(action.payload);
      return {
        ...state,
        today_weather: getData(action.payload),
      };
    case "INSERT_CITY":
      return {
        ...state,
        city: action.payload,
      };
      break;
    case "INPUT":
      return {
        ...state,
        input: action.payload,
      };
      break;
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
      break;
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    weather: [],
    city: {},
    day: "",
    input: "",
    error: false,
    today_weather: [],
    info: {},
    presentDate: new Date(),
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  componentDidMount() {
    if (navigator.geolocation) {
      let data = navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      this.setState({
        info:
          "Geolocation is not allowed in this browser, we will give you the weather forecast of USA",
      });
    }

    function showPosition(position) {
      return position.coords;
    }
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=Nigeria&appid=5325b6c2788ed813eaf37fdcce42d21e`
    )
      .then((data) => data.json())
      .then((body) => {
        if (body) {
          this.setState({ city: body.city });
          let data = getData(body);
          this.setState({ today_weather: data });
        }
      });
  }

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}
export const Consumer = Context.Consumer;
