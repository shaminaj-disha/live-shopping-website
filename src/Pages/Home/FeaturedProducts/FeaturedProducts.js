import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./FeaturedProduct.css";
import { ShoppingBagIcon } from '@heroicons/react/outline'
import { Autoplay, EffectCoverflow, Navigation } from "swiper";

// SwiperCore.use([EffectCoverflow, Navigation]);

const FeaturedProducts = () => {
    return (
        <div className='container-cover-box'>
            <div className="container-box px-8 mx-auto">
                <div className="flex py-8 justify-center">
                    <div>
                        <ShoppingBagIcon className='w-24 h-24 text-white'></ShoppingBagIcon>
                    </div>
                    <div className="lg:mt-5 lg:pl-5">
                        <h3 className='text-5xl text-white'>Featured Products</h3>
                    </div>
                </div>
                <div data-aos="zoom-in">
                    <Swiper
                        navigation={true}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, EffectCoverflow, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images.unsplash.com/photo-1535683577427-740aaac4ec25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;