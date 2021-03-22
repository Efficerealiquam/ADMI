import React from "react";
import "../styles/Mission.css";

function Mission({ useTranslation }) {
  const [t] = useTranslation("home");
  const toggleS2 = (id) => {
    const imgBx = document.getElementById(id);
    imgBx.classList.toggle("active");
  };

  return (
    <section className="S2Mission sinZing" id="nuestra_mision">
      <div className="S1heading white">
        <h2 className="cH2Before"> {t("titles_nuestra_mision.title_1")}</h2>
        <h3 className="cus_h3_about S2H3">
          {t("titles_nuestra_mision.subtitle_1")}
        </h3>
        <p>
          {t("nuestra_mission.mission_en_la_tierra_1")}
          <br />
          {t("nuestra_mission.mission_en_la_tierra_2")}
        </p>
      </div>
      <div className="S2container s2Personalizate">
        <div className="S2Box" onClick={() => toggleS2("n1")}>
          <div id="n1" className="S2imgBx">
            <img
              src="https://res.cloudinary.com/dksedihrp/image/upload/v1612821323/Cloud_ADRP/Familiar_ygzfwl.jpg"
              alt="A.D.M.I Misión"
            />
            <div className="S2content_des">
              <h3>Imagen Caption One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                debitis sequi. Facilis possimus cupiditate a. Minus, atque. Quam
                dolorum accusamus architecto necessitatibus ratione similique.
              </p>
            </div>
          </div>
        </div>
        <div className="S2Box" onClick={() => toggleS2("n2")}>
          <div id="n2" className="S2imgBx">
            <img
              src="https://res.cloudinary.com/dksedihrp/image/upload/v1612821323/Cloud_ADRP/Kids2_aze4fc.jpg"
              alt="A.D.M.I Misión"
            />
            <div className="S2content_des">
              <h3>Imagen Caption One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                debitis sequi. Facilis possimus cupiditate a. Minus, atque. Quam
                dolorum accusamus architecto necessitatibus ratione similique.
              </p>
            </div>
          </div>
        </div>
        <div className="S2Box" onClick={() => toggleS2("n3")}>
          <div id="n3" className="S2imgBx">
            <img
              src="https://res.cloudinary.com/dksedihrp/image/upload/v1612821323/Cloud_ADRP/Mision_jgfvvd.jpg"
              alt="A.D.M.I Misión"
            />
            <div className="S2content_des">
              <h3>Imagen Caption One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                debitis sequi. Facilis possimus cupiditate a. Minus, atque. Quam
                dolorum accusamus architecto necessitatibus ratione similique.
              </p>
            </div>
          </div>
        </div>
        <div className="S2Box" onClick={() => toggleS2("n4")}>
          <div id="n4" className="S2imgBx">
            <img
              src="https://res.cloudinary.com/dksedihrp/image/upload/v1612821323/Cloud_ADRP/Oracion_fyrlnq.jpg"
              alt="A.D.M.I Misión"
            />
            <div className="S2content_des">
              <h3>Imagen Caption One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                debitis sequi. Facilis possimus cupiditate a. Minus, atque. Quam
                dolorum accusamus architecto necessitatibus ratione similique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Mission;
