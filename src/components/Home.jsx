import React from "react";
import Leftside from "./Leftside";
import Mainside from "./Mainside";
import Rightside from "./Rightside";

export default function Home() {
  return (
    <div className="main">
      <section className="main-head">
        <a href="#">We are heairg</a>
        <p>
          - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
        </p>
      </section>
      <div className="main-sec">
        <Leftside />
        <Mainside />
        <Rightside />
      </div>
    </div>
  );
}
