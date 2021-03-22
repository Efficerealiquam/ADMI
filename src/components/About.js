import React from "react";
import "../styles/About.css";
import { useTranslation } from "react-i18next";

function About() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("home");

  return (
    <section className="S1about" id="about">
      <div className="S1heading">
        <h2>{t("home_titles_general.title_1")}</h2>
      </div>
      <div className="S1content">
        <div className="S1contentBx ">
          <h3> {t("home_titles_general.subtitle_1")}</h3>
          <p
            style={{
              marginTop: "10px",
              paddingRight: "20px",
            }}
          >
            {t("about.quien_es_Dios_1")}
            <br />
            <br />
            {t("about.quien_es_Dios_2")}
            <br />
            <br />
            {t("about.quien_es_Dios_3")}
            <br />
            {t("about.quien_es_Dios_4")}
            <br />
            <br />
            {t("about.quien_es_Dios_5")}
            <br />
            {t("about.quien_es_Dios_6")}
            <br />
            <br />
            {t("about.quien_es_Dios_7")}
            <br />
            <br />
            {t("about.quien_es_Dios_8")}
          </p>
        </div>
        <div className="contImgBx">
          <img
            src="https://res.cloudinary.com/dksedihrp/image/upload/v1612813569/Cloud_ADRP/ADRP_FILIPE_eigjww.jpg"
            alt="ADMI"
            className="S1img"
          />
        </div>
      </div>
      <div className="S1content">
        <div>
          <h3 className="cus_h3_about">
            {t("home_titles_general.subtitle_2")}
          </h3>
          <p style={{ paddingBottom: "100px", marginTop: "17px" }}>
            {t("about_2.quienes_somos_1")}
            <br />
            <br />
            {t("about_2.quienes_somos_2")}
            <br />
            <br /> {t("about_2.quienes_somos_3")}
            <br /> <br />
            {t("about_2.quienes_somos_4")} <br />
            {t("about_2.quienes_somos_5")}
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
