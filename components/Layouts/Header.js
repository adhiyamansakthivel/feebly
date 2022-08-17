import React from 'react';

const Header = ({header}) => {
    return (
        <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
            <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
                {header}
            </a>
        </div>
    </header>
    );
}

export default Header;
