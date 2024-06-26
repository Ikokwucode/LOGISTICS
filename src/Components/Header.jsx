import { useState } from "react";
import Logo from "/Images/logo.png";
import { NavLink, Link } from "react-router-dom";

import ScrollspyNav from "react-scrollspy-nav";

function Header() {
  const [signup, setSignup] = useState(true);
  const [login, setLogin] = useState(false);

  const [auth, setAuth] = useState(false);

  const HandleSignUp = () => {
    setSignup(true);
    setLogin(false);
  };

  const HandleLogin = () => {
    setSignup(false);
    setLogin(true);
  };
  return (
    <header className=" fixed font-Nunito w-[100vw] h-[10vh] flex items-center justify-between px-5 bg-white z-30">
      {/* <div className="w-[95vw] h-[10vh] flex items-center justify-between"> */}
      <div className=" grid place-content-center h-[full] w-[7vw] ">
        <img src={Logo} className="logo h-[90px] w-[110px]" alt="logo" />
      </div>
      {/* <div className=" Empty w-[15vw] h-[10vh] "></div> */}
      <div className="Navbtn h-[10vh] flex items-center gap-12 justify-between">
        <ScrollspyNav
          scrollTargetIds={["about", "pricing", "services", "how", "contact"]}
          // offset={-26}
          activeNavClass="is-active"
          scrollDuration="1000"
        >
          <nav className=" h-[10vh] flex items-center">
            <div className=" w-fit m-[10px]  ">
              <a href="/">Home</a>
            </div>

            <div className=" w-fit m-[10px]  ">
              <a
                href="#about"
                // className={({ isActive }) =>
                //   isActive ? activeLink : normalLink
                // }
              >
                About us
              </a>
            </div>

            <div className=" w-fit m-[10px]  ">
              <a href="#pricing">Pricing</a>
            </div>

            <div className=" w-fit m-[10px]  ">
              <a href="#services">Services</a>
            </div>
            <div className=" w-fit m-[10px]  ">
              <a href="#how">How it Works</a>
            </div>
            <div className=" w-fit m-[10px]  ">
              <a href="#contact">Contact us</a>
            </div>
          </nav>
        </ScrollspyNav>
        <div className=" btns mr-10 w-fit flex items-center text-lg border-[2px] rounded-lg border-primary ">
          <NavLink
            to="/authentication/signup"
            onClick={HandleSignUp}
            className={`btn ${signup ? "active" : "notActive"}`}
          >
            Sign Up
          </NavLink>

          <NavLink
            to="/authentication/login"
            onClick={HandleLogin}
            className={`btn ${login ? "active" : "notActive"}`}
          >
            Log in
          </NavLink>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}

export default Header;
