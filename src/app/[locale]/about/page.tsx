
'use client '
// import React from "react";
// import { Pizza, Heart, Star } from "lucide-react"; // Lucide icons
// import MainHeading from "@/components/MainHeading/index";
// import { getChefs } from "@/server/db/chef";
// import { Chef } from "@prisma/client";
// export default async function About() {
//   const features = [
//     {
//       icon: <Pizza className="w-10 h-10 text-red-500" />,
//       title: "Finest Ingredients",
//       text: "We hand-pick fresh, local produce and premium toppings for every pizza we make.",
//     },
//     {
//       icon: <Heart className="w-10 h-10 text-red-500" />,
//       title: "Passion in Every Slice",
//       text: "Crafted with care, each pizza tells a story of flavor, tradition, and love.",
//     },
//     {
//       icon: <Star className="w-10 h-10 text-red-500" />,
//       title: "Unforgettable Experience",
//       text: "From our oven to your table, we aim to make every bite memorable.",
//     },
//   ];


//   const chefs: Chef[] = await getChefs();

//   return (
//     <div className="container !!mx-auto !!px-4 !!py-16  ">
//       <div className="container !!mb-11 shadow-lg rounded-2xl !!!p-10 !max-w-3xl !!mx-auto border border-red-200">
//         <div className="grid md:grid-cols-2 gap-8 items-start">
//           {/* First block */}
//           <div className="!!space--y-3">
//             <h3 className="text-xl font-bold flex items-center gap-2 text-red-600">
//               <Pizza className="w-6 h-6" /> Our Philosophy
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               Welcome to our pizzeria, where every slice is a masterpiece. We
//               blend tradition with innovation to bring you pizzas that are both
//               familiar and exciting.
//             </p>
//           </div>

//           {/* Second block */}
//           <div className="!!space--y-3">
//             <h3 className="text-xl font-bold flex items-center gap-2 text-red-600">
//               <Heart className="w-6 h-6" /> Why You’ll Love Us
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               Whether you’re grabbing a quick bite or enjoying a long dinner
//               with friends, our cozy atmosphere and friendly service make every
//               visit special.
//             </p>
//           </div>

//           {/* Third block - full width */}
//           <div className="!!space--y-3 md:col-span-2">
//             <h3 className="text-xl font-bold flex items-center gap-2 text-red-600">
//               <Star className="w-6 h-6" /> A Slice Above
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               From classic Margheritas to bold flavor combinations, each pizza
//               is crafted with passion and premium ingredients for an
//               unforgettable experience.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Cards section */}
//       <div className="container grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 !!!p-5 ">
//         {features.map((item, index) => (
//           <div
//             key={index}
//             className="bg-gradient-to-br from-white to-red-100 rounded-2xl shadow-lg !!!p-8 
//                        flex flex-col items-center text-center 
//                        hover:scale-105 hover:shadow-2xl transition-transform duration-300"
//           >
//             <div className="!!mb-4 transform transition-transform hover:rotate-6">
//               {item.icon}
//             </div>
//             <h3 className="text-2xl font-extrabold !!mb-2 text-red-600 tracking-wide">
//               {item.title}
//             </h3>
//             <p className="text-gray-600 leading-relaxed">{item.text}</p>
//           </div>
//         ))}
//       </div>

