import React from 'react';
import Image from 'next/image';
import Header from '../components/Layouts/sample/Header';
import Layout from '../components/Layouts/sample/Layout';
import SwiperSliders from "../components/Layouts/swiper";

const Sample = () => {

    const products = [
        {
          id: 1,
          name: 'Earthen Bottle',
          href: '#',
          price: '$48',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
          id: 2,
          name: 'Nomad Tumbler',
          href: '#',
          price: '$35',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
          id: 3,
          name: 'Focus Paper Refill',
          href: '#',
          price: '$89',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
          id: 4,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: '$35',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        // More products...
      ]

    return (
        <div className="header-2">

            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                <section className="w-full md:w-2/3 flex flex-col items-center px-3">


                <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                 <h2 className="text-4xl font-extrabold tracking-tight text-gray-900
                    bg-gradient-to-r bg-clip-text  text-transparent 
                    from-indigo-500 via-purple-500 to-indigo-500"
                    animate-text='true'
                  >#Entertainment<span className='text-sm text-gray-500 font-medium'> Recent </span></h2>
                  
                </div>
                <span className="bg-blue-100 text-blue-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Movies</span>
                <span className="bg-pink-100 text-pink-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Netflix News</span>
                <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">DisneyPlus News</span>
                <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Webseries</span>
                <div id="blog" className="bg-white-100 px-4 xl:px-0 py-12">
               
                      
                  <div className="container mx-auto">

                     
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      


                        <SwiperSliders />               
                        <div className=" transform translate-y-0 transition ease-in-out delay-150   bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300 overflow-hidden">
                            <a href="#">
                                <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=302.jpg" alt="feeblytech.com" width={500} height={300} />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                </a>
                            </div>
                        </div>

                        <div className=" transform translate-y-0 transition ease-in-out delay-150  bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                            <a href="#">
                                <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=303.jpg" alt="feeblytech.com" width={500} height={300} />
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

                        <div className=" transform translate-y-0 transition ease-in-out delay-150  bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                            <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">DisneyPlus News</span>

                            <a href="#">
                                <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=305.jpg" alt="feeblytech.com" width={500} height={300} />
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

                        <div className=" transform translate-y-0 transition ease-in-out delay-150  bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                            <a href="#">
                                <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=308.jpg" alt="feeblytech.com" width={500} height={300} />
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
                        <div className=" transform translate-y-0 transition ease-in-out delay-150  bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
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
        
                      </div>
                    </div>
                </div>                

                <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">

                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900
                    bg-gradient-to-r bg-clip-text  text-transparent 
                    from-indigo-500 via-purple-500 to-indigo-500"
                    animate-text='true'
                  >#Technology<span className='text-sm text-gray-500 font-medium'> Recent </span></h2>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Tech News</span>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Gadgets News</span>
                <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Google Tech News</span>
                                
                <div id="blog" className="bg-white-100 px-4 xl:px-0 py-12">

                      
                  <div className="container mx-auto">

                     
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <SwiperSliders />               
                        <div className=" transform translate-y-0 transition ease-in-out delay-150   bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300 overflow-hidden">
                            <a href="#">
                                <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=302.jpg" alt="feeblytech.com" width={500} height={300} />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                </a>
                            </div>
                        </div>

                        <div className=" transform translate-y-0 transition ease-in-out delay-150  bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                            <a href="#">
                                <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=303.jpg" alt="feeblytech.com" width={500} height={300} />
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

                        <div className=" transform translate-y-0 transition ease-in-out delay-150  bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                            <a href="#">
                                <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=305.jpg" alt="feeblytech.com" width={500} height={300} />
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

                        <div className=" transform translate-y-0 transition ease-in-out delay-150  bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
                            <a href="#">
                                <Image className="rounded-t-lg" src="https://picsum.photos/200/300?random=308.jpg" alt="feeblytech.com" width={500} height={300} />
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
                        <div className=" transform translate-y-0 transition ease-in-out delay-150  bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl hover:-translate-y-1 hover:scale-80  duration-300">
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
        
                      </div>
                    </div>
                </div>                
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
  
        



        
         
            
      </main>
    </div>
    );
}

export default Sample;
