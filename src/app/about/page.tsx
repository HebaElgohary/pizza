import React from "react";
import { Pizza, Heart, Star } from "lucide-react"; // Lucide icons
import MainHeading from "@/components/MainHeading/index";
import { getChefs } from "@/server/db/chef";
import { Chef } from "@prisma/client";
export default async function About() {
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


  const chefs: Chef[] = await getChefs();

  return (
    <div className="container !mx-auto !px-4 !py-16  ">
      <div className="container !mb-11 shadow-lg rounded-2xl !p-10 !max-w-3xl !mx-auto border border-red-200">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* First block */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold flex items-center gap-2 text-red-600">
              <Pizza className="w-6 h-6" /> Our Philosophy
            </h3>
            <p className="text-gray-700 leading-relaxed">
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
            <p className="text-gray-700 leading-relaxed">
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
            <p className="text-gray-700 leading-relaxed">
              From classic Margheritas to bold flavor combinations, each pizza
              is crafted with passion and premium ingredients for an
              unforgettable experience.
            </p>
          </div>
        </div>
      </div>

      {/* Cards section */}
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 !p-5 ">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-red-100 rounded-2xl shadow-lg !p-8 
                       flex flex-col items-center text-center 
                       hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="!mb-4 transform transition-transform hover:rotate-6">
              {item.icon}
            </div>
            <h3 className="text-2xl font-extrabold !mb-2 text-red-600 tracking-wide">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Meet Our Chefs section */}
      <div className="!mt-20 text-center">
        <h2 className="text-3xl font-extrabold text-red-600 !mb-10">
          Meet Our Chefs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition !p-6 flex flex-col items-center"
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="w-35 h-35 rounded-full object-cover !mb-4 border-4 border-red-200"
              />
              <h3 className="text-xl font-bold text-red-600">{chef.name}</h3>
              <p className="text-sm text-gray-500 !mb-2">{chef.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {chef.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* About paragraph card */}
    </div>
  );
}
