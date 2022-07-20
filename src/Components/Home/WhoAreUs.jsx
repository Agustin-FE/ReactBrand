import React from "react";
import imagen from "../../img/react.png"
import "./WhoAreUs.css";

const WhoAreUs = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3> Hola somos ReactBrand, Diseñadores, productores y distribuidores de ropa</h3>
        <br/>
        <p >
          Somos una empresa de hace mas de 20 años que diseñamos diferentes prendas de vestir, desde remeras, buzos, camperas, pantalones, zapatos, zapatillas hasta botitas.
          De todos los tamaños y talles!
        </p>
      </div>
      <div className="about-img">
        <img src={imagen} className="img" />
      </div>
    </div>
  );
};

export default WhoAreUs;