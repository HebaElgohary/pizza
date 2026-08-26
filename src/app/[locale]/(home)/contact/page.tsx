import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Github,
  Clock3,
  ArrowRight,
} from "lucide-react";

import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { getDictionary } from "../../dictionaries";

export default async function Contact() {
  const locale = await getCurrentLocale();
  const { contact } = await getDictionary(locale);

  return (
    <main className="relative !min-h-screen overflow-hidden bg-gradient-to-br from-primary/5 via-white to-orange-50/70">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 !h-72 !w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 !h-80 !w-80 rounded-full bg-orange-200/30 blur-3xl" />

      <section className="container relative !mx-auto !px-4 !py-16 sm:!px-6 lg:!px-8">
        {/* ================= HERO ================= */}
        <div className="!mx-auto !mb-14 !max-w-3xl text-center">
          <div className="!mx-auto !mb-5 flex !w-fit items-center gap-2 rounded-full border border-primary/10 bg-primary/5 !px-4 !py-2 text-sm font-semibold text-primary">
            <span className="!h-2 !w-2 rounded-full bg-primary" />
            <span>Pizza Nova</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {contact.title}
          </h1>

          <div className="!mx-auto !mt-5 !h-1 !w-16 rounded-full bg-primary" />

          <p className="!mx-auto !mt-6 !max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            {contact.description}
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="!mx-auto grid !max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ================= CONTACT INFO ================= */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-orange-500 !p-8 text-white shadow-2xl sm:!p-10">
            {/* Decorative shapes */}
            <div className="absolute -right-20 -top-20 !h-56 !w-56 rounded-full bg-white/10" />

            <div className="absolute -bottom-24 -left-20 !h-64 !w-64 rounded-full bg-white/10" />

            <div className="relative z-10">
              <div className="!mb-8">
                <div className="flex !h-12 !w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                  <Mail className="!h-6 !w-6" />
                </div>

                <h2 className="!mt-5 text-3xl font-black">
                  {contact.getTouch}
                </h2>

                <p className="!mt-3 !max-w-sm leading-7 text-white/75">
                  We would love to hear from you. Reach out to us anytime.
                </p>
              </div>

              {/* Contact items */}
              <div className="!space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${contact.phone}`}
                  className="group flex items-center gap-4 rounded-2xl bg-white/10 !p-4 backdrop-blur-sm transition hover:bg-white/20"
                >
                  <div className="flex !h-12 !w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Phone className="!h-5 !w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-white/60">
                      Phone
                    </p>

                    <p className="!mt-1 font-semibold">
                      {contact.phone}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contact.mail}`}
                  className="group flex items-center gap-4 rounded-2xl bg-white/10 !p-4 backdrop-blur-sm transition hover:bg-white/20"
                >
                  <div className="flex !h-12 !w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Mail className="!h-5 !w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-white/60">
                      Email
                    </p>

                    <p className="!mt-1 font-semibold">
                      {contact.mail}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl bg-white/10 !p-4 backdrop-blur-sm">
                  <div className="flex !h-12 !w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <MapPin className="!h-5 !w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-white/60">
                      Location
                    </p>

                    <p className="!mt-1 font-semibold">
                      {contact.address}
                    </p>
                  </div>
                </div>

                {/* Opening hours */}
                <div className="flex items-center gap-4 rounded-2xl bg-white/10 !p-4 backdrop-blur-sm">
                  <div className="flex !h-12 !w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Clock3 className="!h-5 !w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-white/60">
                      Opening Hours
                    </p>

                    <p className="!mt-1 font-semibold">
                      10:00 AM - 12:00 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="!mt-10 border-t border-white/15 !pt-7">
                <p className="!mb-4 text-sm font-medium text-white/70">
                  Follow us
                </p>

                <div className="flex gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex !h-10 !w-10 items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-white hover:text-primary"
                  >
                    <Facebook className="!h-5 !w-5" />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex !h-10 !w-10 items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-white hover:text-primary"
                  >
                    <Linkedin className="!h-5 !w-5" />
                  </a>

                  <a
                    href="#"
                    aria-label="Github"
                    className="flex !h-10 !w-10 items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-white hover:text-primary"
                  >
                    <Github className="!h-5 !w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="rounded-3xl border border-gray-100 bg-white !p-6 shadow-xl sm:!p-8 lg:!p-10">
            <div className="!mb-8">
              <div className="flex !h-12 !w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Mail className="!h-6 !w-6" />
              </div>

              <h2 className="!mt-5 text-3xl font-black tracking-tight text-gray-900">
                {contact.formTitle}
              </h2>

              <p className="!mt-2 text-sm leading-6 text-gray-500">
                Have a question or suggestion? Send us a message and we will
                get back to you soon.
              </p>
            </div>

            <form className="!space-y-5">
              {/* Name */}
              <div className="!space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-700"
                >
                  {contact.name}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={contact.name}
                  className="!h-12 !w-full rounded-xl border border-gray-200 bg-gray-50 !px-4 outline-none transition placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                />
              </div>

              {/* Email */}
              <div className="!space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700"
                >
                  {contact.email}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={contact.email}
                  className="!h-12 !w-full rounded-xl border border-gray-200 bg-gray-50 !px-4 outline-none transition placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                />
              </div>

              {/* Message */}
              <div className="!space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-700"
                >
                  {contact.msg}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder={contact.msg}
                  className="!w-full resize-none rounded-xl border border-gray-200 bg-gray-50 !px-4 !py-3 outline-none transition placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex !h-13 !w-full items-center justify-center gap-2 rounded-xl bg-primary !px-6 font-bold text-white shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
              >
                <span>{contact.btn}</span>

                <ArrowRight className="!h-5 !w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </button>

              <p className="text-center text-xs text-gray-400">
                We usually respond within 24 hours.
              </p>
            </form>
          </div>
        </div>

        {/* ================= BOTTOM FEATURES ================= */}
        <div className="!mx-auto !mt-10 grid !max-w-6xl gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-white !p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="!mx-auto flex !h-10 !w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="text-lg font-bold">01</span>
            </div>

            <h3 className="!mt-3 font-bold text-gray-900">
              Fresh ingredients
            </h3>

            <p className="!mt-1 text-sm text-gray-500">
              Quality in every bite
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white !p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="!mx-auto flex !h-10 !w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="text-lg font-bold">02</span>
            </div>

            <h3 className="!mt-3 font-bold text-gray-900">
              Fast delivery
            </h3>

            <p className="!mt-1 text-sm text-gray-500">
              Hot pizza at your door
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white !p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="!mx-auto flex !h-10 !w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="text-lg font-bold">03</span>
            </div>

            <h3 className="!mt-3 font-bold text-gray-900">
              Made with care
            </h3>

            <p className="!mt-1 text-sm text-gray-500">
              Crafted for pizza lovers
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}