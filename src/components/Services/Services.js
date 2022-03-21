import React, { Component } from "react";
import AppUrl from "../../RestAPI/AppUrl";
import RestClient from "../../RestAPI/RestClient";
import data from "./ServiceData"
// import { IconName } from "react-icons/vsc";
import * as VscIcons from "react-icons/vsc";
import ReactHtmlParser from 'react-html-parser';

class Services extends Component {
  
  constructor(){
    super();
    this.state={
      serviceData:[]
    }
  }
  

  componentDidMount() {
    window.scrollTo({top:1})
    RestClient.GetRequest(AppUrl.ServiceData).then(result=>{
        this.setState({serviceData:result})
    })
  }
  



  render() {
    const inlineStyle = {
      transfornStyle: { transform: "translate(0px,0px)", opacity: 1 },
      zStyle: { zIndex: -1 },
    };
    const ic = 'VscIcons.VscAccount'
    return (
      <>
        <div className="bg service text-center">
          <div className="row">
            <h2 className="text-center text-4xl lg:text-5xl uppercase font-bold text-white pt-10 gradiant_color gradiant_text">
              Service We Provide
            </h2>
            <p className="text-white text-lg w-3/4 md:w-2/4 mx-auto gradiant_color gradiant_text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>

            <div className="service-box text-center py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-4 sm:grid-rows-2 lg:grid-rows-1 gap-10">
              {this.state.serviceData.map((item) => {
                const { id, icons, titles, subtitles, descriptions } = item;

                return (
                  <div
                    className="relative flex  flex-col items-center justify-around p-4 mx-auto w-80 h-auto rounded-2xl "
                    style={inlineStyle.transfornStyle}
                    key={id}
                  >
                    <div
                      className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-300 rounded-xl -rotate-2"
                      style={inlineStyle.zStyle}
                    ></div>
                    <div
                      className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-400 rounded-xl rotate-2 "
                      style={inlineStyle.zStyle}
                    ></div>
                    <div
                      className="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl "
                      style={inlineStyle.zStyle}
                    ></div>

                    <h3 className="z-10 p-2 text-2xl font-semibold text-purple-900">
                      {titles}
                    </h3>
                    <div className="z-10 p-2 text-purple-900 text-9xl">
                      {/* {ReactHtmlParser(icons)} */}
                      <VscIcons.VscAccount/>
                    </div>
                    <h4 className="z-10 p-2 text-xl font-normal text-purple-900">
                      {subtitles}
                    </h4>
                    <div className="z-10 p-2 text-sm text-center text-gray-500 ">
                      {descriptions}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
