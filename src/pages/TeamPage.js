import React, { Component } from 'react'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Team from '../components/Team/Team'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class TeamPage extends Component {
    componentDidMount(){
        window.scrollTo({top:1})

       
    }
    render() {
        return (
            <>
                <TopNavigation title="Team"/>
                <Team/>               
                <Footer/>                
            </>
        )
    }
}
