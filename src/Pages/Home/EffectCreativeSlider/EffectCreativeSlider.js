import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/effect-creative";

// import custom styles;
import "./EffectCreative.css";

// import required modules
import { EffectCreative, Pagination, Navigation, Scrollbar } from "swiper";

const EffectCreativeSlider = () => {
    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-bold">What Our Clients Say</h3>
            <Swiper
                navigation={true}
                slidesPerView={window.innerWidth < 768 ? 1 : 2}
                centeredSlides={true}
                grabCursor={true}
                effect={"creative"}
                scrollbar={true}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                modules={[EffectCreative, Pagination, Navigation, Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {/* <div className="title" data-swiper-parallax="-300">
                        Slide 1
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div> */}
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default EffectCreativeSlider;