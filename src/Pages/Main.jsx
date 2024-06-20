import { Outlet } from "react-router-dom";
// import Authentication from "../Auth/Authentication";
import Header from "../Components/Header";

function Main() {
  return (
    <main>
      <Header />
      <div className="outletDiv h-[90vh] w-[100vw]">
        <Outlet />
      </div>
    </main>
  );
}

export default Main;
