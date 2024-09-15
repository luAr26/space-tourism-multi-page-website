export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="h-[calc(100vh-96.19px)]">{children}</main>;
}
