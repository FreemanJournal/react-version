import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Portfolio from '../components/Portfolio/Portfolio'
import RestClient from '../RestAPI/RestClient';
import AppUrl from '../RestAPI/AppUrl';

export default class PortfolioPage extends Component {

  
  componentDidMount(){
   window.scrollTo({top:1})
  }

      
    render() {
        return (
            <>
                <TopNavigation title="Portfolio" />
                <Portfolio/>
                <Footer />
            </>
        )
    }
}
