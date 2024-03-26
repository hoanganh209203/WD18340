import React from 'react'
import { Outlet} from 'react-router-dom'
import Header from '~/components/View_Layout/Header';
import Footer from '~/components/View_Layout/Footer';
const Layout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout