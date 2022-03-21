import React, { Component } from "react";
import "../../index.css";
import "../../asset/css/style.css";
import data from "./TeamData";
import TeamCard from "./TeamCard.js";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";

class Team extends Component {

  constructor(){
    super();
    this.state={
      data:[],
      photo:[],
      loading:true
    }
  }
  componentDidMount(){
    RestClient.GetRequest(AppUrl.TeamData).then(result=>{
      this.setState({data:result,loading:false})
    })
    RestClient.GetRandomPhoto().then(result=>{
      this.setState({photo:result})
    })
  }

  render() {

    
    return (
      <>
       {
         this.state.loading?
         <Loading/>
         :<div className="bg team text-center">
         <div className="row">
           <h2 className="h2">Professional team</h2>
           <p className="p">Meat the best team in the world</p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-2 p-10 md:px-0 mt-16 md:mt-5 justify-evenly">
             {this.state.data.map((item) => (<TeamCard rowData={item} />))}
           </div>
         </div>
       </div>

       }
      </>
    );
  }
}

export default Team;
