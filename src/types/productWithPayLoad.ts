import { Prisma } from "@prisma/client"

export type productWithPayLoad=Prisma.ProductGetPayload<{
    include:{
        sizes:true,
        extras:true
    }
}>

export type categoryWithPayLoad=Prisma.CategoryGetPayload<{
  
            include:{
                products:{
                    include:{
                        sizes:true;
                        extras:true;
                    }
                }
            }    
}>
