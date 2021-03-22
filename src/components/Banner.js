import React, { useEffect } from "react";
import "../styles/Banner.css";

function Banner({ useTranslation }) {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("home");

  /* Effects Banner*/
  useEffect(() => {
    /* Text Banner Effect */

    const text = document.getElementById("text_banner");
    window.addEventListener("scroll", function () {
      let valueSY = window.scrollY;
      if (text) {
        text.style.marginBottom = valueSY * 1 + "px";
      }
    });

    /* Imb Background Effect Size Change*/
    /*     const banner = document.getElementById("banner_header");
    window.addEventListener("scroll", function () {
      let valueYO = window.pageYOffset;
      if (banner) {
        banner.style.backgroundSize = 160 - +valueYO / 12 + "%";
        banner.style.opacity = 1 - +valueYO / 700 + "";
      }
    }); */
  }, []);

  return (
    <div className="banner" id="banner_header">
      <div className="cont_textBx">
        <div id="text_banner" className="textBx">
          <h2>
            {t("titles_baner.title_1")}
            <br /> <span>{t("titles_baner.title_2")}</span>{" "}
          </h2>
          <h3>{t("titles_baner.title_3")}</h3>
          <a href="/#about" className="btnBx">
            {t("titles_baner.button")}
          </a>
        </div>
      </div>
      <div className="clouds">
        {/*   <img
            src="https://res.cloudinary.com/dksedihrp/image/upload/v1612647461/Cloud_ADRP/cloud1_frmgji.png"
            alt="cloud1"
            style={{ "--i": 1 }}
          /> */}
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1612647461/Cloud_ADRP/cloud2_u8hmkz.png"
          alt="cloud2"
          style={{ "--i": 2 }}
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1612647461/Cloud_ADRP/cloud3_syo97m.png"
          alt="cloud3"
          style={{ "--i": 3 }}
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1612647461/Cloud_ADRP/cloud4_ydrtoa.png"
          alt="cloud4"
          style={{ "--i": 4 }}
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1612647461/Cloud_ADRP/cloud5_vleu5x.png"
          alt="cloud5"
          style={{ "--i": 5 }}
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1612647461/Cloud_ADRP/cloud1_frmgji.png"
          alt="cloud1"
          style={{ "--i": 10 }}
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1612647461/Cloud_ADRP/cloud2_u8hmkz.png"
          alt="cloud2"
          style={{ "--i": 9 }}
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1612647461/Cloud_ADRP/cloud3_syo97m.png"
          alt="cloud3"
          style={{ "--i": 8 }}
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1612647461/Cloud_ADRP/cloud4_ydrtoa.png"
          alt="cloud4"
          style={{ "--i": 7 }}
        />
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1612647461/Cloud_ADRP/cloud5_vleu5x.png"
          alt="cloud5"
          style={{ "--i": 6 }}
        />
      </div>
    </div>
  );
}
export default Banner;
