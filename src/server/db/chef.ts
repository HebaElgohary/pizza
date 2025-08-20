import {cache} from '@/lib/cache'
import { db } from "@/lib/prisma";
import { Chef } from '@prisma/client';

type getChefsType = ()=>Promise<Chef[]>

export const getChefs:getChefsType=async()=>{

    const chefs = await db.chef.findMany()

return chefs
}