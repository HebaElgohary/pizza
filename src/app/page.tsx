import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PrefetchOnHoverLink } from "@/components/Link";
import { Hero } from "@/app/_components/Hero";
import { BestSellers } from "@/app/_components/BestSellers";
import { db } from "@/lib/prisma";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import MainHeading from "@/components/MainHeading";
export default async function Home() {
  return (
    <main className="">
      <Hero />
      <BestSellers />
      <div className="text-center ">
        <MainHeading title="Our Story" subtitle="About Us" />
        <About />
      </div>

      <Contact />
    </main>
  );
}
