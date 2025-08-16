import { db } from "@/lib/prisma";
import {cache} from '@/lib/cache'
import {productWithPayLoad} from '@/types/productWithPayLoad'


// type functionType=()=>productWithPayLoad[]

export const getBestSellers = cache(async (limit: unknown) => {
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
            limit as number
        

    });
    return bestSellers;

  },
  ['best-sellers']
  ,
  { revalidate:3600 ,});


