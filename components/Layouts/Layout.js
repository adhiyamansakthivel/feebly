/* eslint-disable @next/next/no-img-element */
import React, { Children } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

const Layout = (props) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto flex flex-wrap py-6">

                <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                    {props.children}

                  

                </section>

                <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                <div className="col-start-1 col-span-3 py-4 px-4 w-full flex justify-between bg-violet-700 gap-3.5" >
                    <p className="text-sm text-white font-semibold tracking-wide">Recent</p>
                </div>
                <div className="w-full bg-white shadow flex flex-col my-4 p-6">

                    <div className="flex justify-center">
                        <div className="transform translate-y-0 transition ease-in-out delay-150 flex flex-col md:flex-row md:max-w-xl h-40 rounded-lg bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                            <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://picsum.photos/200/300?random=620.jpg" alt="" />
                            <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Marvel series Avengers end game</h5>
                           
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <div className="flex justify-center">
                        <div className="transform translate-y-0 transition ease-in-out delay-150 flex flex-col md:flex-row md:max-w-xl h-40 rounded-lg bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                            <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://picsum.photos/200/300?random=635.jpg" alt="" />
                            <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Pirates of the carebian</h5>
                           
                            </div>
                        </div>
                    </div>
                </div>
                    


                  

                </aside>

            </div>
        </>
    );
}

export default Layout;
