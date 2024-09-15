export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="main h-[calc(100vh-96.19px)] desktop:h-[calc(100vh-136.19px)]">
      {children}
    </main>
  );
}
