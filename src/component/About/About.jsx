import React from "react";
import Title from "../Title/Title";

export default function About() {
  return (
    <>
      <section className="sec">
        <div className="container">
          <div className="wrapper">
            <h1 className="display-2 fw-bold">ABOUT</h1>
            <Title color="white" />
            <div className="row px-md-5 m-md-5">
              <div className="col-lg-6">
                <p className="fs-5 px-md-4">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-lg-6">
                <p className="fs-5 px-md-4">
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
