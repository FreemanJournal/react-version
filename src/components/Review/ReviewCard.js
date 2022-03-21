import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class ReviewCard extends Component {
  render() {
      const {reviews,review_image_links,reviewers,reviewer_designations} = this.props.data;
    return (
      <>
        <div className="bg-gradient-to-tr from-white via-yellow-200 to-yellow-300  w-full h-full mx-auto p-8 rounded-md flex flex-wrap flex-col content-center">
          
          <p className="text-gray-600  w-full md:w-2/3 m-auto text-center text-lg lg:text-3xl">
            <span className="font-bold text-indigo-500">“</span>
            {reviews}
            <span className="font-bold text-indigo-500">”</span>
         
          </p>
          <div className="flex items-center justify-center mt-8">
            <Link to="#" className="block relative">
              <img
                alt="profil"
                src={review_image_links}
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </Link>
            <div className="flex ml-2 items-center justify-center">
              <span className="font-semibold text-indigo-500 mr-2 text-lg">
                {reviewers}
              </span>
              <span className="text-gray-400 text-xl font-light">/</span>
              <span className="text-gray-900 text-md ml-2">{reviewer_designations}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
