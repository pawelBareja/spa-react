import React, { Component } from "react";
// import "../App.css";
// import "../scss/header.scss";
// import "../scss/main.scss";
// import "../scss/titles.scss";
// import "../scss/titles.scss";
// import "../scss/features.scss";
// import "../scss/taby.scss";
// import "../scss/steps.scss";
// import "../scss/textSeparator.scss";
// import "../scss/grid.scss";
// import "../scss/slider.scss";
// import "../scss/posts.scss";
// import "../scss/form.scss";
// import "../scss/footer.scss";
import Navigation from "./Navigation.js";
import Home from "../pages/Home.js";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Home />
      </>
    );
  }
}

export default App;
