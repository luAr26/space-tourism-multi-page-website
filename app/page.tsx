/** @format */

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import MainNav from "@/components/MainNav";

export default function Home() {
  return (
    <div className="wrapper wrapper--home">
      <Header>
        <MainNav />
      </Header>
      <Main>
        <Hero />
      </Main>
    </div>
  );
}
