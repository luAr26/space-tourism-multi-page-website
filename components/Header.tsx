export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <header className="px-300 tablet:px-[0]">{children}</header>;
}
