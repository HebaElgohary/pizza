import { Prisma } from "@prisma/client"

export type productWithPayLoad=Prisma.ProductGetPayload<{
    include:{
        sizes:true,
        extras:true
    }
}>