import {Component} from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Footer from "../components/Footer/Footer";
export default class ProductDetailsPage extends Component{
    constructor({match}){
        super();
        this.state={
            id:match.params.projectID
        }
    }
    componentDidMount(){
        window.scrollTo({top:1})
    }

    render(){
        
        return(
            <>
                <TopNavigation/>
                <ProductDetails productId={this.state.id}/>
                <Footer/>            
            
            </>
        )
    }

}