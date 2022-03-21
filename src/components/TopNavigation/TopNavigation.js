import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../asset/css/style.css";
import logo from "../../asset/img/logo.png";
import * as AiIcons from "react-icons/ai";
import menu from "./MenuItem";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Error from "../Error/Error";

class TopNavigation extends Component {
  constructor(props) {
    super();
    this.state = {
      navBar: "topNavBar",
      navItem: "nevItem navBarItem",
      sideBar: false,
      pageTitle: props.title,
      menuItems: [],
      error: false,
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBar: "topNavBarScroll shadow-2xl",
        navItem: "nevItem navBarItemScroll",
      });
    } else {
      this.setState({
        navBar: "topNavBar shadow-2xl",
        navItem: "nevItem navBarItem",
      });
    }
  };

  componentDidMount() {
    window.scroll(0, 0);
    window.addEventListener("scroll", this.onScroll);
    RestClient.GetRequest(AppUrl.MenuItemData)
      .then((result) => {
        result
          ? this.setState({ menuItems: result })
          : this.setState({ error: true });
      })
      .catch((e) => {
        this.setState({ error: true });
      });
  }
  toggleSideBar = () => {
    this.setState({ sideBar: !this.state.sideBar });
  };

  render() {


    const menuItem = this.state.menuItems.map((item) => {
      const { id, navItem, path } = item;
      return (
        <li className={this.state.navItem} key={id}>
          <NavLink exact activeClassName="text-red-500" to={path}>
            {navItem}
          </NavLink>
        </li>
      );
    });

    return (
      <>
        {this.state.error ? (
          <Error />
        ) : (
          <>
            <title>{this.state.pageTitle}</title>
            <div className="navbar ">
              <div className="row">
                <div className={this.state.navBar}>
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                  <div className="navMenu hidden lg:block">
                    <ul>{menuItem}</ul>
                  </div>

                  <div className="openCloseIcon text-white hover:text-white text-4xl lg:hidden">
                    <Link
                      to="#"
                      className={`${this.state.sideBar ? "hidden" : "hover:text-white"
                        }`}
                    >
                      <AiIcons.AiOutlineMenu onClick={this.toggleSideBar} />{" "}
                    </Link>
                    <Link
                      to="#"
                      className={`${this.state.sideBar ? "hover:text-white" : "hidden"
                        }`}
                    >
                      <AiIcons.AiOutlineClose onClick={this.toggleSideBar} />{" "}
                    </Link>
                  </div>
                  <nav
                    className={`bg-gradient-to-br from-gray-800 to-gray-500 text-white w-72 p-10 h-screen fixed top-20 right-0 flex justify-center transform-gpu ease-in-out transition duration-500 ${this.state.sideBar ? "translate-x-0" : "translate-x-full"
                      } lg:hidden overscroll-y-none`}
                  >
                    <ul
                      aria-hidden="true"
                      className="text-white flex flex-col justify-start content-center w-full text-center gap-5"
                      onClick={this.toggleSideBar}
                    >
                      {this.state.menuItems.map((item) => {
                        const { id, navItem, path } = item;
                        return (
                          <li
                            className="hover:text-gray-800 hover:bg-gray-100 flex items-center transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg py-3 px-14 text-2xl mx-auto"
                            key={id}
                          >
                            <NavLink
                              exact
                              to={path}
                              activeClassName="text-red-500"
                            >
                              {navItem}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>

                  {/* <div className={`fixed inset-0 bg-transparent overscroll-y-none ${this.state.sideBar?" ":"hidden"}`} onClick={this.toggleSideBar}>
                
              </div> */}
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default TopNavigation;
