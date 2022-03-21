import React, { Component } from "react";
import AppUrl from "../../RestAPI/AppUrl";
import RestClient from "../../RestAPI/RestClient";
import PortfolioCard from "./PortfolioCard";
import Data from "./PortfolioData";
import Loading from './../Loading/Loading';


export default class Portfolio extends Component {
  constructor(props) {
    super();
    this.state = {
      portfolioData: [],
      proData: [],
      loading: true
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.PortfolioData).then(result => {

      this.setState({ proData: result, portfolioData: result, loading: false })
    })
  }



  filterItem = (catItem) => {
    const updatedItems = this.state.portfolioData.filter((currentElement) => {
      return currentElement.categories === catItem;
    });

    this.setState({ proData: updatedItems });
  };



  render() {
    // const cata =[... new Set(this.state.proData.map((item) => item.category)),"all"];


    return (
      <>
        {
          this.state.loading ? <Loading /> :
            <div className="bg portfolio">
              <div className="row text-center">
                <h2 className="h2 text-gray-800">Our Portfolio</h2>
                <p className="p text-gray-800">Our work, Our Pride</p>
                <div className="container py-10 mx-auto">
                  <div className="port-menu my-10">
                    {/* <button
                  className="btn shadow-2xl font-normal focus:outline-white"
                  onClick={() => this.setState({ proData: Data })}
                >
                  All
                </button> */}
                    {/* {this.state.allCategory.map((element)=>{
                  
                  return (
                    
                  );
                })} */}

                    <button
                      className="btn shadow-2xl font-normal focus:outline-white"
                      onClick={() => this.setState({ proData: this.state.portfolioData })}
                    >
                      All
                    </button>

                    <button
                      className="btn shadow-2xl font-normal focus:outline-white"
                      onClick={() => this.filterItem("web")}
                    >
                      {" "}
                      Web
                    </button>
                    <button
                      className="btn shadow-2xl font-normal focus:outline-white"
                      onClick={() => this.filterItem("mobile")}
                    >
                      {" "}
                      Mobile
                    </button>
                    <button
                      className="btn shadow-2xl font-normal focus:outline-white"
                      onClick={() => this.filterItem("desktop")}
                    >
                      Desktop
                    </button>
                  </div>
                  <PortfolioCard rawData={this.state.proData} />
                </div>
              </div>
            </div>

        }

      </>
    );
  }
}
