import React from "react";
import { Mail, Phone, MapPin, Facebook, Linkedin, Github } from "lucide-react"; // icons
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { getDictionary } from "../../dictionaries";

export default async function Contact() {
  const locale = await getCurrentLocale();
  const { contact } = await getDictionary(locale);
  return (
    <main className="container !py-16 !mx-auto !px-11">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-primary !mb-4">
        {contact.title}
      </h1>
      <p className="text-center text-lg text-gray-500 !max-w-2xl !mx-auto !mb-12 leading-relaxed">
        {contact.description}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl shadow-md !p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-primary !mb-4">
            {contact.getTouch}
          </h2>
          <div className="flex items-center gap-4">
            <Phone className="text-primary w-6 h-6" />
            <span className="text-lg text-gray-700">{contact.phone}</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-primary w-6 h-6" />
            <span className="text-lg text-gray-700">{contact.mail}</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-primary w-6 h-6" />
            <span className="text-lg text-gray-700">{contact.address}</span>
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
            {contact.formTitle}
          </h2>
          <input
            type="text"
            placeholder={contact.name}
            className="border rounded-xl !p-4 focus:ring-2 focus:ring-primary outline-none"
          />
          <input
            type="email"
            placeholder={contact.mail}
            className="border rounded-xl !p-4 focus:ring-2 focus:ring-primary outline-none"
          />
          <textarea
            placeholder={contact.msg}
            rows={5}
            className="border rounded-xl !p-4 focus:ring-2 focus:ring-primary outline-none"
          />
          <button className="bg-primary text-white !py-4 rounded-xl font-medium hover:bg-primary/90 transition">
            {contact.btn}
          </button>
        </form>
      </div>
    </main>
  );
}
