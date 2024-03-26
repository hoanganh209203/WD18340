import React from 'react'
import SlideShow from '../components/View_Layout/SlideShow'
import Products from '~/components/View_Layout/productsList'
import Header from '~/components/View_Layout/Header'
import Footer from '~/components/View_Layout/Footer'

const HomePage = () => {
    
    return (
        <>
            <SlideShow />
           <Products /> 
        </>
    )
}

export default HomePage
