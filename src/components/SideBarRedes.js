import React from "react";
import "../styles/SbarRedes.css";

function SideBarRedes() {
  function addClassSideBar() {
    var element = document.querySelector(".social");
    element.classList.toggle("social--fold");
  }
  return (
    <div className="social">
      <p>SIGUENOS</p>
      <ul className="social__list">
        <li className="social__item">
          <a href="https://www.instagram.com/ieadmi_iglesia/?hl=es-la&fbclid=IwAR2c1JhyOoQVYLHh2-vQK3SGf5CWafWJGyS2szrBUsf6vJHkHMn3GwHL0dM">
            <i className="fab fa-instagram"></i>Instagram
          </a>
        </li>
        <li className="social__item">
          <a href="https://">
            <i className=" fab fa-twitter"></i>Twitter
          </a>
        </li>
        <li className="social__item">
          <a href="https://www.facebook.com/Asamblea-de-Dios-Misi%C3%B3n-Internacional-ADMI-773909559299175">
            <i className="fab fa-facebook-f"></i>Facebook
          </a>
        </li>
      </ul>
      <span className="social__btn" onClick={() => addClassSideBar()}></span>
    </div>
  );
}
export default SideBarRedes;
