import React, { Component } from 'react'
import Footer from '../components/Footer/Footer';
import Policy from '../components/Policy/Policy';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import AppUrl from '../RestAPI/AppUrl';
import RestClient from '../RestAPI/RestClient';

export default class TermsConditionsPage extends Component {
    constructor(){
        super();
        this.state={
            description:" "
        }
    }

    componentDidMount(){
        window.scrollTo({top:1})

        RestClient.GetRequest(AppUrl.GeneralData).then(result=>{
            this.setState({description:result[0]['terms_conditions']})
        })
    }


    render() {
        return (
            <>
            <TopNavigation/>
            <Policy title="Terms & Conditions" des={this.state.description}/>
            <Footer/>
                
            </>
        )
    }
}
