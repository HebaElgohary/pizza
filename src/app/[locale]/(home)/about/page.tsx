import React from "react";
import Image from "next/image";
import { Pizza, Heart, Star, MoveRight, MoveLeft } from "lucide-react";
import { getChefs } from "@/server/db/chef";
import { Chef } from "@prisma/client";
import Link from "next/link";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { getDictionary } from "../../dictionaries";
import { Languages } from "@/constants/enums";
import PublicLayout from "@/components/layouts/PublicLayout";
import { About } from "./About";

export default async function AboutContent() {


  return (
    <PublicLayout>
 <About/>
    </PublicLayout>
  );
}
