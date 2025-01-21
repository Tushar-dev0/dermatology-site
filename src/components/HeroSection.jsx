import React from 'react';
import { NavLink } from 'react-router-dom';
import heroImg from '../assets/image_4.jpg';

const HeroSection = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider uppercase">
                Dr. Monica Jain Skin, Hair & Laser Clinic
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-4xl xl:text-6xl">
              Glow naturally your partner for radiant skin & hair.
              </h1>
              <p className="mt-4 text-base text-gray-500 lg:mt-8 sm:text-xl">
                Trusted by thousands as a Dermatologist, Cosmetologist, and Laser Expert. 
                Get personalized solutions for all your skin and hair needs.
              </p>
              <NavLink
                to="/book-an-appointment"
                title
                className="inline-flex items-center px-6 py-4 mt-8 text-sm font-semibold text-white transition-all duration-200 bg-black rounded-full lg:mt-16 hover:bg-white hover:border hover:border-black hover:text-black"
                role="button"
              >
                Book Your Appointment Now
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </NavLink>
              <p className="mt-5 text-gray-500">
                Have questions?{' '}
                <NavLink
                  to="/contact-us"
                  title
                  className="text-black transition-all duration-200 hover:underline"
                >
                  Contact Us
                </NavLink>
              </p>
            </div>
            <div>
              <img
                className="w-full h-auto lg:h-[600px] object-contain rounded-full"
                src={heroImg}
                alt="Dr. Monica Jain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection