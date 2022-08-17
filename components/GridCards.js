import React from 'react';
import Image from 'next/image';

export default function GridCards({title}) {
  return (
    <>
         <div className="col-start-1 col-span-3 py-4 px-4 w-full flex justify-between bg-white gap-4 pb-6 border-b border-gray-200" >
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900
                    bg-gradient-to-r bg-clip-text  text-transparent 
                    from-indigo-500 via-purple-500 to-indigo-500"
                    animate-text='true'
                >{title}<span className='text-sm text-gray-500 font-medium'> Recent </span>
                </h2>
        </div>

        
        <div className="grid grid-cols-1 pt-10 pb-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  

            <div className="transform translate-y-0 transition ease-in-out delay-150 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                <a href="#">
                    <Image className="rounded-t-lg" src="https://i.ibb.co/Ms4qyXp/img-65.png" alt="feeblytech.com" width={500} height={300} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021 </h5>
                    </a>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                    </a>
                </div>
            </div>

            <div className="transform translate-y-0 transition ease-in-out delay-150 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                <a href="#">
                    <Image className="rounded-t-lg" src="https://i.ibb.co/Ms4qyXp/img-65.png" alt="feeblytech.com" width={500} height={300} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                    </a>
                </div>
            </div>

            <div className="transform translate-y-0 transition ease-in-out delay-150 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                <a href="#">
                    <Image className="rounded-t-lg" src="https://i.ibb.co/Ms4qyXp/img-7.png" alt="feeblytech.com" width={500} height={300} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                    </a>
                </div>
            </div>


            <div className="transform translate-y-0 transition ease-in-out delay-150 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                <a href="#">
                    <Image className="rounded-t-lg" src="https://i.ibb.co/Ms4qyXp/img-76.png" alt="feeblytech.com" width={500} height={300} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                    </a>
                </div>
            </div>

            <div className="transform translate-y-0 transition ease-in-out delay-150 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                <a href="#">
                    <Image className="rounded-t-lg" src="https://i.ibb.co/Ms4qyXp/img-23.png" alt="feeblytech.com" width={500} height={300} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                    </a>
                </div>
            </div>


            <div className="transform translate-y-0 transition ease-in-out delay-150 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                <a href="#">
                    <Image className="rounded-t-lg" src="https://i.ibb.co/Ms4qyXp/img-52.png" alt="feeblytech.com" width={500} height={300} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                    </a>
                </div>
            </div>

        </div>
        <div className="col-start-1 col-span-3 py-4 px-4 w-full flex justify-between bg-white gap-4 pb-6 border-b border-gray-200" >
        </div>
       
    
    </>
  )
}
