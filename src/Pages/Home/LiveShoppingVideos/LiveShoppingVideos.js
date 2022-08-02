import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

const LiveShoppingVideos = () => {
  return (
    <div className="container mx-auto mt-12 lg:mt-32 lg:py-12">
      <h3 className="text-2xl lg:text-4xl font-bold">
        Get Idea About Live Shopping
      </h3>
      <div data-aos="zoom-in">
        <Swiper
          navigation={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          spaceBetween={30}
          grabCursor={true}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/icmOkFVe4SA"
              allowfullscreen="allowFullScreen"
              frameborder="0"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/MLsOPVxY4y0"
              allowfullscreen="allowFullScreen"
              frameborder="0"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/ia7006AzOUY"
              allowfullscreen="allowFullScreen"
              frameborder="0"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/2w0g42XkSEQ"
              allowfullscreen="allowFullScreen"
              frameborder="0"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/IaX6fXbVC94"
              allowfullscreen="allowFullScreen"
              frameborder="0"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/mZ0kWgmjQ6A"
              allowfullscreen="allowFullScreen"
              frameborder="0"
            ></iframe>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LiveShoppingVideos;
