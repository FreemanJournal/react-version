import React, { Component } from 'react'
import Footer from '../components/Footer/Footer';
import Policy from '../components/Policy/Policy';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import AppUrl from '../RestAPI/AppUrl';
import RestClient from '../RestAPI/RestClient';
import Loading from "../components/Loading/Loading"
import Error from '../components/Error/Error';



export default class AboutMePage extends Component {
    constructor() {
        super();
        this.state = {
            description: " ",
            loading: true,
            error:false
        }
    }

    componentDidMount() {
        window.scrollTo({top:1});
       
        RestClient.GetRequest(AppUrl.GeneralData).then(result => {
            result?
            this.setState({ description: result[0]['about_me'], loading: false })
            :
            this.setState({loading:false,error:true})
        })
        .catch(e=>{
            this.setState({loading:false,error:true})
        })
    }


    render() {
        return (
            <>
                {
                    this.state.error?<Error/>:
                    this.state.loading ? <Loading /> :
                        <div>
                            <TopNavigation />
                            <Policy title="About Me" des={this.state.description} />
                            <Footer />
                        </div>

                }

            </>
        )
    }
}
