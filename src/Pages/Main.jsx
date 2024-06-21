// import { Outlet } from "react-router-dom";
// import Authentication from "../Auth/Authentication";

import Home from "../Pages/Home";
import About from "../Components/About";
import Pricing from "../Components/Pricing";
import Services from "../Components/Services";
import How from "../Components/How";

function Main() {
  return (
    <main>
      <Home />
      <About />
      <Pricing />
      <Services />
      <How />
    </main>
  );
}

export default Main;
