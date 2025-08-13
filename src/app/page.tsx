import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PrefetchOnHoverLink } from "@/components/Link";
import {Hero} from '@/app/_components/Hero'
import { BestSellers } from '@/app/_components/BestSellers'
import { db } from "@/lib/prisma";
import { Product } from '../generated/prisma/index';
export default async function Home() {
  return (
 <main className=''>

<Hero/>
<BestSellers/>

</main>
  );
}
