import React from "react";
import Image from "next/image";
import { Pizza, Heart, Star, MoveRight, MoveLeft } from "lucide-react";
import { getChefs } from "@/server/db/chef";
import { Chef } from "@prisma/client";
import Link from "next/link";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { getDictionary } from "../../dictionaries";
import { Languages } from "@/constants/enums";

export default async function AboutContent() {
  const  locale  = await getCurrentLocale();
  const { about } = await getDictionary(locale);

  const featureIcons = [Pizza, Heart, Star];

  const chefs: Chef[] = await getChefs();

  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
     <section className="relative container overflow-hidden bg-gradient-to-br from-white via-primary/5 to-orange-50">
  <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
  <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-orange-200/20 blur-3xl" />

  <div className="container mx-auto !px-6 !py-20 lg:!py-28 relative">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Text */}
      <div className="!space-y-5">

        <span className="inline-flex items-center gap-2 rounded-full
          bg-primary/10 border border-primary/20
          !px-4 !py-2 text-xs font-semibold text-primary">
          <Pizza className="w-4 h-4" />
          {about.h3}
        </span>

        <h1 className="text-3xl sm:text-2xl lg:text-4xl
          font-extrabold tracking-tight leading-[1.05]
          text-gray-900">
          {about.h1}
          <span className="block text-primary !mt-2">
            {about.h2}
          </span>
        </h1>

        <p className="max-w-xl text-md leading-8 text-gray-600">
          {about.p}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">

          <Link
            href="/menu"
            className="group inline-flex items-center gap-3
              rounded-xl bg-primary !px-6 !py-3.5
              text-white font-semibold shadow-lg
              shadow-primary/20
              hover:-translate-y-0.5
              hover:shadow-xl
              transition-all"
          >
            {about.btn1}

            <span className="flex h-7 w-7 items-center justify-center
              rounded-full border border-white/50
              group-hover:translate-x-1 transition-transform">
              {locale === Languages.ARABIC
                ? <MoveLeft className="w-4 h-4" />
                : <MoveRight className="w-4 h-4" />
              }
            </span>
          </Link>

          <a
            href="#chefs"
            className="inline-flex items-center
              rounded-xl border border-gray-300
              bg-white !px-6 !py-3.5
              font-semibold text-gray-700
              hover:bg-gray-50
              transition"
          >
            {about.btn2}
          </a>

        </div>
      </div>

      {/* Image */}
      <div className="relative flex justify-center w-full  lg:w-3/4 !mx-auto  lg:justify-end">

        <div className="absolute w-60 h-60
          rounded-full bg-primary/10 blur-2xl" />

        <div className="relative w-full max-w-lg">

          <div className="absolute -top-5 -right-5
            w-22 h-22 rounded-full
            border-8 border-primary/10" />

          <div className="overflow-hidden rounded-[2rem]
            shadow-2xl shadow-gray-300/40
            transition-transform duration-500">

            <Image
              src="/images/OIP (2).png"
              alt="Delicious pizza"
              width={400}
              height={400}
              priority
              className="w-full h-[420px] object-cover"
            />

          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6
            flex items-center gap-3
            rounded-2xl bg-white
            !px-5 !py-4 shadow-xl">

            <div className="flex h-11 w-11 items-center justify-center
              rounded-full bg-primary/10 text-primary">
              <Star className="w-5 h-5 fill-current" />
            </div>

            <div>
              <p className="font-bold text-gray-900">
                4.9/5
              </p>
              <p className="text-xs text-gray-500">
                Customer rating
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* FEATURES */}
      <section className="container !mx-auto !px-6 !py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {about.features.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 !p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary inline-flex items-center justify-center !mb-4">
                {React.createElement(featureIcons[i], { className: "w-6 h-6" })}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 !mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="container !mx-auto !px-6 !py-12">
        <div className="rounded-2xl bg-gradient-to-r from-primary/19  to-primary/10 border border-gray-100 !p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold text-gray-900 !mb-3">
                {about.mission.title}
              </h2>
              <p className="text-gray-600 text-lg !max-w-prose">
                {about.mission.p}
              </p>

              <ul className="!mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 ">
                <li className="flex items-start gap-3">
                  <span className="!mt-1 inline-flex items-center justify-center w-8 h-8 rounded bg-primary/10 text-primary">
                    ✓
                  </span>
                  <div>
                    <p className="text-md font-medium text-gray-800 font-semibold">
                      {about.mission.point1}
                    </p>
                    <p className="text-sm text-gray-500">
                      {about.mission.subtitle1}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="!mt-1 inline-flex items-center justify-center w-8 h-8 rounded bg-primary/10 text-primary">
                    ✓
                  </span>
                  <div>
                    <p className="text-md font-medium text-gray-800 font-semibold">
                      {about.mission.point2}
                    </p>
                    <p className="text-sm text-gray-500">
                      {about.mission.subtitle2}
                    </p>
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
        <h2 className="text-3xl font-bold text-gray-900 text-center !mb-10">
          {about.chefs.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefs.map((chef) => (
            <article
              key={chef.id}
              className="flex flex-col items-start gap-4 bg-white rounded-xl !p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="w-full flex flex-col lg:flex-row items-center gap-4 container">
                <div className="w-40 h-40 lg:w-30 lg:h-30 rounded-full overflow-hidden border border-gray-100 shadow-sm">
                  <Image
                    src={chef.img || "/images/chef-placeholder.jpg"}
                    alt={chef.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm lg:text-lg font-semibold text-gray-900">
                    {chef.name}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-500">
                    {chef.role}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {chef.bio}
              </p>

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
      <section className="container !mx-auto !px-6 !py-16">
        <h3 className="text-3xl font-extrabold text-gray-900 text-center !mb-10">
          {about.testmonials.title}
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {about.testmonials.say.map((s) => (
            <blockquote
              key={s.id}
              className="bg-gradient-to-br from-orange-100 to-primary/19 border-none text-gray-800 !p-8 rounded-3xl shadow-md"
            >
              <span className="absolute -top-4 left-4 text-6xl text-gray-200 leading-none">
                “
              </span>

              {/* Star rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.293c.3.92-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0L6.675 16.28c-.784.57-1.838-.197-1.539-1.118l1.07-3.293a1 1 0 00-.364-1.118L3.04 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.01-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{s.p}</p>

              <footer className="mt-5 pt-4 border-t border-gray-100 text-sm font-medium text-gray-600">
                {s.footer}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA FOOTER */}
      <footer className="container !mx-auto !px-6 !py-12">
        <div className="rounded-xl border border-gray-100 bg-white !p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              {about.cta.title}
            </h4>
            <p className="text-sm text-gray-600">{about.cta.p}</p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/subscribe"
              className="inline-flex items-center !px-4 !py-2 rounded-md bg-primary text-white font-medium hover:opacity-95 transition"
            >
              {about.cta.btn1}
            </Link>

            <Link
              href="/menu"
              className="inline-flex items-center !px-4 !py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
            >
              {about.cta.btn2}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
