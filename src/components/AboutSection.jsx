import { FaUserDoctor } from 'react-icons/fa6';
import { GiAchievement } from 'react-icons/gi';
import { GraduationCap } from 'lucide-react';
import image4 from '../assets/image_4.jpg';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
    const navigate = useNavigate();
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-24 border-b border-gray-300">
      <div className="max-w-6xl px-6 mx-auto sm:px-8 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl lg:text-6xl">
            Meet Dr. Monica Jain
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Dr. Monica Jain is a board-certified dermatologist and a trusted expert in skin and hair care. 
            Known for her precision and care, she blends modern medical advancements with an empathetic approach 
            to provide personalized treatments for every patient.
          </p>
        </div>

        {/* Icons Section */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex flex-col items-center">
            <FaUserDoctor className="text-5xl text-blue-500" />
            <p className="mt-3 text-lg font-semibold text-gray-700">Dermatology Specialist</p>
          </div>
          <div className="flex flex-col items-center">
            {/* Set explicit size for lucide-react icon */}
            <GraduationCap className="text-purple-500" size={48} />
            <p className="mt-3 text-lg font-semibold text-gray-700">MBBS, MD in Dermatology</p>
          </div>
          <div className="flex flex-col items-center">
            <GiAchievement className="text-5xl text-green-500" />
            <p className="mt-3 text-lg font-semibold text-gray-700">Award-Winning Expert</p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-10 flex flex-col sm:flex-row sm:items-center sm:space-x-12">
          {/* Text Section */}
          <div className="sm:w-2/3 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Why Choose Dr. Monica Jain?
            </h3>
            <p className="text-gray-700">
              With over a decade of experience in dermatology, Dr. Monica has successfully treated thousands of patients. 
              Her expertise includes acne treatments, anti-aging therapies, hair restoration, and advanced cosmetic procedures. 
              She ensures every patient feels heard and cared for, delivering outstanding results tailored to individual needs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-4 h-4 mt-1 mr-3 bg-blue-500 rounded-full"></span>
                <span>State-of-the-art treatments for skin and hair concerns</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-4 h-4 mt-1 mr-3 bg-purple-500 rounded-full"></span>
                <span>Comprehensive cosmetic and medical dermatology</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-4 h-4 mt-1 mr-3 bg-green-500 rounded-full"></span>
                <span>Trusted by patients worldwide for her compassionate care</span>
              </li>
            </ul>
            <button onClick={() => navigate('/book-an-appointment')} className="px-6 py-3 mt-6 text-white bg-black rounded-lg shadow hover:bg-white hover:text-black hover:border hover:border-black">
              Book an Appointment
            </button>
          </div>
          {/* Image Section */}
          <div className="sm:w-1/3 flex justify-center mt-10 sm:mt-0">
            <img
              src={image4}
              alt="Dr. Monica Jain"
              className="w-full max-w-xs sm:max-w-sm rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
