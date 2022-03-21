import React, { Component } from "react";
import CaseStudy from "../components/CaseStudy/CaseStudy";
import Footer from "../components/Footer/Footer";
import TopBanner from "../components/TopBanner/TopBanner";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Video from "../components/Video/Video";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {      
      data:[],      
    };
  }
  
  componentDidMount(){
    window.scrollTo({top:1})   
  }
  render() {
    return (
      <>      
         <TopNavigation title="Home"/>
          <TopBanner />
          <CaseStudy/>
          <Video />
          <Footer />
      </>
    );
  }
}
