import React, { useState } from "react";
import { Icon, Modal } from "semantic-ui-react";
import "../styles/Missiones.css";

function Misiones() {
  const [modal, setModal] = useState(false);
  const [photoScreen, setPhotoScreen] = useState("");

  const modalScreenPhoto = (url) => {
    setModal(true);
    setPhotoScreen(url);
  };

  return (
    <section className="S2Mission  sinZing2" id="missiones">
      <div className="S1heading white">
        <h2 className="cH2Before">Misiones Nacionales </h2>
        <p className="fs1-2em">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          eligendi a voluptatum. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Voluptate reiciendis explicabo quisquam dolore
          adipisci dolores laboriosam unde nesciunt, nihil natus.
        </p>
      </div>
      <div className="S4Cont_desc">
        <h2 className="s4H2Before">Misión en la Selva-Peru</h2>
        <p className="fs1-2em ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quidem modi asperiores optio tempore ad dolor nemo consequatur
          corporis aspernatur! Quasi id accusantium dolorum vel. Vero
          perferendis labore itaque voluptas dolore quis.
          <br /> Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptate quidem modi asperiores optio tempore ad
          dolor nemo consequatur corporis aspernatur! Quasi id accusantium
          dolorum vel. Vero perferendis labore itaque voluptas dolore quis.
        </p>
        <h2 className="tac fs4em bbtm_1sw ch2">Misionero</h2>

        <div className="S4cont mt_40">
          <div className="S3imgBx s3w40 op100_15">
            <img
              src="https://res.cloudinary.com/dksedihrp/image/upload/v1613078828/Cloud_ADRP/juanCarlos_bcwfvo.jpg"
              alt="Misionero Juan carlos"
            />
          </div>
          <div className="s3w60 s3center cs3_1">
            <div className="S3Text s3w90 cs3">
              <h2>Pastor Juan Carlos</h2>
              <p className="white fs1-2em">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque neque porro, mollitia ad cupiditate placeat esse
                dolorem odit exercitationem voluptate, repellendus, a quo
                libero? Expedita sit ab omnis accusantium, quo, distinctio,
                cumque odit nisi voluptas impedit eaque. Aliquam vero cum ipsum
                nobis distinctio reprehenderit dignissimos laboriosam id. Error,
                reiciendis delectus. <br /> <br />
                Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptate quidem modi asperiores optio tempore
                ad dolor nemo consequatur corporis aspernatur! Quasi id
                accusantium dolorum vel. Vero perferendis labore itaque voluptas
                dolore quis. <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                culpa excepturi delectus explicabo reiciendis a fuga ex maxime
                fugiat! Provident ratione fuga molestiae quibusdam fugiat
                reiciendis ipsa dolores id! Dicta libero vitae sunt quae id modi
                laborum, repudiandae laudantium quos expedita quaerat nisi a
                voluptate doloremque! Numquam ipsam neque autem? Sed aperiam
                dolorem porro culpa harum, maxime nam. Odio, iusto.
              </p>
              <img
                src="https://res.cloudinary.com/dksedihrp/image/upload/v1613172201/Cloud_ADRP/design-fd701dde-a2da-4bf0-ba7b-b411faf5b69d_ncm1jy.png"
                alt="Logo"
                className="logoMisiones"
              />
            </div>
          </div>
        </div>
        <div className="s3Dbtm bbtm_1sw"></div>
      </div>
      <h2 className="S4textC_W tac fs4em">Fotos</h2>
      <div className="container">
        <div
          className="box box1"
          onClick={() =>
            modalScreenPhoto(
              "https://ankitpodder2000.github.io/photogallery/370378.jpg"
            )
          }
        >
          <div className="overlay"></div>
          <img
            src="https://ankitpodder2000.github.io/photogallery/370378.jpg"
            alt="box1"
          />
          <div className="namePhoto">
            <p>Priale</p>
          </div>
        </div>
        <div
          className="box box2"
          onClick={() =>
            modalScreenPhoto(
              "https://ankitpodder2000.github.io/photogallery/426579e96e9333ed9518c2fd9d3e5482.jpg"
            )
          }
        >
          <div className="overlay"></div>
          <img
            src="https://ankitpodder2000.github.io/photogallery/426579e96e9333ed9518c2fd9d3e5482.jpg"
            alt="box2"
          />
          <div className="namePhoto">
            <p>Camara</p>
          </div>
        </div>
        <div
          className="box box3"
          onClick={() =>
            modalScreenPhoto(
              "https://ankitpodder2000.github.io/photogallery/free-retina-macbook-pro-wallpapers-download-hd-wallpaper-in-2019.jpg"
            )
          }
        >
          <div className="overlay"></div>
          <img
            src="https://ankitpodder2000.github.io/photogallery/free-retina-macbook-pro-wallpapers-download-hd-wallpaper-in-2019.jpg"
            alt="box3"
          />
          <div className="namePhoto">
            <p>Man in Phono</p>
          </div>
        </div>
        <div
          className="box box4"
          onClick={() =>
            modalScreenPhoto(
              "https://ankitpodder2000.github.io/photogallery/image-79055--144149.jpg"
            )
          }
        >
          <div className="overlay"></div>
          <img
            src="https://ankitpodder2000.github.io/photogallery/image-79055--144149.jpg"
            alt="box4"
          />
          <div className="namePhoto">
            <p>Girl in mountain</p>
          </div>
        </div>
        <div
          className="box box5"
          onClick={() =>
            modalScreenPhoto(
              "https://ankitpodder2000.github.io/photogallery/img_snow_wide.jpg"
            )
          }
        >
          <div className="overlay"></div>
          <img
            src="https://ankitpodder2000.github.io/photogallery/img_snow_wide.jpg"
            alt="box5"
          />
          <div className="namePhoto">
            <p>Man in Bicycle</p>
          </div>
        </div>
        <div
          className="box box6"
          onClick={() =>
            modalScreenPhoto(
              "https://ankitpodder2000.github.io/photogallery/ivy_plant_sun_164663_3840x2160.jpg"
            )
          }
        >
          <div className="overlay"></div>
          <img
            src="https://ankitpodder2000.github.io/photogallery/ivy_plant_sun_164663_3840x2160.jpg"
            alt="box6"
          />
          <div className="namePhoto">
            <p>Bicycle </p>
          </div>
        </div>
        <div
          className="box box7"
          onClick={() =>
            modalScreenPhoto(
              "https://ankitpodder2000.github.io/photogallery/machine_rear_view_white_164687_3840x2160.jpg"
            )
          }
        >
          <div className="overlay"></div>
          <img
            src="https://ankitpodder2000.github.io/photogallery/machine_rear_view_white_164687_3840x2160.jpg"
            alt="box7"
          />
          <div className="namePhoto">
            <p>Boat Sailing</p>
          </div>
        </div>
      </div>
      <Modal
        basic
        onClose={() => setModal(false)}
        onOpen={() => setModal(true)}
        open={modal}
        size="small"
      >
        <div className="mdl_cont">
          <img src={photoScreen} alt="photoScreen" />
          <div className="cust_icon" onClick={() => setModal(false)}>
            <Icon name="close"></Icon>
          </div>
        </div>
      </Modal>
    </section>
  );
}
export default Misiones;
