import React, { Children } from 'react';
import Navbar from './Navbar';

const Layout = (props) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto flex flex-wrap py-6">

                <section className="w-full md:w-2/3 flex flex-col items-center px-3">

                    {props.children}

                  

                </section>

                <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

                    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                        <p className="text-xl font-semibold pb-5">About Us</p>
                        <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                        <a href="#" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                            Get to know us
                        </a>
                    </div>

                </aside>

            </div>
        </>
    );
}

export default Layout;
