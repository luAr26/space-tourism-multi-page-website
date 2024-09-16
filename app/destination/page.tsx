import Destinations from "@/components/Destinations";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MainNav from "@/components/MainNav";

export default function Destination() {
  return (
    <div className="wrapper wrapper--destination">
      <Header>
        <MainNav />
      </Header>
      <Main>
        <Destinations />
      </Main>
    </div>
  );
}
