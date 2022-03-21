import React, { Component } from 'react';
import CircularProgressBar from './vendor/CircularProgressBar';
import info from './SkillsData';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';


class Skills extends Component {
  constructor() {
    super();
    this.state = {
       data: []
      
    };
  }
componentDidMount(){
  RestClient.GetRequest(AppUrl.SkillData).then(result=>{
    this.setState({data:result})
  })
}
  

  render() {
    // const info = this.state.data
   
    return (
      <>
        <div className="bg skill text-center">
          <div className="row">
            <h2 className="h2 text-red-400">We Got skills</h2>
            <p className="p text-red-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              magnam aliquam esse reprehenderit placeat nam hic, cum quis ad
              consectetur?
            </p>
            <div className="progressBar py-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center items-center">
              {this.state.data.map((item) => {
                const {id,titles,aptitudes} = item;
                return (
                  <div className="progressBarBox text-center" key={id}>
                    <CircularProgressBar aptitude={aptitudes} />
                    <h4 className="text-1xl font-semibold  md:text-1xl uppercase">
                      {titles}
                    </h4>
                  </div>
                );
              }
               
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Skills;
