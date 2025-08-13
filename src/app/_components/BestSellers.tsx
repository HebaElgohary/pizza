import MainHeading from "@/components/MainHeading/index";
import MenueItem from "@/components/MenuItem/index";
// import { BestSellers } from '@/app/_components/BestSellers';
import { db } from "@/lib/prisma";
export async function BestSellers() {
  const bestSellers = await db.product.findMany(
    {
        include:{sizes:true,
            extras:true
        }
    }
  );
  await db.size.deleteMany()
  const setsizes = await db.size.createMany({
    data:[ { name: "SMALL", price: 2, productId: "cme8uuijt0002vdw0m4p423cn" },
    { name: "MEDUIM", price: 3, productId: "cme8uuijt0002vdw0m4p423cn" },
    { name: "LARGE", price: 4, productId: "cme8uuijt0002vdw0m4p423cn" },
  ]});
  await db.extra.deleteMany()

    const setextra = await db.extra.createMany({
    data: [{ name: "ONION", price: 2, productId: "cme8uuijt0002vdw0m4p423cn" },
    { name: "POTATO", price: 2, productId: "cme8uuijt0002vdw0m4p423cn" },
    { name: "CHEESE", price: 2, productId: "cme8uuijt0002vdw0m4p423cn" },]
  });
  const sizes = await db.size.findMany();
  const extras     = await db.extra.findMany();

  console.log("sizes is heeeeeeeere@@@@@@@@@#######%%%%%%%%%%", sizes);
  console.log("EXTRA is heeeeeeeere@@@@@@@@@#######%%%%%%%%%%", extras);

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center section-gap ">
        <MainHeading title="Check out " subtitle="Our Best Sellers" />
        <MenueItem items={bestSellers} />
      </div>
    </section>
  );
}
