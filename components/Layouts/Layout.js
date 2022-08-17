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
                    <div className="col-start-1 col-span-3 py-4 px-4 w-full flex justify-between bg-white gap-4 pb-6 border-b border-gray-200" >
                    </div>
                <Footer/>
            
            </div>
        </>
    );
}

export default Layout;
