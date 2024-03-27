import React from 'react'
import SlideShow from '../components/View_Layout/SlideShow'
import Products from '~/components/View_Layout/productsList'
import Header from '~/components/View_Layout/Header'
import Footer from '~/components/View_Layout/Footer'

const HomePage = () => {
    
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <SlideShow />
           <Products /> 
           </div>
        </div>
    )
}

export default HomePage
