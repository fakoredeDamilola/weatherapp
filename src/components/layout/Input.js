import React, { Component } from "react";
import { Consumer } from "../../context";
class Input extends Component {
  state = {
    input: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitWeather = async (dispatch) => {
    let data;
    await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${this.state.input}&appid=5325b6c2788ed813eaf37fdcce42d21e`
    )
      .then((data) => data.json())
      .then((body) => {
        data = body;
      });
    if (data.cod == "404") {
      dispatch({ type: "ERROR", payload: true });
    } else {
      dispatch({ type: "ERROR", payload: false });
      dispatch({ type: "INSERT_INFO", payload: data });
      dispatch({ type: "INSERT_CITY", payload: data.city });
    }
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { input, dispatch } = value;
          return (
            <div className="buttonwrapper">
              <input
                type="text"
                onChange={this.onChange}
                name="input"
                value={this.state.input}
              />

              <button onClick={this.submitWeather.bind(this, dispatch)}>
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Input;
