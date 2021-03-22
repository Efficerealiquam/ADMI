import React from "react";
import About from "../components/About";
import Anexos from "../components/Anexos";
import Banner from "../components/Banner";
import Contactanos from "../components/Contactanos";
import Misiones from "../components/Misiones";
import Mission from "../components/Mission";
import Pastores from "../components/Pastores";
import SideBarRedes from "../components/SideBarRedes";
import "../styles/home.css";
import { useTranslation } from "react-i18next";
function Home() {
  return (
    <div className="cont_home">
      <Banner useTranslation={useTranslation} />
      <SideBarRedes />
      <About />
      <Mission useTranslation={useTranslation} />
      <Pastores />
      <Misiones />
      <Anexos />
      <Contactanos />
      {/* Contactanos */}
    </div>
  );
}

export default Home;
