import React from "react";
import { Mail, Phone, MapPin,Facebook ,Linkedin,Github} from "lucide-react"; // icons

export default function Contact() {
  return (
    <main className="container !min-h-[76vh] !py-10">
      <h1 className="text-4xl font-bold text-center text-primary !mb-6">
        Contact Us
      </h1>
      <p className="text-center text-gray-500 !max-w-xl !mx-auto !mb-12">
        We&apos;d love to hear from you! Whether you have a question, feedback, or a
        business inquiry, feel free to reach out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Phone className="text-primary" />
            <span className="text-lg">01012121212</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-primary" />
            <span className="text-lg">hello@example.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-primary" />
            <span className="text-lg">Cairo, Egypt</span>
          </div>

          {/* Social Media */}
          <div className="flex gap-5 !mt-4 ">
            <a href="#" className="hover:text-primary transition  ">Facebook <Facebook color="red" /></a>
            <a href="#" className="hover:text-primary transition">Linked In <Linkedin  color="red"/></a>
            <a href="#" className="hover:text-primary transition">Github <Github color="red"  /></a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl !p-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg !p-3 focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-lg !p-3 focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border rounded-lg !p-3 focus:ring-2 focus:ring-primary"
          />
          <button className="bg-primary text-white !py-3 rounded-lg hover:bg-primary/90 transition">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
