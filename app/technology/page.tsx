import Header from "@/components/Header";
import Main from "@/components/Main";
import MainNav from "@/components/MainNav";
import Technology from "@/components/Technology";

export default function Destination() {
  return (
    <div className="wrapper wrapper--technology">
      <Header>
        <MainNav />
      </Header>
      <Main>
        <Technology />
      </Main>
    </div>
  );
}
