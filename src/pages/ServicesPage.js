import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Services from "../components/Services/Services";

export default class ServicesPage extends Component {
  componentDidMount() {
    window.scrollTo({top:1})

  }
  render() {
    return (
      <>
        <TopNavigation title="Service" />
        <Services />
        <Footer />
      </>
    );
  }
}
