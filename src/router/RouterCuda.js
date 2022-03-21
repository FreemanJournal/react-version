import React, { Component } from 'react'
import { Route,Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import TeamPage from '../pages/TeamPage'
import ServicesPage from "../pages/ServicesPage"
import SkillPage from "../pages/SkillPage"
import PortfolioPage from "../pages/PortfolioPage"
import TestimonialPage from "../pages/TestimonialPage"
import ContactPage from "../pages/ContactPage"
import RefundPage from '../pages/RefundPage'
import CaseStudyDetailsPage from '../pages/CaseStudyDetailsPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import ProductsPage from '../pages/ProductsPage'
import PrivacyPage from '../pages/PrivacyPage'
import TermsConditionsPage from '../pages/TermsConditionsPage'
import AboutMePage from '../pages/AboutMePage'


export default class RouterCuda extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/teams"  component={TeamPage}/>
                    <Route path="/services"  component={ServicesPage}/>
                    <Route path="/products" component={ProductsPage}/>                    
                    <Route path="/skill"  component={SkillPage}/>
                    <Route path="/portfolio"  component={PortfolioPage}/>
                    <Route path="/testimonial"  component={TestimonialPage}/>
                    <Route path="/contact"  component={ContactPage}/>
                    <Route path="/refund" component={RefundPage}/>                    
                    <Route path="/privacy" component={PrivacyPage}/>                    
                    <Route path="/terms" component={TermsConditionsPage}/>                    
                    <Route path="/aboutMe" component={AboutMePage}/>                    
                    <Route path="/caseStudyDetails/:caseID/:caseTitle" component={CaseStudyDetailsPage}/>
                    <Route path="/productDetailsPage/:projectID" component={ProductDetailsPage}/>                    
                </Switch>           
           
                
            </>
        )
    }
}
