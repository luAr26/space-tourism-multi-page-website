import { MobileNavProps } from "@/types";

import IconClose from "@/public/assets/shared/icon-close.svg";
import data from "@/data/data.json";
import MobileMenuItem from "./MobileMenuItem";

const menuItems = data.menuItems;

const MobileNav = ({ setIsMenuOpen }: MobileNavProps) => {
  return (
    <div className="fixed right-[0] top-[0] z-10 h-screen w-[254px] bg-[rgba(11,13,23,0.15)] pl-400 pt-[133px] backdrop-blur-lg tablet:hidden">
      <IconClose
        className="absolute right-[26.45px] top-[32.95px] h-[21px] w-[20px] cursor-pointer"
        onClick={() => setIsMenuOpen(false)}
      />
      <nav>
        <ul className="flex flex-col space-y-400">
          {menuItems.map(({ name, link }, index) => (
            <MobileMenuItem key={index} link={link}>
              <span className="font-bold">{`0${index} `}</span>{" "}
              <span>{name}</span>
            </MobileMenuItem>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
