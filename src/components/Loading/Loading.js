import React, { Component } from 'react';
// import loading from "Images/loader.svg";
import loader from "../../asset/img/loader.svg";

export default class Loading extends Component {
    componentDidMount(){
        document.body.style.overflow='hidden'
    }
    componentWillUnmount(){
        document.body.style.overflow="unset"
    }
    render() {
        return (
            <>
            <div className="flex z-20 h-screen">
                <img className="m-auto" src={loader}/>
            </div>
                
            </>
        )
    }
}
