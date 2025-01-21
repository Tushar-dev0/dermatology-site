import React from 'react';
import hydrated from '../assets/hydrated.png'
import woman from '../assets/woman.png'
import skin from '../assets/skin.png'

const FeaturedSection = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Your Skin, Our Priority
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Expert dermatological care to rejuvenate your skin and enhance your natural beauty. Our treatments are tailored to meet your unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
          <div className="transition-all duration-200 bg-white rounded-2xl">
            <div className="py-10 px-9">
            <img src={hydrated} alt="" className='w-20 h-20 mx-auto'/> 
              <h3 className="mt-8 text-lg font-semibold text-black">Customized Acne Solutions</h3>
              <p className="mt-4 text-base text-gray-600">
                Comprehensive acne treatment plans designed to target root causes and promote clear, healthy skin.
              </p>
            </div>
          </div>
          <div className="transition-all duration-200 bg-white rounded-2xl">
            <div className="py-10 px-9">
             <img src={woman} alt="" className='w-20 h-20 mx-auto'/> 
              <h3 className="mt-8 text-lg font-semibold text-black">Advanced Anti-Aging Treatments</h3>
              <p className="mt-4 text-base text-gray-600">
                Reverse the signs of aging with state-of-the-art procedures for youthful, radiant skin.
              </p>
            </div>
          </div>
          <div className="transition-all duration-200 bg-white rounded-2xl">
            <div className="py-10 px-9">
            <img src={skin} alt="" className='w-20 h-20 mx-auto'/> 
              <h3 className="mt-8 text-lg font-semibold text-black">Effective Hair Restoration</h3>
              <p className="mt-4 text-base text-gray-600">
                Proven treatments to combat hair loss and promote healthy, natural hair growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
