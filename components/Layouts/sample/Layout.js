import React, { Children } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'

const Layout = (props) => {
    return (
        <div className="header-2">

            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {props.children}       

            </main>

            
        </div>
    );
}

export default Layout;
