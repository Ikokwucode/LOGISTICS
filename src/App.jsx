import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
import Contact from "./Components/Contact";
import How from "./Components/How";
import Pricing from "./Components/Pricing";
import About from "./Components/About";
import Authentication from "./Auth/Authentication";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how" element={<How />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/authentication" element={<Authentication />}>
            <Route path="/authentication/login" element={<Login />} />
            <Route path="/authentication/signup" element={<SignUp />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
