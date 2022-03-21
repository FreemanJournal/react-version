import React, { Component } from 'react';
import productData from './ProductData';
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { Link } from 'react-router-dom';
import { productDetailsData } from '../ProductDetails/productDetailsData';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';
import Loading from '../Loading/Loading';


class Products extends Component {

  constructor({}){
    super();
    this.state={
      productHome:[],
      loading:true,
    }
  }

  componentDidMount() {
    window.scroll(0, 0);
    RestClient.GetRequest(AppUrl.ProductPageData).then(result=>{
      this.setState({productHome:result,loading:false})
    })
   
  }
 
  render() {
    return (
      <>
        {
          this.state.loading?<Loading/>:
          <div className="bg portfolio">
          <div className="row text-center">
            <h2 className="h2 text-gray-800">
              Our Products
            </h2>
            <p className="p text-gray-800">

            </p>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mx-auto pb-16">
              {this.state.productHome.map((item) => {
                const { id,image_links,titles,subtitles,current_prices} = item;
                console.log(id)
                return (

                  <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-full bg-cover">
                      {/* start */}
                      <img
                        src={image_links}
                        alt={titles}
                        className="imgBox m-auto p-2 cursor-pointer"

                      />
                      {/* End */}
                    </div>
                    <div className="w-full p-4 h-full flex flex-col justify-between">
                      <div>
                        <h1 className="text-gray-900 font-bold text-2xl">
                          {titles}
                        </h1>
                        <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                          {subtitles}
                        </p>

                      </div>
                      <div>
                        <div className="flex item-center mt-2">                          

                          {/* Old svg files Start*/}
                          <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                          </svg>
                          <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                          </svg>
                          <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                          </svg>
                          <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                          </svg>
                          <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                          </svg>
                          {/* End */}
                        </div>
                        <div className="flex item-center justify-between mt-3">
                          <h1 className="text-gray-700 font-bold text-xl">
                            ${current_prices}
                          </h1>
                          <div>
                            <button className="px-3 py-2 mx-2 text-base bg-gray-700 hover:bg-gray-900 text-white  font-bold uppercase rounded">
                              <Link to={`/productDetailsPage/${id}`}>Details</Link>
                            </button>
                            <button className="px-3 py-2 text-base bg-gray-700 hover:bg-gray-900 text-white  font-bold uppercase rounded">
                              Add To cart
                            </button>
                          </div>
                        </div>

                      </div>


                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        }
      </>
    );
  }
}

export default Products;