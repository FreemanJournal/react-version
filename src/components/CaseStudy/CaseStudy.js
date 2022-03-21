import React, { Component } from 'react';
import {caseStudyData} from './CaseStudyData';
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { Link } from 'react-router-dom';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

export default class CaseStudy extends Component {
  constructor(){
    super();
    this.state={
      caseStudyData:[],
      loading:true,
      error:false
    }
  }
  componentDidMount(){
   window.scroll(0,0)
   RestClient.GetRequest(AppUrl.CaseStudyGetData).then(result=>{
    result?
    this.setState({caseStudyData:result,loading:false})
    :
    this.setState({error:true,loading:false})
  })
  .catch(e=>{
    console.log(e)
  })
  }
    render() {
        return (
          <>
          
            <div className="bg portfolio">
              <div className="row text-center">
                <h2 className="h2 text-gray-800">
                  Case Study around the world
                </h2>
                <p className="p text-gray-800">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate expedita architecto rerum minus odio nulla non ea
                  similique quae alias.
                </p>
           
                <div className="container caseStudy grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 grid  mt-10 mx-auto pb-16">
                  {this.state.caseStudyData.map((item) => {
                    const { id, image_links, titles, descriptions } = item;
                    return (
                      <div className="suspect bg-white w-auto m-3 sm:p-2 sm:h-auto rounded-2xl shadow-lg flex flex-col sm:flex-col select-none">
                        <div className="h-52 sm:h-full p-5 rounded-xl bg-gray-200 flex items-center justify-center">
                          <img
                            className="transform-gpu hover:scale-125 duration-300"
                            src={image_links}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col flex-auto gap-5 sm:p-2">
                          <div className="flex flex-auto flex-col gap-3 text-center">
                            <div className="h-14 rounded-2xl">
                              <h3 className="h3 text-gray-700 font-semibold">
                                {" "}
                                {titles}
                              </h3>
                            </div>
                            <div className="h-auto rounded-2xl p-4">
                              <p className="text-gray-800 font-medium text-xl line-clamp-3">
                                {" "}
                                {descriptions}
                              </p>
                            </div>
                          </div>
                          <div className="mt-auto flex gap-3 text-center uppercase justify-end">
                          <Link to={`/caseStudyDetails/${id}/${titles}`} className="">
                            <div className="border-none hover:outline-red hover:bg-red-100 duration-300  p-5 animate-bounceX  rounded-full ml-auto">
                              
                              <button className="flex gap-2 items-center justify-center text-red-600 focus:outline-none">
                                <span >Full Case Study</span>
                                <ArrowSmRightIcon className="h-5 w-5" />
                              </button>                              
                            </div>
                          </Link>
                          </div>
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

