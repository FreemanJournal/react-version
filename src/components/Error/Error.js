import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import sky from "../../asset/img/sky.jpg";
import * as VscIcons from 'react-icons/vsc'

export default class Error extends Component {
    componentDidMount(){
        document.body.style.overflow = 'hidden'
    }
    componentWillUnmount(){
        document.body.style.overflow="unset"
    }
    render() {
        return (
            <>
                <div className="bg-indigo-900 relative overflow-hidden h-screen">
                    <img src={sky} alt ="Error" className="absolute h-full w-full object-cover" />
                    <div className="inset-0 bg-black opacity-25 absolute">
                    </div>
                    <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                        <div className="w-full font-mono flex flex-col items-center relative z-10">
                            <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                                {/* You&#x27;re alone here */}
                                Awwww...You lost babygirl
                            </h1>
                            <p className="font-extrabold text-8xl mt-44 text-white animate-bounce">
                                404
                            </p>
                            <Link className="btn flex gap-2" to="/"><VscIcons.VscArrowLeft className=" text-3xl"/><span className=""> Back to Home</span></Link>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
