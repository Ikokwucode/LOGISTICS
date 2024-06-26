import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Main from "./Pages/Main";

import Authentication from "./Auth/Authentication";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Booking from "./Pages/Booking";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/authentication" element={<Authentication />}>
          <Route path="/authentication/login" element={<Login />} />
          <Route path="/authentication/signup" element={<SignUp />} />`
        </Route>
      </Routes>
      <Footer />
      <Booking />
    </>
  );
}

export default App;
