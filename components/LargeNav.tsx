import MenuItem from "@/components/MenuItem";
import data from "@/data/data.json";
const menuItems = data.menuItems;

const LargeNav = () => {
  return (
    <nav className="large-nav relative ml-500 hidden flex-1 bg-[rgba(255,255,255,0.05)] tablet:block tablet:pr-500 tablet:backdrop-blur-3xl desktop:ml-[0] desktop:flex-initial desktop:pl-[159px] desktop:pr-800">
      <ul className="flex w-full justify-end space-x-600">
        {menuItems.map(({ name, link }, index) => (
          <MenuItem key={index} link={link}>
            <span className="font-bold">{`0${index} `}</span>{" "}
            <span>{name}</span>
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
};

export default LargeNav;
