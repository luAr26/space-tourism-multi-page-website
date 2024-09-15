import Link from "next/link";
import { MenuItemProps } from "@/types/index";

export default function MenuItem({ children, link }: Readonly<MenuItemProps>) {
  return (
    <li>
      <Link href={link} className="mobile-menu-item">
        {children}
      </Link>
    </li>
  );
}
