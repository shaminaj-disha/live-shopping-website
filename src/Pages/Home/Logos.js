import React from 'react';
import Alibaba from '../../logos/Alibaba.svg'
import Amazon from '../../logos/Amazon.svg'
import Daraz from '../../logos/Daraz.pk Logo.svg'
import Ebay from '../../logos/Ebay.svg'
import Rakuten from '../../logos/Rakuten.svg'
import Walmart from '../../logos/Walmart.svg'
import Target from '../../logos/Target.svg'

const Logos = () => {

    return (
        <div>
            <hr className='border-gray-400'></hr>
                <div data-aos="zoom-in" className="grid grid-cols-4 gap-4 lg:flex lg:justify-between align-center px-4 py-8">
                    <img src={Alibaba} alt="Alibaba Logo" />
                    <img src={Amazon} alt="Amazon Logo" />
                    <img src={Daraz} alt="Daraz Logo" />
                    <img src={Ebay} alt="Ebay Logo" />
                    <img src={Rakuten} alt="Rakuten Logo" />
                    <img src={Walmart} alt="Walmart Logo" />
                    <img src={Target} alt="Target Logo" />
                </div>
            <hr className='border-gray-400'></hr>
        </div>
    );
};

export default Logos;