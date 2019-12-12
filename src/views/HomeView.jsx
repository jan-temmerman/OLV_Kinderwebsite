import React from "react";
import { stringLiteral } from "@babel/types";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Link } from "react-router-dom";

import "../sass/app.scss";
import "../sass/views/_home.scss";

export default function HomeView() {

  function scrollBottom() {
    window.scrollTo(0, 99999);
  }
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", scrollBottom, false);
  } else if (window.attachEvent) window.attachEvent("onload", scrollBottom);

  return (
    <div className="background">
      <section className="container space">
        <div className="planet_container">
          <Link className="planet" to="/consultatie"><img src="homepage/consultatie.svg" alt="consultatie" /></Link>
          <Link className="planet" to="/opname"><img src="homepage/opname.svg" alt="opname" /></Link>
          <Link className="planet" to="/dagkliniek"><img src="homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
        </div>
      </section>
      <section className="container earth">
        <div className="ground" />
        <img className="skyline" src="homepage/skyline_1.svg" alt="Skyline" />
        <img
          className="hospital"
          src="homepage/ziekenhuis.svg"
          alt="Ziekenhuis"
        />
        <img className="cloud" src="homepage/wolk_1.svg" alt="Wolk 1" />
        <img className="cloud" src="homepage/wolk_2.svg" alt="Wolk 2" />
      </section>
    </div>
  );
}
