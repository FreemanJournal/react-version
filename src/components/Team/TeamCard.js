import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default class TeamCard extends Component {
  render() {
    
    const {
      id,
      images,
      names,
      designations,
      descriptions,
      twitter_links,
      github_links,
      linkdin_links, 
      instagram_links,
    } = this.props.rowData;
    return (
      <>
        {/* <div class="inline-flex items-center space-y-24 md:space-y-0 flex-col md:flex-row justify evenly"> */}
        <div class="p-4 relative  md:mt-20" key={id}>
          <div class="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
            <a href="#" class="block relative">
              <img
                alt="profile"
                src={images}
                class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
              />
            </a>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-2xl px-8 py-4 pt-24">
            <div class="text-center">
              <p class="text-2xl text-gray-800 dark:text-white">{names}</p>
              <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
                {designations}
              </p>
              <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                {descriptions}
              </p>
            </div>
            <div class="pt-8 flex space-x-5 border-t border-gray-200 w-50 mx-auto text-gray-500 items-center justify-center" key={id}>
                  {/* Social Media-Icon Start */}

                  <a
                    href={"//"+twitter_links}
                    target="_blank"
                    className="rounded-full h-10 w-10 flex flex-shrink-0 items-center justify-center  hover:bg-white text-white hover:text-blue-400 text-2xl transform hover:rotate-360 duration-300"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>

                  <a
                    href={"//"+github_links}
                    target="_blank"
                    className="rounded-full h-10 w-10 flex flex-shrink-0 items-center justify-center hover:bg-white text-white hover:text-gray-800 text-2xl transform-gpu hover:rotate-360 duration-300"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href={"//"+linkdin_links}
                    target="_blank"
                    className="rounded-full h-10 w-10 flex flex-shrink-0 items-center justify-center hover:bg-white text-white hover:text-blue-600 text-2xl transform-gpu hover:rotate-360 duration-300"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href={"//"+instagram_links}
                    target="_blank"
                    className="rounded-full h-10 w-10 flex flex-shrink-0 items-center justify-center hover:bg-white text-white hover:text-red-400 text-2xl transform-gpu hover:rotate-360 duration-300"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>

                  {/* Social Media Icon End */}
                </div>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}
