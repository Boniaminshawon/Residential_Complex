import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <Swiper

            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >


            <SwiperSlide className='relative'>
                <img src="https://i.ibb.co/dbM60CG/image.jpg" alt="" />

                <div className='absolute  right-10 bg-[#004274] text-start text-white p-6 w-[380px]'>
                    <div className='flex justify-between'>
                        <p className='text-bold text-xl'>Apartments</p>
                        <p className=''>$190,000</p>
                    </div>
                    <p className='text-sm my-2'> 123 Mocbird Lane, Willow Springs, Meadow</p>
                    <p className='text-base '>1500 sq ft</p>
                    <button className='bg-[#00aeff] hover:bg-[#004274] rounded-md px-3 py-1 mt-5'>View Details</button>
                </div>
            </SwiperSlide>



            <SwiperSlide>
                <img src="https://i.ibb.co/mGJxkgX/vacation-rental-websites-1550853606.jpg" alt="" />
                <div className='absolute  right-10 bg-[#004274] text-start text-white p-6 w-[380px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl'>Vacation rentals</p>
                        <p className=''>$190,000</p>
                    </div>
                    <p className='text-sm my-2'> 123 Mocbird Lane, Willow Springs, Meadow</p>
                    <p className='text-base '>1500 sq ft</p>
                    <button className='bg-[#00aeff] hover:bg-[#004274] rounded-md px-3 py-1 mt-5'>View Details</button>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img src="https://i.ibb.co/hBjrrfc/Silverwell-Estate-Narre-Warren-South-1706743670-1.jpg" alt="" />
                <div className='absolute  right-10 bg-[#004274] text-start text-white p-6 w-[380px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl'>Townhouses </p>
                        <p className=''>$190,000</p>
                    </div>
                    <p className='text-sm my-2'> 456 Tranquil Avenue, Lakeside Heights, Harborview
</p>
                    <p className='text-base '>1500 sq ft</p>
                    <button className='bg-[#00aeff] hover:bg-[#004274] rounded-md px-3 py-1 mt-5'>View Details</button>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img src='https://i.ibb.co/dPYqYfN/Cadence20-Urban20-Trails-Aerial203-2.jpg' alt="" />
                <div className='absolute  right-10 bg-[#004274] text-start text-white p-6 w-[380px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl'>Single-family homes</p>
                        <p className=''>$190,000</p>
                    </div>
                    <p className='text-sm my-2'>789 Rustic Road, Cedar Valley, Brookside</p>
                    <p className='text-base '>1500 sq ft</p>
                    <button className='bg-[#00aeff] hover:bg-[#004274] rounded-md px-3 py-1 mt-5'>View Details</button>
                </div>
            </SwiperSlide>



            <SwiperSlide>
                <img src="https://i.ibb.co/8mQ5NQZ/873be99172324ddabf775d03fc608c09.jpg" alt="" />
                <div className='absolute  right-10 bg-[#004274] text-start text-white p-6 w-[380px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl'>Student
                            housing</p>
                        <p className=''>$190,000</p>
                    </div>
                    <p className='text-sm my-2'> 1010 Sycamore Street, Maplewood, Riverbend</p>
                    <p className='text-base '>1500 sq ft</p>
                    <button className='bg-[#00aeff] hover:bg-[#004274] rounded-md px-3 py-1 mt-5'>View Details</button>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img src="https://i.ibb.co/s5FQGbZ/Senior-Living-Communities.jpg" alt="" />
                <div className='absolute  right-10 bg-[#004274] text-start text-white p-6 w-[380px]'>
                    <div className='flex justify-between'>
                        <p className='font-bold text-xl'> senior living communities</p>
                        <p className=''>$190,000</p>
                    </div>
                    <p className='text-sm my-2'> 1222 Twilight Boulevard, Hillcrest Hills, Summitview</p>
                    <p className='text-base '>1500 sq ft</p>
                    <button className='bg-[#00aeff] hover:bg-[#004274] rounded-md px-3 py-1 mt-5'>View Details</button>
                </div>
            </SwiperSlide>


        </Swiper>
    );
};

export default Banner;