import React from "react";
import { NavLink } from "react-router-dom";
import img2 from '../assets/image_3.jpg';

const Section2 = () => {
  return (
    <div className="bg-white">
      <section className="bg-opacity-30 py-10 lg:py-10">
        <div className="px-4 lg:mx-auto max-w-7xl sm:px-6 lg:px-8 text-white bg-gray-800 rounded-3xl p-5 mx-3">
          <div className="grid items-center justify-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider uppercase">
                Book your medical appointment today
              </p>
              <h2 className="mt-4 text-xl font-bold text-white sm:text-2xl xl:text-3xl">
              When your skin is clear and your hair vibrant, it’s easy to overlook their care—until a small change reminds you.
              </h2>
              <div className="flex gap-2 mt-5 md:mt-8 lg:mt-12 flex-col sm:flex-row">
                <NavLink
                  to="/book-an-appointment"
                  className="inline-flex items-center px-6 justify-center py-4 text-sm font-semibold text-black transition-all duration-200 bg-white rounded-full hover:bg-black hover:text-white"
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
                <NavLink
                  to="/about"
                  className="inline-flex items-center px-6 justify-center py-4 text-sm font-semibold border border-white transition-all duration-200 rounded-full"
                  role="button"
                >
                  About Us
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
                      d="M12 8v4m0 4h.01M21 12c0 4.971-4.029 9-9 9s-9-4.029-9-9 4.029-9 9-9 9.029 9 9 9z"
                    />
                  </svg>
                </NavLink>
              </div>
            </div>
            <div className="flex items-center justify-center lg:h-[600px]">
              <img
                className="w-full max-h-full object-contain rounded-3xl"
                src={img2}
                alt="Medical Appointment"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
