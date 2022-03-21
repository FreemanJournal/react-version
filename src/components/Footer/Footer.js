import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { address } from "./Address";
import { Link } from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

export default class Footer extends Component {

  constructor(){
    super();
    this.state={
      address:"",
      email:"",
      twitter:"www.twitter.com",
      github:"www.github.com",
      linkedin:"www.linkedin.com",
      instagram:"www.instagram.com"
    }
  }

  componentDidMount(){
    window.scroll(0,0);
    RestClient.GetRequest(AppUrl.GeneralData).then(result=>{
      this.setState({
        address:result[0]['post_address'],
        email:result[0]['email_address'],
        twitter:result[0]['twitter_link'],
        github:result[0]['github_link'],
        linkedin:result[0]['linkedIn_link'],
        instagram:result[0]['instagram_link'],
      })
    })
    .catch(error=>{
      this.setState({
        address:'Ghagra,Purbodola,Netrokona-2010',
        email:"ishaqrabbu97@gmail.com",
      })
    })
  }
  render() {
      const twitter = '#';
      
    return (
      <>
        <footer class="footer bg-white dark:bg-gray-800 pt-10 pb-8 xl:pt-8 ">
          <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
            <ul class="text-lg font-light pb-8 flex flex-wrap justify-center">
              <li class="w-full md:w-1/3 lg:w-1/3">
                <div class="text-center">
                  <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                    Address
                  </h2>
                  <ul>
                    <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                     <span>{this.state.address}</span>
                    </li>
                    <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <Link to="#"><FontAwesomeIcon icon={faEnvelope} /> {this.state.email}</Link>
                    </li>
                    
                  </ul>
                </div>
              </li>
              <li class="w-full md:w-1/3 lg:w-1/3">
                <div class="text-center">
                  <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                    Information
                  </h2>
                  <ul>
                    <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <Link to="/aboutMe">About Me</Link>
                    </li>
                    <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <a href="#">My Resume</a>
                    </li>
                    <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <Link to="/contact">Contact Me</Link>
                    </li>
                    
                  </ul>
                </div>
              </li>
              <li class="w-full md:w-1/3 lg:w-1/3">
                <div class="text-center">
                  <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                    Legal Policy
                  </h2>
                  <ul>
                    <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                      <Link to="/refund">Refund Policy</Link>
                    </li>
                    <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                    <Link to="/terms">Terms and Condition</Link>
                      
                    </li>
                    <li class="mb-4 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                    <Link to="/privacy">Privacy Policy</Link>
                    </li>
                    
                  </ul>
                </div>
              </li>
            </ul>
            <div class="pt-8 flex border-t border-gray-900 max-w-xs mx-auto items-center justify-between">
              <a
                href={"//"+this.state.twitter}
                target='_blank'
                rel="noreferrer"
                aria-label='Twitter'
                className="rounded-full h-10 w-10 flex flex-shrink-0 items-center justify-center  hover:bg-white text-white hover:text-blue-400 text-2xl transform hover:rotate-360 duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href={"//"+this.state.github}
                target='_blank'
                rel="noreferrer"
                className="rounded-full h-10 w-10 flex flex-shrink-0 items-center justify-center  hover:bg-white text-white hover:text-gray-800 text-2xl transform hover:rotate-360 duration-300"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={"//"+this.state.linkedin}
                target='_blank'
                rel="noreferrer"
                className="rounded-full h-10 w-10 flex flex-shrink-0 items-center justify-center  hover:bg-white text-white hover:text-blue-400 text-2xl transform hover:rotate-360 duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href={"//"+this.state.instagram}
                target='_blank'
                rel="noreferrer"
                className="rounded-full h-10 w-10 flex flex-shrink-0 items-center justify-center  hover:bg-white text-white hover:text-red-400 text-2xl transform hover:rotate-360 duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div class="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
              Created by Rabbil Hasan Rupom
            </div>
          </div>
        </footer>
      </>
    );
  }
}
