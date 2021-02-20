import React from "react";
import "../styles/Menu.css";

function Menu() {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (header) {
      header.classList.toggle("sticky", window.scrollY > 0);
    }
  });

  return (
    <header>
      <span className="Mlogo">A.D.M.I</span>
      <div className="Mtoggle"></div>
      <ul className="Mul">
        <li className="Mli">
          <div>
            <a href="/#banner_header">Inicio</a>
          </div>
        </li>
        <li className="Mli">
          <a href="/#about">Sobre nosotros</a>
        </li>
        <li className="Mli">
          <a href="/#nuestra_mision">Nuestra Misión</a>
        </li>
        <li className="Mli">
          <a href="/#pastores">Pastores</a>
        </li>
        <li className="Mli">
          <a href="/#missiones">Misiones</a>
        </li>
        <li className="Mli">
          <a href="/#anexos">Anexos</a>
        </li>
        <li className="Mli">
          <a href="/gallery">Galeria</a>
        </li>
        {/*     <li className="Mli">
          <a href="/#contactanos">Contactanos</a>
        </li> */}
      </ul>
    </header>
  );
}
export default Menu;
