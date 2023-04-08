import React from "react";
import { images } from "../../images";

export default function NotFound() {
  return (
    <>
      <div className="d-flex flex-column m-5">
        <h1 className="text-center text-danger">OOPS ! Page Not Found</h1>
        <img className="w-25 m-auto" src={images.error} alt="" />
      </div>
    </>
  );
}
