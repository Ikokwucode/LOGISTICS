import { useState } from "react";
import Logo from "/Images/logo.png";
import { NavLink, Link } from "react-router-dom";
function Header() {
  const activeLink = "text-primary";
  const normalLink = "text-secondary";

  const [signup, setSignup] = useState(true);
  const [login, setLogin] = useState(false);

  const HandleSignUp = () => {
    setSignup(true);
    setLogin(false);
  };

  const HandleLogin = () => {
    setSignup(false);
    setLogin(true);
  };
  return (
    <header className=" font-Nunito w-[100vw] h-[10vh] flex items-center justify-center bg-white">
      <div className="w-[95vw] h-[10vh] flex items-center justify-between">
        <div className=" grid place-content-center h-[full] w-[7vw] ">
          <img src={Logo} className="logo h-[90px] w-[110px]" alt="logo" />
        </div>
        <div className=" Empty w-[15vw] h-[10vh] "></div>
        <div className="Navbtn w-[65vw] h-[10vh] flex items-center justify-between ">
          <nav className=" h-[10vh] w-[45vw] flex items-center justify-between font-extrabold text-xl   ">
            <div className=" w-fit m-[10px]  ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </div>
            <div className=" w-fit m-[10px]  ">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                About us
              </NavLink>
            </div>

            <div className=" w-fit m-[10px]  ">
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Pricing
              </NavLink>
            </div>
            <div className=" w-fit m-[10px]  ">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Services
              </NavLink>
            </div>
            <div className=" w-fit m-[10px]  ">
              <NavLink
                to="/how"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                How it Works
              </NavLink>
            </div>
            <div className=" w-fit m-[10px]  ">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contact us
              </NavLink>
            </div>
          </nav>

          <div className=" btns w-fit flex items-center text-lg border-[2px] rounded-lg border-primary ">
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
      </div>
    </header>
  );
}

export default Header;
