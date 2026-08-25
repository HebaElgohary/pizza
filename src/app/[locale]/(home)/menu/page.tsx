import React from "react";
import { getProductsByCategories } from "@/server/db/products";
import { categoryWithPayLoad } from "../../../../types/productWithPayLoad";
import Image from "next/image";
import MenuButton from "@/components/MenuButton/index";
import { formatCurrency } from "@/lib/formatters";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

export default async function Menu() {
  const categories: categoryWithPayLoad[] = await getProductsByCategories();
  const locale = await getCurrentLocale();

  return (
    <main className="min-h-screen bg-[#fffaf7]">
      {/* ================= HERO ================= */}
      <section className="container !mx-auto !px-4 !pt-12 !pb-8 md:!pt-16">
        <div className="!mx-auto !max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 !px-4 !py-2 text-sm font-semibold text-primary">
            🍕 Freshly Made For You
          </span>

          <h1 className="!mt-5 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Explore Our <span className="text-primary">Menu</span>
          </h1>

          <p className="!mx-auto !mt-5 !max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            From classic favorites to modern creations, discover delicious
            pizzas made with fresh ingredients and baked to perfection.
          </p>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="container mx-auto !px-4 !pb-20">
        {categories.map((category, categoryIndex) => (
          <section
            key={category.id}
            className={`${categoryIndex !== 0 ? "!mt-20" : ""}`}
          >
            {/* Category Heading */}
            <div className="!mb-8 flex gap-4 items-center justify-between">
              <div className="flex items-center !space-x-4">
                <div className="h-15 w-1.5 rounded-full bg-primary !mx-3" />

                <div>
                  <h2 className="text-2xl  font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    {category.name}
                  </h2>

                  <p className="!mt-1 text-sm text-gray-500">
                    Delicious choices for every craving
                  </p>
                </div>
              </div>

              <div className="hidden items-center !space-x-2 rounded-full bg-white !px-4 !py-2 text-sm text-gray-400 shadow-sm sm:flex">
                <span>{category.products.length}</span>
                <span>items</span>
              </div>
            </div>

            {/* Category Divider */}
            <div className="!mb-8 h-px w-full bg-gray-200" />

            {/* ================= PRODUCTS ================= */}
            <ul className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.products.map((product) => (
                <li key={product.id}>
                  <article
                    className="
                      group
                      relative
                      flex
                      h-full
                      flex-col
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-gray-100
                      bg-white
                      shadow-[0_8px_30px_rgb(0,0,0,0.06)]
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-[0_20px_40px_rgb(0,0,0,0.10)]
                    "
                  >
                    {/* ================= IMAGE ================= */}
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={product.img || "/images/OIP (2).png"}
                        alt={product.name}
                        fill
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-110
                        "
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

                      {/* Price Badge */}
                      <div className="absolute bottom-4 left-4 rounded-full bg-white !px-4 !py-2 shadow-lg">
                        <span className="text-sm font-extrabold text-primary">
                          {formatCurrency(product.basePrice)}
                        </span>
                      </div>

                      {/* Favorite */}
                      <button
                        aria-label={`Favorite ${product.name}`}
                        className="
                          absolute
                          right-4
                          top-4
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-white/90
                          text-gray-400
                          shadow-md
                          backdrop-blur-sm
                          transition-all
                          hover:scale-110
                          hover:text-primary
                        "
                      >
                        ♡
                      </button>
                    </div>

                    {/* ================= CONTENT ================= */}
                    <div className="flex flex-1 flex-col !p-5">
                      <div className="flex items-start justify-between !space-x-3">
                        <h3 className="text-lg font-bold leading-6 text-gray-900 transition-colors group-hover:text-primary">
                          {product.name}
                        </h3>
                      </div>

                      <p className="!mt-3 line-clamp-2 min-h-[42px] text-sm leading-6 text-gray-500">
                        {product.description}
                      </p>

                      {/* Bottom */}
                      <div className="!mt-5">
                        <MenuButton item={product} />
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </main>
  );
}
