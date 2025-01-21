import React from "react";

const testimonials = [
  {
    name: "John Doe",
    rating: 4.5,
    description: "Great service! Highly recommended. The team was very professional and efficient."
  },
  {
    name: "Jane Smith",
    rating: 5,
    description: "Absolutely amazing experience! They exceeded my expectations in every way."
  },
  {
    name: "Alice Johnson",
    rating: 3.5,
    description: "Good experience overall but there were some delays in the process."
  },
  {
    name: "Mark Williams",
    rating: 4,
    description: "Very satisfied with the outcome. Will definitely return for more projects."
  },
  {
    name: "Sarah Brown",
    rating: 4.8,
    description: "Exceptional quality and support. Highly impressed with their dedication."
  },
  {
    name: "Michael Green",
    rating: 4.2,
    description: "Great value for money. Professional and courteous team."
  }
];

const TestimonialSection = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex">
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <span key={`full-${index}`} className="text-yellow-400">★</span>
          ))}
        {halfStar && <span className="text-yellow-400">★</span>}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <span key={`empty-${index}`} className="text-gray-300">★</span>
          ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{testimonial.name}</h3>
            {renderStars(testimonial.rating)}
            <p className="mt-3 text-gray-600">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
