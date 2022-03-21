import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'
import Review from '../components/Review/Review'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Video from '../components/Video/Video'

export default class TestimonialPage extends Component {
    componentDidMount(){
        window.scrollTo({top:1})
    }
    render() {
        return (
            <>
            <TopNavigation title="Testimonial"/>
            <Video/>
            <Review/>
            <Footer/>              
            </>
        )
    }
}
