import React from "react";
import Layout from "../components/Layouts/Layout";
import Image from "next/image";
import DashCards from "../components/Layouts/DashCards";
import SwiperSliders from "../components/Layouts/swiper";

export default function Home() {
  return (
    <>
      <Layout>
       
        
        <div className="mx-auto container">
           
            <div className="grid grid-cols-3 gap-x-12 gap-y-12 ">
                
                <div className="col-start-1 col-span-3 py-4 px-4 w-full flex justify-between bg-indigo-700 gap-3.5" >
                    <p className="text-sm text-white font-semibold tracking-wide">Holly Wood Movies</p>
                </div>
                
                <SwiperSliders />               

                <div className="transform translate-y-0 transition ease-in-out delay-150 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                    <a href="#">
                        <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=300.jpg" alt="feeblytech.com" width={500} height={300} />
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
                        <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=5.jpg" alt="feeblytech.com" width={500} height={300} />
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
                        <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=3.jpg" alt="feeblytech.com" width={500} height={300} />
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
                        <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=4.jpg" alt="feeblytech.com" width={500} height={300} />
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
      </div>
      <br/><br/><br/>

      <div className="mx-auto container ">
           
            <div className="grid grid-cols-3 gap-x-12 gap-y-12 ">
                
                <div className="col-start-1 col-span-3 py-4 px-4 w-full flex justify-between bg-pink-700 gap-3.5" >
                    <p className="text-sm text-white font-semibold tracking-wide">Holly Wood Movies</p>
                </div>
                
                <SwiperSliders />               

                <div className="transform translate-y-0 transition ease-in-out delay-150 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                    <a href="#">
                        <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=300.jpg" alt="feeblytech.com" width={500} height={300} />
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
                        <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=5.jpg" alt="feeblytech.com" width={500} height={300} />
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
                        <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=3.jpg" alt="feeblytech.com" width={500} height={300} />
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
                        <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=4.jpg" alt="feeblytech.com" width={500} height={300} />
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
      </div>

        
      
      </Layout>
 

    </>
  )
}
