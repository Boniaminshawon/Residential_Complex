import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './testimonial.css'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
    return (
        <div className="text-center lg:my-20  my-8 md:my-[70px] bg-white">
            <h2 className="font-primary text-[26px] md:text-4xl font-bold">Testimonials </h2>

            <p className="text-lg lg:px-32 md:mt-6 mt-4 md:px-20 px-5 mb-10  font-primary">Discover why clients across various industries, from marketing to finance, are raving about DreamHome Realty Solutions. From the Marketing Manager to the Sales Director, professionals commend our personalized service, expertise, and dedication. Join the ranks of satisfied clients who found their dream homes with us!</p>

            <div className=''>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={35}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >


                    <SwiperSlide> <div className='bg-[#edf9ff] p-8 text-xl shadow-xl lg:h-[432px] font-medium text-black font-primary'>

                        <p> <FaQuoteLeft></FaQuoteLeft> Five stars all the way! The team at this real estate company went above and beyond to meet my needs and exceed my expectations. Their communication was top-notch, keeping me informed throughout the entire process. I couldn't be happier with the outcome. <span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base mt-5 '>
                            <div className="w-[25%]">
                                <img className=' rounded-full' src="https://i.ibb.co/kH6x2d9/images-2.jpg" />
                            </div>
                            <div className='text-start w-[80%'>
                                <p>by <span className='font-primary font-semibold text-xl'>Emily Johnson</span></p>
                                <i> Senior Accountant at TechSavvy Solutions</i>
                            </div>
                        </div>

                    </div></SwiperSlide>

                    <SwiperSlide> <div className='bg-[#edf9ff] p-8 text-xl shadow-xl lg:h-[432px] font-medium text-black font-primary'>

                        <p> <FaQuoteLeft></FaQuoteLeft>Exceptional service from a truly exceptional company! Their expertise and guidance made the home-buying process smooth and stress-free. I felt like they genuinely cared about finding the right home for me, and their commitment to customer satisfaction is unmatched. <span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base mt-5 '>
                            <div className="w-[25%]">
                                <img className=' rounded-full' src="https://i.ibb.co/thMsR5F/download-3.jpg" />
                            </div>
                            <div className='text-start w-[80%'>
                                <p>by <span className='font-primary font-semibold text-xl'>Michael Thompson</span></p>
                                <i>  Operations Director at Global Logistics Group</i>
                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide> <div className='bg-[#edf9ff] p-8 text-xl shadow-xl lg:h-[432px] font-medium text-black font-primary'>

                        <p> <FaQuoteLeft></FaQuoteLeft>I'm incredibly grateful for the outstanding service provided by this real estate company. They listened to my preferences and worked tirelessly to find properties that matched exactly what I was looking for. Thanks to their expertise, I'm now happily settled into my new home. <span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base mt-5 '>
                            <div className="w-[18%]">
                                <img className=' rounded-full' src="https://i.ibb.co/1vW7R9k/download-4.jpg" />
                            </div>
                            <div className='text-start w-[80%]'>
                                <p>by <span className='font-primary font-semibold text-xl'>Sarah Davis </span></p>
                                <i> HR Manager at Summit Enterprises</i>
                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide> <div className='bg-[#edf9ff] p-8 text-xl shadow-xl lg:h-[432px] font-medium text-black font-primary'>

                        <p> <FaQuoteLeft></FaQuoteLeft> I can't recommend this real estate company enough! From start to finish, they were with me every step of the way, ensuring I found the perfect home for me and my family. Their knowledge of the market and negotiation skills helped me secure a fantastic deal<span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base mt-5 '>
                            <div className="w-[25%]">
                                <img className=' rounded-full' src="https://i.ibb.co/9Vsn20X/download-5.jpg" />
                            </div>
                            <div className='text-start w-[80%'>
                                <p>by <span className='font-primary font-semibold text-xl'>David Martinez</span></p>
                                <i> Software Engineer at CodeCraft Technologies</i>
                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide> <div className='bg-[#edf9ff] p-8 text-xl shadow-xl lg:h-[432px] font-medium text-black font-primary'>

                        <p> <FaQuoteLeft></FaQuoteLeft>Highly recommend this real estate company to anyone in the market for a new home! Their agents are knowledgeable, professional, and incredibly supportive. They patiently answered all my questions and provided valuable insights that helped me make informed decisions.<span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base mt-5 '>
                            <div className="w-[20%]">
                                <img className=' rounded-full' src="https://i.ibb.co/mXCWh59/download-6.jpg" />
                            </div>
                            <div className='text-start w-[80%]'>
                                <p>by <span className='font-primary font-semibold text-xl'>Jennifer Lee</span></p>
                                <i>Creative Director at Artisan Studios</i>
                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#edf9ff] p-8  text-xl shadow-xl lg:h-[432px] font-medium text-black font-primary'>

                            <p> <FaQuoteLeft></FaQuoteLeft> Absolutely thrilled with the professionalism and dedication of this real estate company! They made the daunting task of finding my dream home feel like a breeze. Their attention to detail and personalized service truly set them apart <span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                            <div className=' flex gap-4 text-base mt-5 '>
                                <div className="w-[20%]">
                                    <img className=' rounded-full' src="https://i.ibb.co/Jpg2fN5/images-1.jpg" />
                                </div>
                                <div className='text-start w-[80%]'>
                                    <p>by <span className='font-primary font-semibold text-xl'>John Smith</span></p>
                                    <i> Manager at Bright Ideas Inc</i>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className='bg-[#edf9ff] p-8 shadow-xl lg:h-[432px] text-xl font-medium text-black font-primary'>

                        <p> <FaQuoteLeft></FaQuoteLeft>A first-class experience from beginning to end! This real estate company truly cares about their clients and goes above and beyond to deliver results. Their dedication and attention to detail are unmatched, and I wouldn't hesitate to enlist their services again in the future<span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base mt-5 '>
                            <div className="w-[20%]">
                                <img className=' rounded-full' src="https://i.ibb.co/vmZQtSQ/images-3.jpg" />
                            </div>
                            <div className='text-start w-[80%]'>
                                <p>by <span className='font-primary font-semibold text-xl'>Robert White </span></p>
                                <i> Financial Analyst at Capital Investments Ltd</i>
                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide> <div className='bg-[#edf9ff] p-8 text-xl shadow-xl lg:h-[432px] font-medium text-black font-primary'>

                        <p> <FaQuoteLeft></FaQuoteLeft> I couldn't be more impressed with the level of service provided by this real estate company. They made the home-buying process easy and enjoyable, guiding me through every step with patience and expertise. I'm grateful for their commitment to finding me the perfect home<span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base mt-5 '>
                            <div className="w-[20%]">
                                <img className=' rounded-full' src="https://i.ibb.co/1d62G6v/images-4.jpg" />
                            </div>
                            <div className='text-start w-[80%]'>
                                <p>by <span className='font-primary font-semibold text-xl'>Jessica Brown</span></p>
                                <i>  Product Manager at InnovateTech Inc</i>
                            </div>
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide> <div className='bg-[#edf9ff] p-8 text-xl shadow-xl lg:h-[432px] font-medium text-black font-primary'>

                        <p> <FaQuoteLeft></FaQuoteLeft> Absolutely phenomenal experience working with this real estate company! Their team is not only highly skilled and professional but also genuinely passionate about helping clients find their dream homes. I appreciated their honesty, integrity, and unwavering support throughout the entire process.<span className='flex justify-end'> <FaQuoteRight></FaQuoteRight> </span></p>
                        <div className=' flex gap-4 text-base mt-5 '>
                            <div className="w-[20%]">
                                <img className=' rounded-full' src="https://i.ibb.co/5L37Srq/images-5.jpg" />
                            </div>
                            <div className='text-start w-[80%]'>
                                <p>by <span className='font-primary font-semibold text-xl'>Daniel Wilson</span></p>
                                <i> Sales Director at Apex Solutions International</i>
                            </div>
                        </div>

                    </div></SwiperSlide>


                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;