import MainHeading from "@/components/MainHeading/index";
import MenueItem from "@/components/MenuItem/index";
import { db } from "@/lib/prisma";
import { getBestSellers } from "@/server/db/products";
import {productWithPayLoad} from '@/types/productWithPayLoad'
export async function BestSellers() {

  const bestSellers = await getBestSellers(
  ) as productWithPayLoad[];

  // await db.size.deleteMany()
  //  await db.size.createMany({
  //   data:[ { name: "SMALL", price: 2, productId: "cme8uuijt0002vdw0m4p423cn" },
  //   { name: "MEDUIM", price: 3, productId: "cme8uuijt0002vdw0m4p423cn" },
  //   { name: "LARGE", price: 4, productId: "cme8uuijt0002vdw0m4p423cn" },
  // ]});
  // await db.extra.deleteMany()

  //   await db.extra.createMany({
  //   data: [{ name: "ONION", price: 2, productId: "cme8uuijt0002vdw0m4p423cn" },
  //   { name: "POTATO", price: 2, productId: "cme8uuijt0002vdw0m4p423cn" },
  //   { name: "CHEESE", price: 2, productId: "cme8uuijt0002vdw0m4p423cn" },]
  // });
  // const sizes = await db.size.findMany();
  // const extras     = await db.extra.findMany();

  // console.log("sizes is heeeeeeeere@@@@@@@@@#######%%%%%%%%%%", sizes);
  // console.log("EXTRA is heeeeeeeere@@@@@@@@@#######%%%%%%%%%%", extras);



  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center section-gap ">
        <MainHeading title="Check out " subtitle="Our Best Sellers" />
      
        <MenueItem items={bestSellers} />
      </div>
    </section>
  );
}
