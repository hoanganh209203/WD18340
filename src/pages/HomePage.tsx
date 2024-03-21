import React from 'react'
import SlideShow from '../layouts/SlideShow'
import Products from '~/components/productsList'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

const HomePage = () => {
    
    return (
        <>
            <SlideShow />
           <Products /> 
        </>
    )
}

export default HomePage