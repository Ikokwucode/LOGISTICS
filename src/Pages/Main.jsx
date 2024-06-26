// import { Outlet } from "react-router-dom";
// import Authentication from "../Auth/Authentication";

import Home from "../Pages/Home";
import About from "../Components/About";
import Pricing from "../Components/Pricing";
import Services from "../Components/Services";
import How from "../Components/How";
import Contact from "../Components/Contact";

function Main() {
  return (
    <main>
      <Home />
      <About />
      <Services />
      <Pricing />
      <How />
      <Contact />
    </main>
  );
}

export default Main;
