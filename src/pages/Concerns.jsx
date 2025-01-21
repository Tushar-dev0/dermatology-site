import React from "react";

const concernsData = {
  concerns: [
    {
      name: "Acne",
      subtypes: [
        "Teenage Acne",
        "Adult Acne",
        "Post Acne Scars",
        "Post Acne Pigmentation"
      ]
    },
    {
      name: "PCOD",
      subtypes: []
    },
    {
      name: "Texture",
      subtypes: [
        "Open Pores",
        "Scars",
        "Bumps On Forehead",
        "Flakey / Rough Skin"
      ]
    },
    {
      name: "Structure",
      subtypes: [
        "Ideal Facial Structure",
        "Cheekbones",
        "Angle Of Jaw",
        "Jawline",
        "Chin Enhancement"
      ]
    },
    {
      name: "Features",
      subtypes: [
        "Eyes",
        "Nose",
        "Lips"
      ]
    },
    {
      name: "Colour & Tone",
      subtypes: [
        "Pigmentation and Patchy Skin Tone",
        "Tan",
        "Black-Spots",
        "Under-Eye",
        "Dark Circles",
        "Red and Sensitive Skin",
        "Freckles",
        "Rosacea"
      ]
    },
    {
      name: "Other Concerns",
      subtypes: [
        "Facial Hair",
        "Excessive Sweating - Remedies & Prevention"
      ]
    }
  ]
};

const Concerns = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {concernsData.concerns.map((concern, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{concern.name}</h3>
          <ul className="list-disc pl-6">
            {concern.subtypes.length > 0 ? (
              concern.subtypes.map((subtype, idx) => (
                <li key={idx} className="text-gray-600">{subtype}</li>
              ))
            ) : (
              <li className="text-gray-600">No subtypes available</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Concerns;
