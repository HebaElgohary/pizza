import { db } from "@/lib/prisma";
import {cache} from '@/lib/cache'
import {categoryWithPayLoad, productWithPayLoad} from '@/types/productWithPayLoad'



export const getBestSellers = cache<(...args: unknown[])=>Promise<productWithPayLoad[]>>
    (async (...args: unknown[])  => {
    const limit = args[0] as number;
    const bestSellers = await db.product.findMany({
        include: {
            sizes: true,
            extras: true
        },
        where:{
            orders:{
                some:{}
            }
        },
        orderBy:{
           orders:{
            _count:'desc'
           } ,
        },
        take:
            limit
        

    });
    return bestSellers;

  },
  ['best-sellers']
  ,
  { revalidate:3600 ,});


export  const  getProductsByCategories= cache<() => Promise<categoryWithPayLoad[]>>
( 
   async ()=>{

    const products=db.category.findMany(
        {
            include:{
                products:{
                    include:{
                        sizes:true,
                        extras:true
                    }
                }
            }

            
        }
    )
return products
    

}

,['products-by-categories']
,{revalidate:3600}
)