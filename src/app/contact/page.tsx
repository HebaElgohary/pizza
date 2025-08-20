import React from "react";
import { Mail, Phone, MapPin, Facebook, Linkedin, Github } from "lucide-react"; // icons

export default function Contact() {
  return (
    <main className="container !py-16 !mx-auto !px-11">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-primary !mb-4">
        Contact Us
      </h1>
      <p className="text-center text-gray-500 !max-w-2xl !mx-auto !mb-12 leading-relaxed">
        We&apos;d love to hear from you! Have a question, feedback, or a business
        inquiry? Drop us a line and we’ll get back to you shortly.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl shadow-md !p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-primary !mb-4">
            Get in Touch
          </h2>
          <div className="flex items-center gap-4">
            <Phone className="text-primary w-6 h-6" />
            <span className="text-lg text-gray-700">01012121212</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-primary w-6 h-6" />
            <span className="text-lg text-gray-700">hello@example.com</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-primary w-6 h-6" />
            <span className="text-lg text-gray-700">Cairo, Egypt</span>
          </div>

          {/* Social Media */}
          <div className="flex gap-6 !mt-6">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-primary hover:text-white transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-primary hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-primary hover:text-white transition"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-xl rounded-2xl !p-8 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-gray-800 !mb-2">
            Send Us a Message
          </h2>
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-xl !p-4 focus:ring-2 focus:ring-primary outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-xl !p-4 focus:ring-2 focus:ring-primary outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border rounded-xl !p-4 focus:ring-2 focus:ring-primary outline-none"
          />
          <button className="bg-primary text-white !py-4 rounded-xl font-medium hover:bg-primary/90 transition">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
