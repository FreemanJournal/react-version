import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'
import Products from '../components/Products/Products'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class ProductsPage extends Component {
    constructor(match) {
        super();
        this.state = {
            // id: match.params.projectID

        }
    }
    componentDidMount(){
       window.scrollTo({top:1})

    }
    render() {
        // console.log("Product ID is "+this.state.id)
        return (
            <>
                <TopNavigation />
                <Products />
                <Footer />

            </>
        )
    }
}
