import MainHeading from "@/components/MainHeading/index";
import MenueItem from "@/components/MenuItem/index";
import { getBestSellers } from "@/server/db/products";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { getDictionary } from "../dictionaries";
export async function BestSellers() {
  const locale = await getCurrentLocale();
  const { bestSellers } = await getDictionary(locale);

  const BestSellers = await getBestSellers(3);

  return (
    <section className="flex flex-col ">
      <div className="flex flex-col items-center section-gap  ">
        <MainHeading
          title={bestSellers.title}
          subtitle={bestSellers.decription}
        />

        <MenueItem items={BestSellers} />
      </div>
    </section>
  );
}
