import React from "react";
import { Pizza, Heart, Star } from "lucide-react"; // Lucide icons
import MainHeading from "@/components/MainHeading/index";

export default function About() {
  const features = [
    {
      icon: <Pizza className="w-10 h-10 text-red-500" />,
      title: "Finest Ingredients",
      text: "We hand-pick fresh, local produce and premium toppings for every pizza we make.",
    },
    {
      icon: <Heart className="w-10 h-10 text-red-500" />,
      title: "Passion in Every Slice",
      text: "Crafted with care, each pizza tells a story of flavor, tradition, and love.",
    },
    {
      icon: <Star className="w-10 h-10 text-red-500" />,
      title: "Unforgettable Experience",
      text: "From our oven to your table, we aim to make every bite memorable.",
    },
  ];

  return (
    <div className="container !mx-auto !px-4 !py-16">
      {/* Heading */}
      <div className="text-center !mb-12">
        {/* <p className="!mt-3 text-lg text-gray-500 !max-w-2xl !mx-auto !my-5">
          Discover our passion for pizza and our commitment to quality.
        </p> */}
      </div>

      {/* Cards section */}
      <div className="container grid gap-8 md:grid-cols-3 !p-5">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg !p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 !min-h-[20vh]"
          >
            <div className="!mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold !mb-2">{item.title}</h3>
            <p className="text-gray-500">{item.text}</p>
          </div>
        ))}
      </div>

      {/* About paragraph card */}
      <div className="container !mt-16 bg-gradient-to-r from-red-50 to-white shadow-lg rounded-2xl !p-10 !max-w-3xl !mx-auto border border-red-200">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* First block */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2 text-red-600">
              <Pizza className="w-6 h-6" /> Our Philosophy
            </h3>
            <p className="text-gray-700 leading-relaxed container">
              Welcome to our pizzeria, where every slice is a masterpiece. We
              blend tradition with innovation to bring you pizzas that are both
              familiar and exciting.
            </p>
          </div>

          {/* Second block */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2 text-red-600">
              <Heart className="w-6 h-6" /> Why You’ll Love Us
            </h3>
            <p className="text-gray-700 leading-relaxed container">
              Whether you’re grabbing a quick bite or enjoying a long dinner
              with friends, our cozy atmosphere and friendly service make every
              visit special.
            </p>
          </div>

          {/* Third block - full width */}
          <div className="space-y-3 md:col-span-2">
            <h3 className="text-xl font-bold flex items-center gap-2 text-red-600">
              <Star className="w-6 h-6" /> A Slice Above
            </h3>
            <p className="text-gray-700 leading-relaxed container">
              From classic Margheritas to bold flavor combinations, each pizza
              is crafted with passion and premium ingredients for an
              unforgettable experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
