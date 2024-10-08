import CrewMembers from "@/components/CrewMembers";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MainNav from "@/components/MainNav";

export default function Destination() {
  return (
    <div className="wrapper wrapper--crew">
      <Header>
        <MainNav />
      </Header>
      <Main>
        <CrewMembers />
      </Main>
    </div>
  );
}
