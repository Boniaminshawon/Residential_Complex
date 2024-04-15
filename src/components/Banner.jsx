import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

import 'animate.css';


import AOS from 'aos';
import 'aos/dist/aos.css';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    AOS.init();


    return (
        <Swiper

            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
             

            <SwiperSlide
                style={{ backgroundImage: 'url("https://i.ibb.co/dbM60CG/image.jpg")', backgroundPosition: 'center', backgroundSize: 'cover',height:'520px' }}
            >
                <div
                    className='pr-10  w-full flex justify-end'>

                  <div
                   className=' animate__animated animate__backInDown   bg-[#004274] text-start text-white p-6 w-[380px]'>
                  <div className='flex justify-between'>
                        <p className='font-bold text-xl font-primary'>Cityscape Apartments</p>
                        <p className=''>$200,000</p>
                    </div>
                    <p className='text-sm my-2'> 123 Mocbird Lane, Willow Springs, Meadow</p>
                    <p className='text-base '>1,000 sq ft</p>
                    <button className='bg-[#00aeff] hover:bg-[#004274] rounded-md px-3 py-1 mt-5'>View Details</button>
                  </div>
                </div>

            </SwiperSlide>



            <SwiperSlide
              style={{ backgroundImage: 'url("https://i.ibb.co/mGJxkgX/vacation-rental-websites-1550853606.jpg")', backgroundPosition: 'center', backgroundSize: 'cover',height:'520px' }}>
              
              <div  className='pr-10  w-full flex justify-end'>
              <div
                    // data-aos-duration="2000" data-aos="zoom-in-down" data-aos-once='false'
                    className='animate__animated animate__backInDown  animate__slow 	  bg-[#004274] text-start text-white p-6 w-[380px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl font-primary'>Beachfront Vacation Rentals</p>
                        <p className=''>$300/night</p>
                    </div>
                    <p className='text-sm my-2'> 123 Mocbird Lane, Willow Springs, Meadow</p>
                    <p className='text-base '>900 sq ft</p>
                    <button className='bg-[#00aeff] hover:bg-[#004274] rounded-md px-3 py-1 mt-5'>View Details</button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ backgroundImage: 'url("https://i.ibb.co/hBjrrfc/Silverwell-Estate-Narre-Warren-South-1706743670-1.jpg")', backgroundPosition: 'center', backgroundSize: 'cover',height:'520px' }}>
          
               <div  className='pr-10  w-full flex justify-end'>
               <div className=' bg-[#004274] text-start text-white p-6 w-[380px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl font-primary'>Harborview Townhomes </p>
                        <p className=''>$3,500/month</p>
                    </div>
                    <p className='text-sm my-2'> 456 Tranquil Avenue, Lakeside Heights, Harborview
                    </p>
                    <p className='text-base '>1,800 sq ft</p>
                    <button className='bg-[#00aeff] hover:bg-[#004274] rounded-md px-3 py-1 mt-5'>View Details</button>
                </div>
               </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ backgroundImage: 'url("https://i.ibb.co/dPYqYfN/Cadence20-Urban20-Trails-Aerial203-2.jpg")', backgroundPosition: 'center', backgroundSize: 'cover',height:'520px' }}>
           
              <div  className='pr-10  w-full flex justify-end'>
              <div className=' bg-[#004274] text-start text-white p-6 w-[380px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl font-primary'>Meadowview Estates</p>
                        <p className=''>$650,000</p>
                    </div>
                    <p className='text-sm my-2'>789 Rustic Road, Cedar Valley, Brookside</p>
                    <p className='text-base '>2,200 sq ft</p>
                    <button className='bg-[#00aeff] hover:bg-[#004274] rounded-md px-3 py-1 mt-5'>View Details</button>
                </div>
              </div>
            </SwiperSlide>



            <SwiperSlide
              style={{ backgroundImage: 'url("https://i.ibb.co/8mQ5NQZ/873be99172324ddabf775d03fc608c09.jpg")', backgroundPosition: 'center', backgroundSize: 'cover',height:'520px' }}>
      
               <div  className='pr-10  w-full flex justify-end'>
               <div className=' bg-[#004274] text-start text-white p-6 w-[380px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl font-primary'>Campus Edge Student Housing</p>
                        <p className=''>$800/month</p>
                    </div>
                    <p className='text-sm my-2'> 1010 Sycamore Street, Maplewood, Riverbend</p>
                    <p className='text-base '>800 sq ft</p>
                    <button className='bg-[#00aeff] hover:bg-[#004274] rounded-md px-3 py-1 mt-5'>View Details</button>
                </div>
               </div>
            </SwiperSlide>

            <SwiperSlide
              style={{ backgroundImage: 'url("https://i.ibb.co/s5FQGbZ/Senior-Living-Communities.jpg")', backgroundPosition: 'center', backgroundSize: 'cover',height:'520px' }}>
      
              <div  className='pr-10  w-full flex justify-end'>
              <div className=' bg-[#004274] text-start text-white p-6 w-[380px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl font-primary'> Pinecrest Retirement Village</p>
                        <p className=''>$3,500/month</p>
                    </div>
                    <p className='text-sm my-2'> 1222 Twilight Boulevard, Hillcrest Hills, Summitview</p>
                    <p className='text-base '>1,500 sq ft</p>
                    <button className='bg-[#00aeff] hover:bg-[#004274] rounded-md px-3 py-1 mt-5'>View Details</button>
                </div>
              </div>
            </SwiperSlide>


        </Swiper>
    );
};

export default Banner;