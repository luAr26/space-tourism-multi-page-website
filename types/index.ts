export type destinationsData = {
  name: string;
  description: string;
  imgUrl: string;
}[];

export type setActiveTab = (index: number) => void;

export type MenuItemProps = {
  children: React.ReactNode;
  link: string;
};

export type MobileNavProps = {
  setIsMenuOpen: (x: boolean) => void;
};
