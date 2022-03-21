import React, { Component } from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class ContactPage extends Component {
    componentDidMount(){
        window.scrollTo({top:1})

    }
    render() {
        return (
            <>
            <TopNavigation title="Contact"/>
            <Contact/>
            <Footer/>             
            </>
        )
    }
}
