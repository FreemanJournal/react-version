import React, { Component } from 'react';
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';
import Error from '../Error/Error';


class TopBanner extends Component {
  constructor() {
    super();
    this.state = {
      title: " ",
      error: false

    }
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.GeneralData).then(result => {
      result ?
        this.setState({ title: result[0]['title'] })
        : this.setState({ error: true })
    })
      .catch(error => {
        this.setState({ error: true })
      })
  }



  render() {

    return (
      <>
        {
          this.state.error ? <Error /> :
            <div className="bg hero relative">
              <div className="row">
                <h1 className="text-3xl lg:text-5xl font-semibold text-white text-center  wide-full w-4/5 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono">
                  {this.state.title}
                </h1>
                <button className="w-5/12 md:w-2/12 px-5 md:px-10 py-2 bg-yellow-500 hover:bg-yellow-600 duration-300 text-white text-lg uppercase absolute top-2/3 md:top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl rounded-md border-b-4 border-yellow-600">
                  Work with us
                </button>
              </div>
            </div>

        }


      </>
    );
  }
}

export default TopBanner;