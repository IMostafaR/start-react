import React from "react";
import { images } from "../../images";
import styles from "./Home.module.css";
import Title from "../Title/Title";

export default function Home() {
  return (
    <>
      <main className="sec min-vh-100">
        <div className="d-flex flex-column justify-content-center align-items-center py-5">
          <img className={`${styles.logo} mb-3`} src={images.avatar} alt="" />
          <h1 className="display-2 fw-bold mb-2">START REACT</h1>
          <Title color="white" />
          <p className="fs-4 py-3">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </main>
    </>
  );
}
