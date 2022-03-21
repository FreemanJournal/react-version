import React, { Component } from "react";
import ReactPlayer from "react-player";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as VscIcons from "react-icons/vsc"
import { Link } from "react-router-dom";
import BootAccordion from "./FAQAccordion/Accordion"
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from './../Loading/Loading';



export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      toggleAccordion: false,
      productDetails: [],
      loading:true
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.ProductSinglePageData + this.props.productId).then(result => {
      this.setState({ productDetails: result[0],loading:false})
    }).catch(error => {
      alert("Server is down")
    })

  }

  onToggle = () => {
    this.setState({ toggleAccordion: !this.state.toggleAccordion });
  };
  render() {

    const { video_links, titles, subtitles, creators, updated_ons, languages, current_prices } = this.state.productDetails;
    // console.log('this is something ' + this.state.productDetails);


    const learning_objectives = ["Developed any site from scratch", 'Management', 'Good income', 'lorem bla bla'];
    return (
      <>
      {
        this.state.loading?<Loading/>:
        <div className="bg portfolio product bg-gray-700 productDetails">
        <div className="bg-gray-700">
          <h2 className="h2">Product Details</h2>
        </div>
        <div>
          <div className="headerPart bg-gray-700 pb-20">
            <div className="row">
              <div className="flex flex-col gap-5 bg-white w-11/12 mx-auto shadow-2xl p-5 rounded lg:hidden">
                <div className="mx-auto w-full">
                  <ReactPlayer
                    url={video_links}
                    fallback="Ok"
                    className="w-full"
                    controls
                  />
                </div>
                <div className="flex flex-col gap-5 text-left text-gray-900">
                  <h3 className="text-4xl">
                    {titles}
                  </h3>
                  <h4 className="text-2xl">
                    {subtitles}
                  </h4>
                  <p className="text-xl">
                    Created by{" "}
                    <Link className="underline text-red-400">
                      {creators}
                    </Link>{" "}
                  </p>
                  <p className="flex text-xl gap-1">
                    <FaIcons.FaExclamationCircle className="mt-1" />{" "}
                    <span className="">Last updated {updated_ons}</span>{" "}
                  </p>
                  <p className="flex text-xl gap-1">
                    <BiIcons.BiWorld className="mt-1" /> <span>{languages}</span>{" "}
                  </p>
                  <p className="flex text-5xl gap-1 text-red-400">
                    <span>${current_prices}</span>{" "}

                  </p>

                  <button className="btn h-20 normal-case w-full">
                    Add to cart
                  </button>
                  <p className="text-center text-gray-900">
                    *30-Day Money-Back Guarantee
                  </p>
                </div>
              </div>
              <div className="bg-white p-10 rounded-tl-3xl rounded-br-3xl shadow-2xl hidden lg:flex">
                <div className="flex flex-col gap-5 text-left text-gray-900 w-3/5">
                  <h3 className="text-4xl text-gray-600">
                    {titles}
                  </h3>
                  <h4 className="text-2xl">
                    {subtitles}
                  </h4>
                  <p className="text-xl">
                    Created by{" "}
                    <Link className="underline text-red-400">
                      {creators}
                    </Link>{" "}
                  </p>
                  <p className="flex text-xl gap-1">
                    <FaIcons.FaExclamationCircle className="mt-1" />{" "}
                    <span>Last updated {updated_ons}</span>{" "}
                  </p>
                  <p className="flex text-xl gap-1">
                    <BiIcons.BiWorld className="mt-1" /> <span>{languages}</span>{" "}
                  </p>
                  <p className="flex text-5xl gap-1 text-red-400">
                    <span>${current_prices}</span>{" "}
                  </p>
                  <button className="btn hover:bg-green-600 hover:text-white mx-0 my-1 py-2 h-14 normal-case w-6/12">
                    Add to cart
                  </button>

                </div>
                <div className="mx-auto w-2/5 flex flex-col justify-between">
                  <ReactPlayer
                    url={video_links}
                    className="w-full rounded-xl"
                    controls
                  />
                  <p className="text-gray-900 text-right h-auto">
                    *30-Day Money-Back Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bodyPart bg-white py-16">
            <div className="row">
              <div className="px-5 lg:px-0">
                <div className="border border-gray-300 shadow-sm p-5 text-left mx-auto">
                  <h3 className="text-3xl text-gray-900">What you'll learn</h3>
                  <div className="pt-5 flex flex-wrap">
                    {learning_objectives.map((item) => (
                      <p className="flex text-xl w-1/2 px-1 py-4">
                        <VscIcons.VscChevronRight className="mr-1 text-3xl text-blue-500 pb-1" />
                        <span className="text-gray-900">
                          {item}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {/* FAQ Section */}
              <div className="FQSection ">
                <h3 className="text-3xl text-gray-900 mt-20 py-10">Frequently Asked Questions</h3>
                <BootAccordion />
              </div>
            </div>
          </div>
        </div>
      </div>
      }
       
      </>
    );
  }
}
