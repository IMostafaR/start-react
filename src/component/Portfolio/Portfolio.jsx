import React from "react";
import Title from "../Title/Title";
import styles from "./Portfolio.module.css";
import { images } from "../../images";

export default function Portfolio() {
  function displayImg() {}
  return (
    <>
      <section className="min-vh-100">
        <div className="container">
          <div className="wrapper">
            <h1 className="display-2 fw-bold">PORTFOLIO</h1>
            <Title color="black" />
            <div className="row g-5 mt-3">
              <div className="col-md-4">
                <div
                  onClick={(e) => {
                    console.log(e);
                  }}
                  className={`position-relative ${styles.gallery}`}
                >
                  <img
                    className="img-fluid rounded-4"
                    src={images.cabin}
                    alt=""
                  />
                  <div className={`${styles.layer} rounded-4`}>
                    <i
                      className={`fa-solid fa-plus display-1 ${styles.plus}`}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`position-relative ${styles.gallery}`}>
                  <img
                    className="img-fluid rounded-4"
                    src={images.cake}
                    alt=""
                  />
                  <div className={`${styles.layer} rounded-4`}>
                    <i
                      className={`fa-solid fa-plus display-1 ${styles.plus}`}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`position-relative ${styles.gallery}`}>
                  <img
                    className="img-fluid rounded-4"
                    src={images.circus}
                    alt=""
                  />
                  <div className={`${styles.layer} rounded-4`}>
                    <i
                      className={`fa-solid fa-plus display-1 ${styles.plus}`}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`position-relative ${styles.gallery}`}>
                  <img
                    className="img-fluid rounded-4"
                    src={images.game}
                    alt=""
                  />
                  <div className={`${styles.layer} rounded-4`}>
                    <i
                      className={`fa-solid fa-plus display-1 ${styles.plus}`}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`position-relative ${styles.gallery}`}>
                  <img
                    className="img-fluid rounded-4"
                    src={images.safe}
                    alt=""
                  />
                  <div className={`${styles.layer} rounded-4`}>
                    <i
                      className={`fa-solid fa-plus display-1 ${styles.plus}`}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className={`position-relative ${styles.gallery}`}>
                  <img
                    className="img-fluid rounded-4"
                    src={images.submarine}
                    alt=""
                  />
                  <div className={`${styles.layer} rounded-4`}>
                    <i
                      className={`fa-solid fa-plus display-1 ${styles.plus}`}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
