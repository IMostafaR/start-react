import React from "react";
import styles from "./Title.module.css";

export default function Title({ color }) {
  return (
    <>
      <div className="d-flex align-items-center">
        <div
          className={`${styles.line} translate-middle-y me-3`}
          style={{ backgroundColor: `${color}` }}
        ></div>
        <i className="fa-solid fa-star fs-1 mb-3"></i>
        <div
          className={`${styles.line} translate-middle-y ms-3`}
          style={{ backgroundColor: `${color}` }}
        ></div>
      </div>
    </>
  );
}
