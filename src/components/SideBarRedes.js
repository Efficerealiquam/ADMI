import React, { useEffect, useState } from "react";
import "../styles/SbarRedes.css";
import { useTranslation } from "react-i18next";

function SideBarRedes() {
  function addClassSideBar() {
    var element = document.querySelector(".social");
    element.classList.toggle("social--fold");
  }
  /* Cambio de idioma */
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("home");
  const [len, setLen] = useState("");
  const choseLenguage = (lenguage) => {
    localStorage.setItem("len", lenguage);
    setLen(lenguage);
    i18n.changeLanguage(lenguage);
  };

  useEffect(() => {
    if (localStorage.getItem("len")) {
      choseLenguage(localStorage.getItem("len"));
    }

    // eslint-disable-next-line
  }, [len]);

  return (
    <div className="social">
      <p>SIGUENOS</p>
      <ul className="social__list">
        <li className="social__item">
          <a href="https://www.instagram.com/ieadmi_iglesia/?hl=es-la&fbclid=IwAR2c1JhyOoQVYLHh2-vQK3SGf5CWafWJGyS2szrBUsf6vJHkHMn3GwHL0dM">
            <i className="fab fa-instagram"></i>Instagram
          </a>
        </li>
        {/*         <li className="social__item">
          <a href="https://">
            <i className=" fab fa-twitter"></i>Twitter
          </a>
        </li> */}
        <li className="social__item">
          <a href="https://www.facebook.com/Asamblea-de-Dios-Misi%C3%B3n-Internacional-ADMI-773909559299175">
            <i className="fab fa-facebook-f"></i>Facebook
          </a>
        </li>
      </ul>
      <p>IDIOMAS</p>
      <ul className="social__list">
        <li className="social__item">
          <span onClick={() => choseLenguage("po")}>
            {localStorage.getItem("len") === "po" ? (
              <span
                data-balloon="Copy Unicode Glyph"
                data-balloon-pos="down"
                className="dib hover-grape4"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="check-square"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-check-square fa-w-14"
                  style={{ width: "20px" }}
                >
                  <path
                    fill="currentColor"
                    d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 32c8.823 0 16 7.178 16 16v352c0 8.822-7.177 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352m-34.301 98.293l-8.451-8.52c-4.667-4.705-12.265-4.736-16.97-.068l-163.441 162.13-68.976-69.533c-4.667-4.705-12.265-4.736-16.97-.068l-8.52 8.451c-4.705 4.667-4.736 12.265-.068 16.97l85.878 86.572c4.667 4.705 12.265 4.736 16.97.068l180.48-179.032c4.704-4.667 4.735-12.265.068-16.97z"
                    className=""
                  ></path>
                </svg>
              </span>
            ) : (
              <span
                data-balloon="Copy Unicode Glyph"
                data-balloon-pos="down"
                className="dib hover-cyan4"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="square"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-square fa-w-14"
                  style={{ width: "20px" }}
                >
                  <path
                    fill="currentColor"
                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352z"
                    className=""
                  ></path>
                </svg>
              </span>
            )}
            Português
          </span>
        </li>
        <li className="social__item">
          <span onClick={() => choseLenguage("es")}>
            {localStorage.getItem("len") === "es" ? (
              <span
                data-balloon="Copy Unicode Glyph"
                data-balloon-pos="down"
                className="dib hover-grape4"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="check-square"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-check-square fa-w-14"
                  style={{ width: "20px" }}
                >
                  <path
                    fill="currentColor"
                    d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 32c8.823 0 16 7.178 16 16v352c0 8.822-7.177 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352m-34.301 98.293l-8.451-8.52c-4.667-4.705-12.265-4.736-16.97-.068l-163.441 162.13-68.976-69.533c-4.667-4.705-12.265-4.736-16.97-.068l-8.52 8.451c-4.705 4.667-4.736 12.265-.068 16.97l85.878 86.572c4.667 4.705 12.265 4.736 16.97.068l180.48-179.032c4.704-4.667 4.735-12.265.068-16.97z"
                    className=""
                  ></path>
                </svg>
              </span>
            ) : (
              <span
                data-balloon="Copy Unicode Glyph"
                data-balloon-pos="down"
                className="dib hover-cyan4"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="square"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-square fa-w-14"
                  style={{ width: "20px" }}
                >
                  <path
                    fill="currentColor"
                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352z"
                    className=""
                  ></path>
                </svg>
              </span>
            )}
            Español
          </span>
        </li>
        <li className="social__item">
          <span onClick={() => choseLenguage("en")}>
            {localStorage.getItem("len") === "en" ? (
              <span
                data-balloon="Copy Unicode Glyph"
                data-balloon-pos="down"
                className="dib hover-grape4"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="check-square"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-check-square fa-w-14"
                  style={{ width: "20px" }}
                >
                  <path
                    fill="currentColor"
                    d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 32c8.823 0 16 7.178 16 16v352c0 8.822-7.177 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352m-34.301 98.293l-8.451-8.52c-4.667-4.705-12.265-4.736-16.97-.068l-163.441 162.13-68.976-69.533c-4.667-4.705-12.265-4.736-16.97-.068l-8.52 8.451c-4.705 4.667-4.736 12.265-.068 16.97l85.878 86.572c4.667 4.705 12.265 4.736 16.97.068l180.48-179.032c4.704-4.667 4.735-12.265.068-16.97z"
                    className=""
                  ></path>
                </svg>
              </span>
            ) : (
              <span
                data-balloon="Copy Unicode Glyph"
                data-balloon-pos="down"
                className="dib hover-cyan4"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="square"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-square fa-w-14"
                  style={{ width: "20px" }}
                >
                  <path
                    fill="currentColor"
                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352z"
                    className=""
                  ></path>
                </svg>
              </span>
            )}
            English
          </span>
        </li>
      </ul>
      <span className="social__btn" onClick={() => addClassSideBar()}></span>
    </div>
  );
}
export default SideBarRedes;
