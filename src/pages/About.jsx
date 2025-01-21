import React, { useState } from "react";
import Faqs from "../components/Faqs";
import image_3 from "../assets/image_3.jpg";
import image_4 from "../assets/image_4.jpg";

const About = () => {
  return (
    <div>
      <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Transforming Lives with Expert Care
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Specialized in Skin, Hair, and Cosmetic Solutions for Radiant
            Confidency.
          </p>
        </div>
      </section>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src={image_4}
                alt="About Us tailwind page"
                className="max-lg:mx-auto object-cover"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us{" "}
                </h2>
                <p className="font-normal text-lg text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Welcome to our clinic, where science meets artistry to bring
                  out the best in your skin and hair. Located in Kondhwa, Pune,
                  we are proud to offer advanced dermatology and cosmetology
                  services tailored to your unique needs. Under the expert
                  guidance of a seasoned cosmetologist and dermatologist, we are
                  committed to providing personalized treatments, empowering you
                  to look and feel your absolute best. Whether you seek
                  solutions for specific skin or hair concerns or want to
                  enhance your natural beauty, you are in trusted hands at our
                  clinic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img
                  src={image_3}
                  alt="About Us tailwind page"
                  className="block lg:hidden mb-9 mx-auto object-cover"
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-5 max-lg:text-center">
                  Expert Care Since 2005
                </h2>
                <p className="font-normal text-lg text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  For over two decades, we have been at the forefront of
                  dermatology and cosmetology, delivering exceptional skin and
                  hair care solutions. Combining cutting-edge technology with a
                  personalized approach, we craft treatments that cater to your
                  unique needs. From revitalizing your skin to restoring your
                  hair’s natural health, we take pride in helping you achieve
                  your beauty goals with confidence and trust.
                </p>
              </div>
            </div>
            <div className="img-box ">
              <img
                src={image_3}
                alt="About Us tailwind page"
                className="hidden lg:block object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our results in numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="font-manrope text-2xl font-bold text-black">
                <div className="flex gap-5">100%</div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-medium mb-2">
                    Customer Statisfaction
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="font-manrope text-2xl font-bold text-black">
                <div className="flex gap-5">100%</div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-medium mb-2">
                    Customer Statisfaction
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="font-manrope text-2xl font-bold text-black">
                <div className="flex gap-5">100%</div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-medium mb-2">
                    Customer Statisfaction
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faqs />
    </div>
  );
};

export default About;