//       {/* Meet Our Chefs section */}
//       <div className="!!!mt-20 text-center">
//         <h2 className="text-3xl font-extrabold text-red-600 !!mb-10">
//           Meet Our Chefs
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {chefs.map((chef, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition !!!p-6 flex flex-col items-center"
//             >
//               <img
//                 src={chef.img}
//                 alt={chef.name}
//                 className="w-35 h-35 rounded-full object-cover !!mb-4 border-4 border-red-200"
//               />
//               <h3 className="text-xl font-bold text-red-600">{chef.name}</h3>
//               <p className="text-sm text-gray-500 !!mb-2">{chef.role}</p>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {chef.bio}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* About paragraph card */}
//     </div>
//   );
// }


// app/about/page.tsx  (or wherever your About page lives)
// "use client"; // keep client if you need client interactions; remove if this is server-only




// app/about/page.tsx  (or your About page location)
import React from "react";
import Image from "next/image";
import { Pizza, Heart, Star } from "lucide-react";
import { getChefs } from "@/server/db/chef";
import { Chef } from "@prisma/client";
import Link from "next/link";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { getDictionary } from "../dictionaries";

export default async function AboutContent() {
  const locale=await getCurrentLocale()
  const {about}= await getDictionary(locale);
  const features = [
    {
      icon: <Pizza className="w-6 h-6" />,
      title: "Finest Ingredients",
      text: "We source the best seasonal produce and artisan cheeses — every pie starts with quality.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion in Every Slice",
      text: "Our chefs combine time-honored craft with a modern touch to create memorable flavors.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Comfort & Care",
      text: "A friendly atmosphere, consistent quality, and attention to detail in every order.",
    },
  ];

  const chefs: Chef[] = await getChefs();

  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="container !mx-auto !px-6 !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="!space-y-6">
            <p className="inline-block text-sm font-medium text-primary/90 bg-primary/10 !px-3 !py-1 rounded-full border border-primary/20">
             {about.h3}
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
             {about.h1} <span className="text-primary">{about.h2}</span>
            </h1>

            <p className="text-gray-600 !max-w-prose">
          {about.p}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-primary text-white !px-5 !py-3 rounded-md shadow hover:shadow-md transition"
              >
               {about.btn1}
              </Link>

              <a
                href="#chefs"
                className="inline-flex items-center gap-2 border border-gray-200 !px-5 !py-3 rounded-md text-gray-700 hover:bg-gray-50 transition"
              >
               {about.btn2}
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full !max-w-md bg-gradient-to-b from-white to-primary/5 rounded-xl shadow-sm overflow-hidden">
              <Image
                src="/images/OIP (3).png"
                alt="Delicious pizza"
                width={700}
                height={520}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container !mx-auto !px-6 !py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 !p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary inline-flex items-center justify-center !mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 !mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="container !mx-auto !px-6 !py-12">
        <div className="rounded-2xl bg-gradient-to-r from-primary/19  to-white border border-gray-100 !p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 !mb-3">Our Mission</h2>
              <p className="text-gray-600 !max-w-prose">
                To create approachable, delicious food that brings people together.
                We craft each dish with thoughtfulness — balancing taste, texture,
                and a warm dining experience.
              </p>

              <ul className="!mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 ">
                <li className="flex items-start gap-3">
                  <span className="!mt-1 inline-flex items-center justify-center w-8 h-8 rounded bg-primary/10 text-primary">✓</span>
                  <div>
                    <p className="text-md font-medium text-gray-800 font-semibold">Locally sourced</p>
                    <p className="text-xs text-gray-500">Support local producers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="!mt-1 inline-flex items-center justify-center w-8 h-8 rounded bg-primary/10 text-primary">✓</span>
                  <div>
                    <p className="text-md font-medium text-gray-800 font-semibold">Crafted daily</p>
                    <p className="text-xs text-gray-500">Fresh dough & sauces</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full h-50 md:w-100 rounded-lg overflow-hidden shadow-inner border border-gray-100">
                <Image
                  src="/images/OIP (1).webp"
                  alt="kitchen"
                  width={420}
                  height={420}
                  className="object-contain w-full h-full scale-[140%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHEFS */}
      <section id="chefs" className="container !mx-auto !px-6 !py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center !mb-10">Meet the team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefs.map((chef) => (
            <article
              key={chef.id}
              className="flex flex-col items-start gap-4 bg-white rounded-xl !p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="w-full flex items-center gap-4">
                <div className="w-30 h-30 lg:w-50 lg:h-50 rounded-full overflow-hidden border border-gray-100 shadow-sm">
                  <Image
                    src={chef.img || "/images/chef-placeholder.jpg"}
                    alt={chef.name}
                    width={140}
                    height={140}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm lg:text-lg font-semibold text-gray-900">{chef.name}</h3>
                  <p className="text-xs lg:text-sm text-gray-500">{chef.role}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">{chef.bio}</p>

              <div className="!mt-auto w-full flex items-center justify-between">
                <div className="flex flex-col lg:flex-row  items-center gap-5">
                  <span className="text-xs text-gray-500">Specialty</span>
                  <span className="rounded-md bg-primary/10 !px-1 !py-1 text-primary text-sm font-medium border border-primary/20">
                    {chef.role || "Chef"}
                  </span>
                </div>

                <a
                  href={`/chefs/${chef.id}`}
                  className="text-xs lg:font-sm font-medium text-primary hover:underline"
                >
                  View profile
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container !mx-auto !px-6 !py-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center !mb-6">What our guests say</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <blockquote className="rounded-xl bg-white !p-6 border border-gray-100 shadow-sm">
            <p className="text-gray-700">Incredible crust and thoughtful toppings — a family favorite.</p>
            <footer className="!mt-4 text-sm text-gray-500">— Nour, regular</footer>
          </blockquote>

          <blockquote className="rounded-xl bg-white !p-6 border border-gray-100 shadow-sm">
            <p className="text-gray-700">Perfect balance of spice and comfort. Fast delivery too.</p>
            <footer className="!mt-4 text-sm text-gray-500">— Karim, food blogger</footer>
          </blockquote>

          <blockquote className="rounded-xl bg-white !p-6 border border-gray-100 shadow-sm">
            <p className="text-gray-700">The place I take visiting friends — everyone loves it.</p>
            <footer className="!mt-4 text-sm text-gray-500">— Salma, regular</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA FOOTER */}
      <footer className="container !mx-auto !px-6 !py-12">
        <div className="rounded-xl border border-gray-100 bg-white !p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Join our table</h4>
            <p className="text-sm text-gray-600">Sign up for seasonal specials and occasional chef pop-ups.</p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/subscribe"
              className="inline-flex items-center !px-4 !py-2 rounded-md bg-primary text-white font-medium hover:opacity-95 transition"
            >
              Subscribe
            </Link>

            <Link
              href="/menu"
              className="inline-flex items-center !px-4 !py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
            >
              Order
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
