import React, { Component } from "react";
import "react-caroussel/dist/index.css";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReviewCard from "./ReviewCard";
import reviewData from "./ReviewData";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

export default class Review extends Component {

  constructor(){
    super();
    this.state  ={
      reviewData:[]
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.TestimonialReviewData).then(result=>{
      this.setState({reviewData:result});
    })
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
    return (
      <>
        <div className="bg portfolio review">
          <div className="row text-center">
            <h2 className="h2 text-gray-800">Review Section</h2>
            <p className="p text-gray-800">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate expedita architecto rerum minus odio nulla non ea
              similique quae alias.
            </p>
            <div className="container mt-10 mx-auto pb-16 px-10 lg:px-0 rounded-md">
              <Slider {...settings}>
                {this.state.reviewData.map((item) => (
                  <div className="h-96 rounded-md">
                    <ReviewCard data={item} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </>
    );
  }
}
