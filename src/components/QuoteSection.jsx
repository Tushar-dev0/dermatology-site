import React from "react";

const QuoteSection = () => {
  return (
    <section id="banner-one" className="banner-one rounded-3xl mx-3 text-center max-w-7xl lg:w-full lg:mx-auto">
      <div className="container text-white">
        <blockquote className="lead lg:px-5 text-lg  md:text-2xl lg:text-4xl text-center w-full mx-auto text-gray-300">
          <i className="fas fa-quote-left"></i> When you are young and healthy, it
          never occurs to you that in a single second your whole life could
          change. <i className="fas fa-quote-right"></i>
        </blockquote>
        <small className="text text-sm text-gray-300">- Anonim Nano</small>
      </div>
    </section>
  );
};

export default QuoteSection;
