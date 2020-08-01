import React, { Component } from "react";

class Weekly extends Component {
  render() {
    let { value } = this.props;

    return (
      <li>
        {value.dt_txt.split(" ")[1]}
        {/* <div>The girl</div> */}
        <div>{(value.main.temp - 273).toFixed(2)} ℃</div>
      </li>
    );
  }
}
export default Weekly;
