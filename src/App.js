import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Body from "./components/weather/Body";
import { Provider } from "./context";
import "./App.css";
function App() {
  return (
    <Provider>
      <div>
        <Header brand="weatherJS" />
        <div className="wrapper">
          <Body />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
