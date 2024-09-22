"use client";
import Link from "next/link";
import { MenuItemProps } from "@/types/index";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

export default function MenuItem({ children, link }: Readonly<MenuItemProps>) {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={link}
        className={clsx(
          "mobile-menu-item",
          pathName === link && "mobile-menu-item--active",
        )}
      >
        {children}
      </Link>
    </li>
  );
}
