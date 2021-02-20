import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contactanos.css";

function Contactanos() {
  return (
    <>
      <footer>
        <div className="fooContainer" id="contactanos">
          <div className="sec aboutus">
            <h2>Quienes somos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              numquam a voluptates vero saepe voluptate, deleniti odit,
              consectetur, reprehenderit eaque ut repellat doloribus tempore rem
              architecto ullam incidunt magni et error! Est fuga, laborum
              quaerat laudantium, repellat neque ab voluptatem sapiente
              mollitia, quo hic saepe.
            </p>
            <ul className="fooSCI">
              <li>
                <a href="https://www.facebook.com/Asamblea-de-Dios-Misi%C3%B3n-Internacional-ADMI-773909559299175">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ieadmi_iglesia/?hl=es-la&fbclid=IwAR2c1JhyOoQVYLHh2-vQK3SGf5CWafWJGyS2szrBUsf6vJHkHMn3GwHL0dM">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="sec logoFoo">
            <h3 className="tac">
              Asamblea de Dios Misión Internacional -ADMI.
            </h3>
            <img
              src="https://res.cloudinary.com/dksedihrp/image/upload/v1613172201/Cloud_ADRP/design-fd701dde-a2da-4bf0-ba7b-b411faf5b69d_ncm1jy.png"
              alt="logoFoo"
              className="fooImgBx"
            />
          </div>
          <div className="sec contact">
            <h2>Contact Info</h2>
            <ul className="infoFoo">
              <li>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>
                  647 Linda Street <br />
                  Phoenixvile, PA 19460, <br />
                  USA
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-phone-alt"></i>
                </span>
                <span>
                  Telf : +51 934259972
                  <br />
                  Telf : +51 923232421
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                <span>
                  <p>iglesiaadmi@gmail.com</p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>Copyright © 2021 Aleister Projects. All Right reserved</p>
      </div>
    </>
  );
}
export default Contactanos;
