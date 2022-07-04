import React from 'react';
import Alibaba from '../../logos/Alibaba.svg'
import Amazon from '../../logos/Amazon.svg'
import Daraz from '../../logos/Daraz.pk Logo.svg'
import Ebay from '../../logos/Ebay.svg'
import Rakuten from '../../logos/Rakuten.svg'
import Walmart from '../../logos/Walmart.svg'
import Target from '../../logos/Target.svg'
// import Swiper from 'swiper';

const Logos = () => {
    // var mySwiper1 = document.querySelector('.h__partners-swiper1').slider;

    // mySwiper1 = new Swiper('.h__partners-swiper1', {
    //     grabCursor: false,
    //     loop: true,
    //     slidesPerView: 'auto',
    //     loop: true,
    //     shortSwipes: false,
    //     longSwipes: false,
    //     allowTouchMove: false,
    //     autoplay: {
    //         delay: 1,
    //     },
    //     freeMode: true,
    //     speed: 5000,
    // });
    return (
        // <div>
        //     <div className="h__partners">
        //         <div className="h__partners-swiper1">
        //             {/* Additional required wrapper */}
        //             <div className="swiper-wrapper">
        //                 {/* Slides */}
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Alibaba} alt="" />
        //                 </div>
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Amazon} alt="" />
        //                 </div>
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Daraz} alt="" />
        //                 </div>
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Ebay} alt="" />
        //                 </div>
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Rakuten} alt="" />
        //                 </div>
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Walmart} alt="" />
        //                 </div>
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Target} alt="" />
        //                 </div>
        //                 {/* <div className="swiper-slide">
        //                     <img className="h__partners-image" src="https://res.cloudinary.com/dmnazxdav/image/upload/v1601665666/weekmd_if4g2w.jpg" alt="" />
        //                 </div> */}
        //             </div>
        //         </div>
        //         <div className="h__partners-swiper2" dir="rtl">
        //             {/* Additional required wrapper */}
        //             <div className="swiper-wrapper">
        //                 {/* Slides */}
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Alibaba} alt="" />
        //                 </div>
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Amazon} alt="" />
        //                 </div>
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Daraz} alt="" />
        //                 </div>
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Ebay} alt="" />
        //                 </div>
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Rakuten} alt="" />
        //                 </div>
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Walmart} alt="" />
        //                 </div>
        //                 <div className="swiper-slide">
        //                     <img className="h__partners-image" src={Target} alt="" />
        //                 </div>
        //                 {/* <div className="swiper-slide">
        //                     <img className="h__partners-image" src="https://res.cloudinary.com/dmnazxdav/image/upload/v1601665666/weekmd_if4g2w.jpg" alt="" />
        //                 </div> */}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <hr className='border-gray-400'></hr>
            {/* <marquee behavior="" direction=""> */}
                <div className="grid grid-cols-4 gap-4 lg:flex lg:justify-between align-center px-4 py-8">
                    <img src={Alibaba} alt="Alibaba Logo" />
                    <img src={Amazon} alt="Amazon Logo" />
                    <img src={Daraz} alt="Daraz Logo" />
                    <img src={Ebay} alt="Ebay Logo" />
                    <img src={Rakuten} alt="Rakuten Logo" />
                    <img src={Walmart} alt="Walmart Logo" />
                    <img src={Target} alt="Target Logo" />
                </div>
            {/* </marquee> */}
            <hr className='border-gray-400'></hr>
        </div>
    );
};

export default Logos;