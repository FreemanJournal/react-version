import React, { Component } from "react";
import CaseStudyDetails from "../components/CaseStudy/CaseStudyDetails";
import Footer from "../components/Footer/Footer";
import TopNavigation from "../components/TopNavigation/TopNavigation";


class CaseStudyDetailsPage extends Component {
    constructor({ match }) {
        super();
        this.state = {
            id: match.params.caseID,
            title: match.params.caseTitle,        
        };
    }
    componentDidMount(){
        window.scrollTo({top:1})
        
        // window.scrollTo({
        //     top: 1,
        //     left: 0,
        //     behavior: 'smooth'
        //   });
    }

    render() {
        return (
            <>
                <div>
                    <TopNavigation />
                    <CaseStudyDetails
                        id={this.state.id}
                        title={this.state.title}
                    />
                    <Footer />
                </div>
                
            </>
        );
    }
}

export default CaseStudyDetailsPage;
