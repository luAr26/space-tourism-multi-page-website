import Link from "next/link";
import Logo from "@/public/assets/shared/logo.svg";
import HamburgerIcon from "@/public/assets/shared/icon-hamburger.svg";
import LargeNav from "./LargeNav";

const MainNav = () => {
  return (
    <div className="tablet:pr-0 flex items-center justify-between py-300 tablet:py-[0] tablet:pl-500 desktop:pl-800 desktop:pt-500">
      <Link href="/" className="relative">
        <span className="sr-only">Home</span>
        <Logo className="h-600 w-600 text-blue-900" />
      </Link>
      <div className="hidden desktop:ml-800 desktop:block desktop:h-[1px] desktop:w-full desktop:bg-[rgba(255,255,255,0.25)]"></div>
      <LargeNav />
      <button className="inline-flex items-center justify-center tablet:hidden">
        <span className="sr-only">Menu</span>
        <HamburgerIcon className="h-[21px] w-300 text-blue-300" />
      </button>
    </div>
  );
};

export default MainNav;
