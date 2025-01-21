import React from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Darrell Steward",
      username: "@darrels",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg",
      feedback: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
      hashtag: "#another",
    },
    {
      id: 2,
      name: "Leslie Alexander",
      username: "@lesslie",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg",
      feedback: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
      hashtag: "#Celebration",
    },
    {
      id: 3,
      name: "Jenny Wilson",
      username: "@jennywilson",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg",
      feedback: "This is a top quality product. No need to think twice before making it live on web.",
      hashtag: "#make_it_fast",
    },
    {
      id: 4,
      name: "Cody Fisher",
      username: "@codyfish",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg",
      feedback: "Absolutely wonderful! It's worth much more than I paid. I would recommend this to anyone.",
      hashtag: "#wonderful",
    },
  ];

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">What our clients say</h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
          Radiant Words: Real Stories from Our Clients.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
          {reviews.map((review) => (
            <div key={review.id} className="overflow-hidden bg-white rounded-lg">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src={review.image}
                    alt={review.name}
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">{review.name}</p>
                  </div>
                                  </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    {review.feedback}
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
