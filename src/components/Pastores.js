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
          <li onClick={() => prevSlideS3()}></li>
          <li onClick={() => nextSlideS3()}></li>
        </ul>
      </div>
    </section>
  );
}
export default Pastores;
