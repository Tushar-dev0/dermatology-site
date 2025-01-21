import React from 'react';

const StatisticsSection = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 border-b border-gray-300">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Journey in Numbers</h2>
          <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Committed to healthy, glowing skin with proven expertise and exceptional care.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-7xl">
              <span className=""> 12+ </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">Years of Excellence</p>
            <p className="text-base mt-0.5 text-gray-500">Providing dermatological care</p>
          </div>
          <div>
            <h3 className="font-bold text-7xl">
              <span className=""> 15,000+ </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">Patients Treated</p>
            <p className="text-base mt-0.5 text-gray-500">Transforming lives one skin at a time</p>
          </div>
          <div>
            <h3 className="font-bold text-7xl">
              <span className=""> 25+ </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">Skincare Experts</p>
            <p className="text-base mt-0.5 text-gray-500">Dedicated to your skin health</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
