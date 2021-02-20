import React, { useState } from "react";
import { Icon, Modal } from "semantic-ui-react";
import "../styles/Gallery.css";
import Contactanos from "./Contactanos";

function Gallery() {
  const [varI, setVarI] = useState(8);
  const [toggleCM, setToggleCM] = useState(false);
  const [indexPhto, setIndexPhto] = useState(0);
  const dataGallery = [
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514241/samples/1_gisym0.jpg",
      name: " photo 1",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514241/samples/2_woytfi.jpg",
      name: "photo 2",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514241/samples/3_njxbjs.jpg",
      name: "photo 3",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514241/samples/4_umxd2o.jpg",
      name: "photo 4",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514241/samples/5_bqhza1.jpg",
      name: "photo 5",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514241/samples/6_h15xsr.jpg",
      name: "photo 6",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514241/samples/7_uiipxi.jpg",
      name: "Photo 7",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514241/samples/8_qwwedb.jpg",
      name: "Photo 8",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514241/samples/9_x5ksmp.jpg",
      name: "Photo 9 ",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514241/samples/11_wz74sg.jpg",
      name: "Photo 11",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514241/samples/12_r5bcci.jpg",
      name: "Photo 12",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514241/samples/13_uup18c.jpg",
      name: "Photo 13",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514242/samples/14_yd6lqn.jpg",
      name: "Photo 14",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514242/samples/15_dxpioq.jpg",
      name: "Photo 15",
    },
    {
      url:
        "https://res.cloudinary.com/dksedihrp/image/upload/v1613514242/samples/16_vwlufp.jpg",
      name: "Photo 16",
    },
  ];

  const toggleCModal = (s, index) => {
    setToggleCM(s);
    setIndexPhto(index);
  };

  const nextPhotoGallery = (i) => {
    if (i === 14) {
      setIndexPhto(0);
    } else {
      i = i + 1;
      setIndexPhto(i);
    }
  };

  const prevPhotoGallery = (i) => {
    if (i === 0) {
      setIndexPhto(8);
    } else {
      i = i - 1;
      setIndexPhto(i);
    }
  };

  return (
    <div className="galleryContainer">
      <div className="main">
        <h1>Galeria de la Iglesia</h1>
        <p>Fotos de la Iglesia</p>
        <div className="gallery">
          {dataGallery &&
            dataGallery.map(
              (d, i) =>
                i < varI && (
                  <div key={i} className="transitionMore">
                    <div className="img" onClick={() => toggleCModal(true, i)}>
                      <img src={d.url} alt={d.name} />
                      <div className="gallery-captionCustom">{d.name}</div>{" "}
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
      {varI <= dataGallery.length && (
        <div className="btnMore" onClick={() => setVarI(varI + 4)}>
          Add More
        </div>
      )}
      <Contactanos />

      <Modal
        basic
        onClose={() => setToggleCM(false)}
        onOpen={() => setToggleCM(true)}
        open={toggleCM}
        size="small"
      >
        <div className="mdl_cont">
          <img
            src={dataGallery[indexPhto].url}
            alt={dataGallery[indexPhto].name}
          />
          <div className="mdl_name">{dataGallery[indexPhto].name}</div>
          <div className="cust_icon" onClick={() => setToggleCM(false)}>
            <Icon name="close"></Icon>
          </div>
          <span
            data-balloon="Copy Primary Unicode Glyph"
            data-balloon-pos="down"
            className="dib hover-grape4 leftIconS5"
            onClick={() => prevPhotoGallery(indexPhto)}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="chevron-double-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-chevron-double-left fa-w-16"
              style={{ "--fa-secondary-opacity": 0.1, width: "3em" }}
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M226.56 239l194-194a23.84 23.84 0 0 1 33.73-.1l.1.1L477 67.7a24.06 24.06 0 0 1 0 33.85L323.36 256l153.58 154.45a23.87 23.87 0 0 1 .1 33.75l-.1.1-22.65 22.7a23.84 23.84 0 0 1-33.73.1l-.1-.1-193.9-194a24.17 24.17 0 0 1 0-34z"
                  style={{ color: "#ccc" }}
                ></path>
                <path
                  fill="currentColor"
                  d="M35 239L229 45a23.84 23.84 0 0 1 33.73-.1l.1.1 22.61 22.7a23.87 23.87 0 0 1 .1 33.75l-.1.1L131.76 256l153.68 154.45a24.06 24.06 0 0 1 0 33.85L262.79 467a23.84 23.84 0 0 1-33.73.1l-.1-.1L35 273a24.17 24.17 0 0 1 0-34z"
                  style={{ color: "#fff" }}
                ></path>
              </g>
            </svg>
          </span>

          <span
            data-balloon="Copy Primary Unicode Glyph"
            data-balloon-pos="down"
            className="dib hover-grape4 rigthIconS5"
            onClick={() => nextPhotoGallery(indexPhto)}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="chevron-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-chevron-double-right fa-w-16"
              style={{ "--fa-secondary-opacity": 0.1, width: "3em" }}
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M285.6 273L90.79 467a24 24 0 0 1-33.88.1l-.1-.1-22.74-22.7a24 24 0 0 1 0-33.85L188.39 256 34.07 101.55A23.8 23.8 0 0 1 34 67.8l.11-.1L56.81 45a24 24 0 0 1 33.88-.1l.1.1L285.6 239a24.09 24.09 0 0 1 0 34z"
                  style={{ color: "#fff" }}
                ></path>
                <path
                  fill="currentColor"
                  d="M478 273L283.19 467a24 24 0 0 1-33.87.1l-.1-.1-22.75-22.7a23.81 23.81 0 0 1-.1-33.75l.1-.1L380.8 256 226.47 101.55a24 24 0 0 1 0-33.85L249.22 45a24 24 0 0 1 33.87-.1.94.94 0 0 1 .1.1L478 239a24.09 24.09 0 0 1 0 34z"
                  style={{ color: "#ccc" }}
                ></path>
              </g>
            </svg>
          </span>
        </div>
      </Modal>
    </div>
  );
}

export default Gallery;
