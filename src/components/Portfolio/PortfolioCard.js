import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class PortfolioCard extends Component {

  render() {


    return (
      <>
        <div className="port-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
          {/* Card Is start */}

          {this.props.rawData.map((item) => {
            const {
              id,
              images,
              names,
              categories,
              descriptions,
              html,
              css,
              react
            } = item;           

            return (
              <div
                key={id}
                className="item-card bg-white rounded-lg  text-left space-y-5 my-5 pb-2 relative shadow-2xl w-3/4 md:w-11/12 mx-auto"
              >
                <div className="img-box bg-gray-200 rounded-lg rounded-b-none">

                  <img
                    src={images}
                    alt={names}
                    className="imgBox m-auto p-5 transform-gpu hover:scale-125 duration-300 cursor-pointer"
                    onClick={() => {
                      // window.open(gitLink, "_blank");
                    }}
                  />
                </div>
                <div className="text-box bg-white p-5 space-y-6">

                  <title
                    className="title block text-3xl font-medium font-tajawal text-gray-800 cursor-pointer focus:outline-black"
                    // Next time i am gonna use css shapes in there
                    onClick={() => {
                      // window.open(gitLink, "_blank");
                    }}
                  >
                    {names}

                  </title>

                  <div className="tech-used space-x-4 uppercase font-bold">
                    <span className="text-green-400">{html ? "html" : null}</span>
                    <span className="text-blue-600">{ css ? "css" : null}</span>
                    <span className="text-red-400">{react ? "react" : null}</span>
                  </div>
                  <p className="des m-auto font-medium text-gray-600">
                    {descriptions}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Card is End */}
        </div>
      </>
    );
  }
}

export default withRouter(PortfolioCard);