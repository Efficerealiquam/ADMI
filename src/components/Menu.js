import React, { useState } from "react";
import "../styles/Menu.css";
import { useTranslation } from "react-i18next";
function Menu() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("menu");

  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (header) {
      header.classList.toggle("sticky", window.scrollY > 0);
    }
  });

  const [tMenu, setTMenu] = useState(false);

  const toggleMenu = () => {
    var menuToggle = document.querySelector(".Mtoggle");
    menuToggle.classList.toggle("activeMenu");
    var menu = document.querySelector(".ulMenu");
    menu.classList.toggle("activeMenu");
    setTMenu(!tMenu);
  };

  return (
    <header>
      <span className="Mlogo">A.D.M.I</span>
      <div className="Mtoggle" onClick={() => toggleMenu()}>
        {tMenu === false ? (
          <span
            data-balloon="Copy Unicode Glyph"
            data-balloon-pos="down"
            className="dib hover-grape4"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-bars fa-w-14"
              style={{ width: "100%", height: "100%", color: "#ffd49f" }}
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
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
              data-prefix="far"
              data-icon="times"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="svg-inline--fa fa-times fa-w-10"
              style={{
                width: "100%",
                height: "34px",
                color: "#ffd49f",
                marginTop: "-2px",
              }}
            >
              <path
                fill="currentColor"
                d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                className=""
              ></path>
            </svg>
          </span>
        )}
      </div>
      <ul className="Mul ulMenu">
        <li className="Mli">
          <div>
            <a href="/#banner_header" onClick={() => toggleMenu()}>
              {t("menu.optionMenu-1")}
            </a>
          </div>
        </li>
        <li className="Mli">
          <a href="/#about" onClick={() => toggleMenu()}>
            {t("menu.optionMenu-2")}
          </a>
        </li>
        <li className="Mli">
          <a href="/#nuestra_mision" onClick={() => toggleMenu()}>
            {t("menu.optionMenu-3")}
          </a>
        </li>
        <li className="Mli">
          <a href="/#pastores" onClick={() => toggleMenu()}>
            {t("menu.optionMenu-4")}
          </a>
        </li>
        <li className="Mli">
          <a href="/#missiones" onClick={() => toggleMenu()}>
            {t("menu.optionMenu-5")}
          </a>
        </li>
        <li className="Mli">
          <a href="/#anexos" onClick={() => toggleMenu()}>
            {t("menu.optionMenu-6")}
          </a>
        </li>
        <li className="Mli">
          <a href="/gallery" onClick={() => toggleMenu()}>
            {t("menu.optionMenu-7")}
          </a>
        </li>
        {/*     <li className="Mli">
          <a href="/#contactanos">Contactanos</a>
        </li> */}
      </ul>
    </header>
  );
}
export default Menu;
