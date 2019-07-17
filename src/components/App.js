import React, { Component } from "react";
import "../App.css";
import "../scss/header.scss";
import "../scss/main.scss";
import "../scss/titles.scss";
import "../scss/titles.scss";
import "../scss/features.scss";
import "../scss/taby.scss";
import "../scss/steps.scss";
import "../scss/textSeparator.scss";
import "../scss/grid.scss";
import Navigation from "./Navigation.js";
import Header from "./Header.js";
import Features from "./Features.js";
import Taby from "./Taby.js";
import Steps from "./Steps.js";
import TextSeparator from "./TextSeparator.js";
import Grid from "./Grid.js";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Header />
        <Features />
        <Taby />
        <Steps />
        <TextSeparator />
        <Grid />
      </>
    );
  }
}

export default App;
