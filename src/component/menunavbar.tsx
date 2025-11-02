"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menunavbar({name,link}:{name:string,link:string}) {
    const pathname = usePathname();
  return (
    <Link href={link} className={`hover:text-sky-500 duration-100 ${pathname === link ? "text-sky-500" : ""} `} >{name}</Link>
  )
}
// className={`hover:text-sky-500 duration-100 ${pathname === path ? "text-sky-500" : ""} `}