import React, { Component } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import Policy from '../components/Policy/Policy'
import RestClient from '../RestAPI/RestClient';
import AppUrl from '../RestAPI/AppUrl';


export default class RefundPage extends Component {
  constructor() {
    super();
    this.state = {
      description: " "
    }
  }

  componentDidMount() {
    window.scrollTo({ top: 1 })
    RestClient.GetRequest(AppUrl.GeneralData).then(result => {
      this.setState({ description: result[0]['refund_policy'] })
    });
  }
  render() {
    return (
      <>
        <TopNavigation />
        <Policy title="Refund Policy" des={this.state.description} />
        <Footer />

      </>
    )
  }
}
