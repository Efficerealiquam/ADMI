import React, { useState } from "react";
import { Grid, Icon, Modal, Segment } from "semantic-ui-react";
import "../styles/Anexos.css";
function Anexos() {
  /* .mfp-ready */

  const [toggleCM, setToggleCM] = useState(false);
  const [indexPhto, setIndexPhto] = useState(0);
  const dataGallery = [
    {
      url: "https://unsplash.it/1600/1600?image=1081",
      name: "Photo Capture 0",
    },
    {
      url: "https://unsplash.it/1600/1600?image=1014",
      name: "Photo Capture 1",
    },
    { url: "https://unsplash.it/1600/1600?image=267", name: "Photo Capture 2" },
    { url: "https://unsplash.it/1600/1600?image=266", name: "Photo Capture 3" },
    { url: "https://unsplash.it/1600/1600?image=634", name: "Photo Capture 4" },
    { url: "https://unsplash.it/1600/1600?image=923", name: "Photo Capture 5" },
    { url: "https://unsplash.it/1600/1600?image=682", name: "Photo Capture 6" },
    { url: "https://unsplash.it/1600/1600?image=173", name: "Photo Capture 7" },
    { url: "https://unsplash.it/1600/1600?image=943", name: "Photo Capture 8" },
  ];

  const toggleCModal = (s, index) => {
    setToggleCM(s);
    setIndexPhto(index);
  };

  const nextPhotoGallery = (i) => {
    if (i === 8) {
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
    <section className="Anexos" id="anexos">
      <div className="S3heading ">
        <h2 className="S5h2_c">Anexos Perú</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          eligendi a voluptatum. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Voluptate reiciendis explicabo quisquam dolore
          adipisci dolores laboriosam unde nesciunt, nihil natus.
        </p>
      </div>
      <Grid columns="equal" style={{ width: "80%" }} className="cG">
        <Grid.Row style={{ paddingBottom: "0px" }}>
          <Grid.Column className="cC">
            <Segment className="cS">
              <p>
                <a href="/#anexo1">Micaela 3</a>
              </p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="cC">
            <Segment className="cS">
              <p>
                <a href="/#anexo2">Carabaillo</a>
              </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ paddingTop: "0px" }}>
          <Grid.Column className="cC">
            <Segment className="cS">
              <p>
                <a href="/#anexo3">Luz divina</a>
              </p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="cC">
            <Segment className="cS">
              <p>
                <a href="/#anexo4">Las brisas</a>
              </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="S4Cont_desc">
        {/*  <div className="s3Dbtm bbtm_1sb mb_20"></div> */}
        {/*       <div className="s3center  contRombo">
          <div className="rombo"></div>
        </div>

        <div className="contCande">
          <div className="cande"></div>
          <div className="cande"></div>
          <div className="cande"></div>
        </div> */}
        <img
          src="https://res.cloudinary.com/dksedihrp/image/upload/v1613172201/Cloud_ADRP/design-fd701dde-a2da-4bf0-ba7b-b411faf5b69d_ncm1jy.png"
          alt="Logo"
          className="logoIEADMI"
        />
        <div className="s3Dbtm bbtm_1sb mb_20 "></div>
      </div>
      <div className="S4Cont_desc">
        <h2 className="tac fs_text" id="anexo1">
          Micaela 3
        </h2>
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

        <div className="S4cont mt_40">
          <div className="s3w60  cs3_1">
            <div className="S3Text s3w90 cs3">
              <h2>Lider Domenica </h2>
              <p className=" fs1-2em">
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
            </div>
          </div>
          <div className="S3imgBx s3w40">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              alt="Lider de carabaillo"
            />
          </div>
        </div>
        {/* Anexo 2 */}
        <div className="line_separate" id="anexo2"></div>
        <h2 className="tac mt_100 fs_text">Carabaillo</h2>
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

        <div className="S4cont mt_40 PC">
          <div className="S3imgBx s3w40">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              alt="Lider de carabaillo"
            />
          </div>
          <div className="s3w60  cs3_1">
            <div className="S3Text s3w90 cs3">
              <h2>Lider Domenica </h2>
              <p className=" fs1-2em pd_left30">
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
            </div>
          </div>
        </div>
        <div className="S4cont mt_40 MOVIL">
          <div className="s3w60  cs3_1">
            <div className="S3Text s3w90 cs3">
              <h2>Lider Domenica </h2>
              <p className=" fs1-2em pd_left30">
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
            </div>
          </div>
          <div className="S3imgBx s3w40">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              alt="Lider de carabaillo"
            />
          </div>
        </div>
        {/* Anexo 3 */}
        <div className="line_separate" id="anexo3"></div>
        <h2 className="tac mt_100 fs_text">Luz divina</h2>
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

        <div className="S4cont mt_40">
          <div className="s3w60  cs3_1">
            <div className="S3Text s3w90 cs3">
              <h2>Lider Domenica </h2>
              <p className=" fs1-2em">
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
            </div>
          </div>
          <div className="S3imgBx s3w40">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              alt="Lider de carabaillo"
            />
          </div>
        </div>
        {/* Anexo 4 */}
        <div className="line_separate" id="anexo4"></div>
        <h2 className="tac mt_100 fs_text ">Las brisas</h2>
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

        <div className="S4cont mt_40 PC">
          <div className="S3imgBx s3w40">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              alt="Lider de carabaillo"
            />
          </div>
          <div className="s3w60  cs3_1">
            <div className="S3Text s3w90 cs3">
              <h2>Lider Domenica </h2>
              <p className=" fs1-2em pd_left30">
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
            </div>
          </div>
        </div>
        <div className="S4cont mt_40 MOVIL">
          <div className="s3w60  cs3_1">
            <div className="S3Text s3w90 cs3">
              <h2>Lider Domenica </h2>
              <p className=" fs1-2em pd_left30">
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
            </div>
          </div>
          <div className="S3imgBx s3w40">
            <img
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              alt="Lider de carabaillo"
            />
          </div>
        </div>
      </div>
      <div className="s3Dbtm bbtm_1sb mb_20 marLR_20"></div>
      <h2 className="s3textF_C tac ">Fotos Anexos</h2>
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

      <article className="s5gallery">
        {dataGallery &&
          dataGallery.map((d, i) => (
            <span
              key={i}
              className="s5gallery-link"
              onClick={() => toggleCModal(true, i)}
            >
              <figure className="s5gallery-image">
                <img src={d.url} alt="img1" />
                <figcaption>{d.name}</figcaption>
              </figure>
            </span>
          ))}
      </article>
    </section>
  );
}

export default Anexos;
