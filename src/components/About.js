import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="S1about" id="about">
      <div className="S1heading">
        <h2>Sobre nosotros</h2>
      </div>
      <div className="S1content">
        <div className="S1contentBx w50">
          <h3> Quien es Dios?</h3>
          <p
            style={{
              position: "absolute",
              marginTop: "10px",
              paddingRight: "20px",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit sint aut, molestias quisquam a exercitationem
            possimus, fugiat unde optio consequatur itaque numquam, quidem
            commodi ex quia! Labore, magni doloremque! Laborum, nemo quo? Illum
            voluptatum quos dolorum assumenda voluptatem quas alias ex hic
            voluptatibus, qui officia adipisci unde temporibus accusantium.
            Velit! <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Numquam itaque dolorum repellendus, quos eligendi quod! Dignissimos
            vitae commodi quasi reprehenderit. Provident explicabo consequatur
            beatae nemo.
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit sint aut, molestias quisquam a exercitationem
            possimus, fugiat unde optio consequatur itaque numquam, quidem
            commodi ex quia! Labore, magni doloremque! Laborum, nemo quo? Illum
            voluptatum quos dolorum assumenda voluptatem quas alias ex hic
            voluptatibus, qui officia adipisci unde temporibus accusantium.
            Velit!
            <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Numquam itaque dolorum repellendus, quos eligendi quod! Dignissimos
            vitae commodi quasi reprehenderit. Provident explicabo consequatur
            beatae nemo.
          </p>
        </div>
        <div className="w50">
          <img
            src="https://res.cloudinary.com/dksedihrp/image/upload/v1612813569/Cloud_ADRP/ADRP_FILIPE_eigjww.jpg"
            alt="ADMI"
            className="S1img"
          />
        </div>
      </div>
      <div className="S1content">
        <div>
          <h3 className="cus_h3_about">Quienes somos?</h3>
          <p style={{ paddingBottom: "100px", marginTop: "17px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit sint aut, molestias quisquam a exercitationem
            possimus, fugiat unde optio consequatur itaque numquam, quidem
            commodi ex quia! Labore, magni doloremque! Laborum, nemo quo? Illum
            voluptatum quos dolorum assumenda voluptatem quas alias ex hic
            voluptatibus, qui officia adipisci unde temporibus accusantium.
            Velit! <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Numquam itaque dolorum repellendus, quos eligendi quod! Dignissimos
            vitae commodi quasi reprehenderit. Provident explicabo consequatur
            beatae nemo.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit sint aut, molestias quisquam a exercitationem
            possimus, fugiat unde optio consequatur itaque numquam, quidem
            commodi ex quia! Labore, magni doloremque! Laborum, nemo quo? Illum
            voluptatum quos dolorum assumenda voluptatem quas alias ex hic
            voluptatibus, qui officia adipisci unde temporibus accusantium.
            Velit! <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            in odit impedit eos doloribus accusantium velit, aut deserunt
            reiciendis adipisci, aliquam aliquid cum nihil perspiciatis est
            necessitatibus quaerat, eum ducimus sequi. In at placeat unde totam
            quisquam, culpa consequatur reiciendis minima optio mollitia
            molestias rem ea! Unde distinctio porro animi quis accusamus, dolore
            dicta? Iusto sequi nulla quos minus doloremque.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
