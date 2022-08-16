/* eslint-disable @next/next/no-img-element */
import React, { Children } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import Footer from './Footer';

const Layout = (props) => {
    return (
      <>
            <div className="absolute bg-white w-full h-full">

                <Navbar />
                {props.children}
                <Footer/>
            
            </div>
        </>
    );
}

export default Layout;
