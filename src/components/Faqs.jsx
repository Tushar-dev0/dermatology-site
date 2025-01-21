import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: "Where does Dr. Monica Jain practice?",
    answer:
      "Dr. Monica Jain practices at Dr. Monica Jain Skin Hair And Nail Clinic - Kondhwa.",
  },
  {
    question: "What is Dr. Monica Jain's education qualification?",
    answer:
      "Dr. Monica Jain has the following qualifications - MD - Skin & VD, MBBS.",
  },
  {
    question: "What does Dr. Monica Jain specialise in?",
    answer:
      "Dr. Monica Jain specialises as Cosmetologist, Pediatric Dermatologist, Dermatologist.",
  },
  {
    question: "How many years of experience does Dr. Monica Jain have?",
    answer:
      "Dr. Monica Jain has an overall experience of 12 years. View where has Dr. Monica Jain practiced in the past.",
  },
  {
    question: "Who is Dr. Monica Jain?",
    answer:
      "Dr. Monica Jain is a Cosmetologist, Pediatric Dermatologist and Dermatologist in Kondhwa, Pune and has an experience of 12 years in these fields. Dr. Monica Jain practices at Dr. Monica Jain Skin Hair And Nail Clinic in Kondhwa, Pune. She completed MD - Skin & VD from SCB Medical College, Cuttack in 2019 and MBBS from Ayush and Health Science University, Chhattisgarh in 2013. View more details about the doctor on Practo.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full xl:py-28 lg:py-20 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:mb-16 mb-10">
          <h6 className="text-lg text-black font-medium text-center mb-2 leading-7">
            FAQs
          </h6>
          <h2 className="lg:text-4xl text-3xl font-manrope text-center font-bold text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="accordion-group w-full max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`accordion p-6 border-b border-solid ${
                activeIndex === index
                  ? "bg-gray-50 border-transparent"
                  : "border-gray-200"
              } transition-all duration-500 active:rounded-xl`}
            >
              <button
                className="accordion-toggle text-xs group inline-flex items-center justify-between text-gray-900 font-medium leading-7 w-full transition duration-500 text-left lg:text-lg hover:text-gray-900"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h5 className="flex-1">{item.question}</h5>
                <FaChevronUp
                  className={`transition-transform duration-500 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-${index}`}
                className={`accordion-content w-full px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-xs text-gray-600 leading-6">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
