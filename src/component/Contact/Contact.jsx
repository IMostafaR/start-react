import React from "react";
import Title from "../Title/Title";

export default function Contact() {
  return (
    <>
      <section className="min-vh-100">
        <div className="container">
          <div className="wrapper">
            <h1 className="display-2 fw-bold">CONTACT ME</h1>
            <Title color="black" />
          </div>
          <div className="w-75 m-auto">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="+20-xxx-xxxx-xx"
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="message"
                style={{ height: "100px" }}
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button className="btn btn-success p-3 w-25">Send</button>
          </div>
        </div>
      </section>
    </>
  );
}
