"use client";
import Link from "next/link";
import { MenuItemProps } from "@/types/index";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export default function MenuItem({ children, link }: Readonly<MenuItemProps>) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={link}
        className={clsx("menu-item", link === pathname && "menu-item--active")}
      >
        {children}
      </Link>
    </li>
  );
}
