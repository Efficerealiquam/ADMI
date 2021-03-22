import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  home_es,
  home_po,
  home_en,
  menu_es,
  menu_po,
  menu_en,
} from "./imports/translations_imp";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      home: home_es,
      menu: menu_es,
    },
    po: {
      home: home_po,
      menu: menu_po,
    },
    en: {
      home: home_en,
      menu: menu_en,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
