import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import AppUrl from "../../../RestAPI/AppUrl";
import RestClient from "../../../RestAPI/RestClient";
import { faqData } from "./faqData";



export default class BootAccordion extends Component {
  constructor({}){
    super();
    this.state={
      faqData:[],
    }
  }

  componentDidMount() {
    window.scroll(0, 0);
    RestClient.GetRequest(AppUrl.ProductFAQ).then(result=>{
      this.setState({faqData:result})
    })
   
  }
  render() {
    return (
      <>
        <div className="">
        <Accordion>
          {this.state.faqData.map((item,i)=>
          <Accordion.Item eventKey={i}>
          <Accordion.Header className="" id="">{item.questions}?</Accordion.Header>
          <Accordion.Body>
              {item.answers}
          </Accordion.Body>
          </Accordion.Item>     
          )}
         
        </Accordion>
        </div>
      </>
    );
  }
}
