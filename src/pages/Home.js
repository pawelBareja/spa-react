import React, { Component } from "react";
import Header from "../components/Header.js";
import Features from "../components/Features";
import Taby from "../components/Taby";
import Steps from "../components/Steps";
import TextSeparator from "../components/TextSeparator";
import Grid from "../components/Grid";
import Slider from "../components/Slider";
import Subscription from "../components/Subscription";
import Posts from "../components/Posts";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Features />
        <Taby />
        <Steps />
        <TextSeparator />
        <Grid />
        <Slider />
        <Subscription />
        <Posts />
        <ContactForm />
        <Footer />
      </>
    );
  }
}

export default Home;
