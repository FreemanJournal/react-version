import React, { Component } from "react";
import AppUrl from "../../RestAPI/AppUrl";
import RestClient from "../../RestAPI/RestClient";
import Loading from "../Loading/Loading";

import VideoCard from "./VideoCard";
import videoData from "./VideoData";

export default class Video extends Component {
  constructor() {
    super();
    this.state = {
      videoData: [],
      loading: true
    }
  }
  componentDidMount() {
    window.scroll(0, 0);
    RestClient.GetRequest(AppUrl.TestimonialVideoData).then(result => {
      this.setState({ videoData: result, loading: false })
    })
  }
  render() {
    return (
      <>
        {this.state.loading ? <Loading /> :
          <div className="bg portfolio">
            <div className="row text-center">
              <h2 className="h2 text-gray-800">People Who Knows us</h2>
              <p className="p text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate expedita architecto rerum minus odio nulla non ea
                similique quae alias.
              </p>
              <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mx-auto pb-16">
                {this.state.videoData?.map((item) => (
                  <VideoCard data={item} />
                ))}
              </div>
            </div>
          </div>

        }

      </>
    );
  }
}
