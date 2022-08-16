/* eslint-disable @next/next/no-img-element */
import React from 'react';


// import Swiper core and required modules
import { Parallax, Autoplay, Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';




const SwiperSliders = () => {
    return (
        
            
            <Swiper
                // install Swiper modules
                spaceBetween={30}
                centeredSlides={true}
                parallax={true}

                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Parallax]}
                className="mySwiper"
                >
                        <SwiperSlide className='rounded-t-lg'> 
                            <div className="subtitle" data-swiper-parallax="-200">
                                Subtitle
                            </div>
                            <Image src="/images/m1.jpg" alt="feeblytech.com"  layout='fill' />
                        </SwiperSlide>
                        <SwiperSlide className='rounded-t-lg'><Image  src="/images/m2.jpg" alt="feeblytech.com"  layout='fill' /><span>Hello World</span></SwiperSlide>
                        <SwiperSlide className='rounded-t-lg'><Image  src="/images/m3.jpg" alt="feeblytech.com"  layout='fill'/></SwiperSlide>
                        <SwiperSlide className='rounded-t-lg'><Image  src="/images/m4.jpg" alt="feeblytech.com"  layout='fill'/></SwiperSlide>

               

            </Swiper>
            
    );
}

export default SwiperSliders;
