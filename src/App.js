import React from "react";
import { useAuthState } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import homeSvg from "./assets/home.svg";

const App = () => {
  const { name } = useAuthState().user;
  return (
    <>
      <Navbar />
      <div
        className="container-xl d-flex flex-column justify-content-center align-items-center"
        style={{ marginTop: "8em" }}
      >
        <div className="" style={{ maxWidth: "550px" }}>
          <img src={homeSvg} className="img-fluid" alt="welcomesvg" />
        </div>
        <h1 className="display-4 mt-4">Hi {name}</h1>
      </div>
    </>
  );
};

export default App;
