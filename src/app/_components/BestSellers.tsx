import MainHeading from "@/components/MainHeading/index";
import MenueItem from "@/components/MenuItem/index";
import { db } from "@/lib/prisma";
import { getBestSellers } from "@/server/db/products";
import {productWithPayLoad} from '@/types/productWithPayLoad'
export async function BestSellers() {


  const bestSellers = await getBestSellers(3) ;

  return (
    <section className="flex flex-col ">
      <div className="flex flex-col items-center section-gap  ">
        <MainHeading title="Check out" subtitle="Our Best Sellers" />
      
        <MenueItem items={bestSellers} />
      </div>
    </section>
  );
}
