import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'
import Skills from '../components/Skills/Skills'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class SkillPage extends Component {
    componentDidMount(){
       window.scrollTo({top:1})
    }
    render() {
        return (
            <>
                <TopNavigation title="Skill"/>
                <Skills/>
                <Footer/>                
            </>
        )
    }
}
