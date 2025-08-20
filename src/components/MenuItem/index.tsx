import Image from "next/image";
import { formatCurrency } from "@/lib/formatters";
import MenuButton from "@/components/MenuButton/index";
import { productWithPayLoad } from "@/types/productWithPayLoad";

export default function ProductGrid({ items }: { items: productWithPayLoad[] }) {
  return (
    <div className="container !my-8 w-full">
      {items && items.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          {items.map((product) => (
              <li key={product.id}>
     <div className="group bg-red-50 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-xl ">
       <div className="relative w-full h-48">
         <Image 
           src={product.img}  
           alt={product.name} 
           fill
           className="object-cover group-hover:scale-110 transition-transform"
         />
       </div>
       <div className="!p-4 flex flex-col gap-2">
         <div className="flex justify-between items-center">
           <h4 className="text-lg font-semibold">{product.name}</h4>
           <span className="text-primary font-bold">{formatCurrency(product.basePrice)}</span>
         </div>
         <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
         <div className="!mt-3 flex justify-center">
           <MenuButton item={product} />
         </div>
       </div>
     </div>
   </li>
          ))}
        </ul>
      ) : (
        <div className="text-2xl !mt-11 text-center text-red-500 animate-pulse">
          No Products Found 😑
        </div>
      )}
    </div>
  );
}
