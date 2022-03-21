import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';

export default class Policy extends Component {
  
  render() {
    return (
      <>
        <div className="bg portfolio review pb-10">
          <div className="row text-center">
            <h2 className="h2 text-gray-800">{this.props.title}</h2>
            <p className="text-gray-900 text-xl text-left">{ReactHtmlParser(this.props.des)}</p>
          </div>
        </div>
      </>
    );
  }
}
