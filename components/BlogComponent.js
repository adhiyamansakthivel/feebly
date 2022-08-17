import React from 'react';

const BlogComponent = ({title}) => {
    return (
        <>          
            <div className="pt-10">

                <div className="transform translate-y-0 transition ease-in-out delay-150  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                    <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                        <div className="w-full md:w-1/3 bg-white grid place-items-center">
                            <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" className="rounded-xl" />
                        </div>
                        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                            <div className="flex justify-between items-center">
                                <span className="font-light text-gray-600">mar 10, 2019</span>
                                <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">DisneyPlus News</span>
                            </div>
                            
                            <h3 className="font-black text-gray-800 md:text-3xl text-xl">{title}</h3>
                            <p className="md:text-lg text-gray-500 text-base">The best kept secret of The Bahamas is the countrys sheer
                                    size and diversity. With 16 major islands, The Bahamas is an unmatched destination
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <a className="text-blue-600 hover:underline" href="#">Read more</a>
                                
                            </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogComponent;
