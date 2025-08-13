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

    const setextra = await db.extra.create({
    data: { name: "ONION", price: 2, productId: "cme8uuijt0002vdw0m4p423cn" },
  });
  const sizes = await db.size.findMany();
  const extras     = await db.extra.findMany();

  console.log("sizes is heeeeeeeere@@@@@@@@@#######%%%%%%%%%%", sizes);
  console.log("EXTRA is heeeeeeeere@@@@@@@@@#######%%%%%%%%%%", extras);



  //   console.log(sizes)

  // const bestSellers=[
  //     {id:crypto.randomUUID(),name:'pizza',description:'this is piazza',basePrice:12,img:'/images/pizza-crust-isolated-white-background-ai-generative_514344-4929.avif'}
  //    , {id:crypto.randomUUID(),name:'pizza',description:'this is piazza',basePrice:16,img:'/images/pizza-market-about.png'}
  //    , {id:crypto.randomUUID(),name:'pizza',description:'this is piazza',basePrice:20,img:'/images/pngtree-delicious-pepperoni-pizza-png-image_13150431.png'}
  //    , {id:crypto.randomUUID(),name:'pizza',description:'this is piazza',basePrice:20,img:'/images/OIP (1).png'}
  //    , {id:crypto.randomUUID(),name:'pizza',description:'this is piazza',basePrice:16,img:'/images/OIP (2).png'}
  //     ,{id:crypto.randomUUID(),name:'pizza',description:'this is piazza',basePrice:12,img:'/images/OIP (3).png'}
  // ]
  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center section-gap ">
        <MainHeading title="Check out " subtitle="Our Best Sellers" />
        <MenueItem items={bestSellers} />
      </div>
    </section>
  );
}
