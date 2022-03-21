import React, { Component } from "react";
import AppUrl from "../../RestAPI/AppUrl";
import RestClient from "../../RestAPI/RestClient";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

export default class CaseStudyDetails extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount() {   
    RestClient.GetRequest(AppUrl.CaseStudyDetailsData + this.props.id)
      .then((result) => {
        result ? this.setState({ data: result[0], loading: false })
          : this.setState({ error: true, loading: false })
      })
      .catch((e) => {
        this.setState({ error: true, loading: false });
      });
  }

  render() {
    const { image_links, titles, descriptions } = this.state.data;

    return (
      <>
        {this.state.error ? (
          <Error />
        ) : this.state.loading ? (
          <Loading />
        ) : (
          <div className="bg portfolio review pb-10">
            <div className="row text-center">
              <h2 className="h2 text-gray-800">{this.props.title}</h2>

              <div className="container mt-10 mx-auto pb-16">
                <div className="bg-white w-auto m-3 sm:p-2 sm:h-auto rounded-2xl shadow-lg flex flex-col sm:flex-col select-none">
                  <div className="h-1/2 rounded-xl bg-gray-200 flex items-center justify-center">
                    <img className="w-screen" src={image_links} alt="" />
                  </div>
                  <div className="flex flex-col flex-auto gap-5 sm:p-2">
                    <div className="flex flex-auto flex-col gap-3 text-center">
                      {/* <div className=" h-14 rounded-2xl mt-8 mb-10">
                        <h3 className="h3 text-gray-700 font-semibold">                        
                         {this.props.title}
                        </h3>
                      </div> */}
                      <div className="h-auto rounded-2xl p-4">
                        <p className="text-gray-800 font-medium text-xl">
                          {descriptions}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
