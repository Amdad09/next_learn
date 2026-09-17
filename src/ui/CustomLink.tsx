'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
interface CustomLinkProps{
    children: ReactNode;
    path: string;
}
const CustomLink = ({ children, path }: CustomLinkProps) => {
    const route = usePathname();
    const isSeleted = route === path;
  return <Link className={isSeleted ?'text-blue-600':''} href={path}>{children}</Link>;
};

export default CustomLink;