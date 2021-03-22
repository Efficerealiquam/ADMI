import React from "react";
import "../styles/Pastores.css";

function Pastores() {
  var i = 0;

  const nextSlideS3 = () => {
    const imgBxS3 = document.getElementById("s3unique");

    const slidesS3 = imgBxS3.querySelectorAll(".s3cont");

    if (slidesS3) {
      slidesS3[i].classList.remove("s3active");
      i = (i + 1) % slidesS3.length;
      slidesS3[i].classList.add("s3active");
    }
  };
  const prevSlideS3 = () => {
    const imgBxS3 = document.getElementById("s3unique");

    const slidesS3 = imgBxS3.querySelectorAll(".s3cont");
    if (slidesS3) {
      slidesS3[i].classList.remove("s3active");
      i = (i - 1 + slidesS3.length) % slidesS3.length;
      slidesS3[i].classList.add("s3active");
    }
  };

  return (
    <section className="pastores" id="pastores">
      <div className="S3heading ">
        <h2 className="S5h2_c colorH2">Pastores lideres </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          eligendi a voluptatum. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Voluptate reiciendis explicabo quisquam dolore
          adipisci dolores laboriosam unde nesciunt, nihil natus.
        </p>
      </div>
      <div id="s3unique" className="S2container b000 ">
        <div className="s3cont s3active">
          <div className="S3imgBx s3w50">
            <img
              src="https://res.cloudinary.com/dksedihrp/image/upload/v1613842973/Cloud_ADRP/pastor_ebvakj.jpg"
              alt="PastoreImg1"
              style={{ objectPosition: "center 10%" }}
            />
          </div>
          <div className="s3w50 s3center">
            <div className="S3Text s3w60">
              <h2>Pastor Filipe Arquimedes</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente eligendi a voluptatum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptate reiciendis explicabo
                quisquam dolore adipisci dolores laboriosam unde nesciunt, nihil
                natus.
                <br />
                <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente eligendi a voluptatum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptate reiciendis explicabo
                quisquam dolore adipisci dolores laboriosam unde nesciunt, nihil
                natus.
              </p>
            </div>
          </div>
        </div>
        <div className="s3cont">
          <div className="s3w50 s3center">
            <div className="S3Text s3w60">
              <h2>Pastora Dayane</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente eligendi a voluptatum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptate reiciendis explicabo
                quisquam dolore adipisci dolores laboriosam unde nesciunt, nihil
                natus.
                <br />
                <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente eligendi a voluptatum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptate reiciendis explicabo
                quisquam dolore adipisci dolores laboriosam unde nesciunt, nihil
                natus.
              </p>
            </div>
          </div>
          <div className="S3imgBx s3w50">
            <img
              src="https://res.cloudinary.com/dksedihrp/image/upload/v1613842973/Cloud_ADRP/pastora_ccfjkv.jpg"
              alt="PastoreImg1"
            />
          </div>
        </div>
        <ul className="s3controls">
          <li onClick={() => prevSlideS3()}>
            <span
              data-balloon="Copy Unicode Glyph"
              data-balloon-pos="down"
              className="dib hover-pink4"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="chevron-left"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="svg-inline--fa fa-chevron-left fa-w-8"
              >
                <path
                  fill="currentColor"
                  d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                  className=""
                ></path>
              </svg>
            </span>
          </li>
          <li onClick={() => nextSlideS3()}>
            <span
              data-balloon="Copy Unicode Glyph"
              data-balloon-pos="down"
              className="dib hover-grape4"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="svg-inline--fa fa-chevron-right fa-w-8"
              >
                <path
                  fill="currentColor"
                  d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                  className=""
                ></path>
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Pastores;
