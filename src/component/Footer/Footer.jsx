import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="">
        <div className="nav_footer text-center p-5 ">
          <div className="container my-3 px-5">
            <div className="row">
              <div className="col-lg-4 mb-4">
                <h3 className="fw-bold mb-4">LOCATION</h3>
                <p className="mb-1 fs-5">2215 John Daniel Drive</p>
                <p className="fs-5">Clark, MO 65243</p>
              </div>
              <div className="col-lg-4 mb-4">
                <h3 className="fw-bold mb-4">AROUND THE WEB</h3>
                <div>
                  <i className="fa-brands fa-facebook-f me-4 fa-xl"></i>
                  <i className="fa-brands fa-twitter me-4 fa-xl"></i>
                  <i className="fa-brands fa-linkedin-in me-4 fa-xl"></i>
                  <i className="fa-brands fa-dribbble fa-xl"></i>
                </div>
              </div>
              <div className="col-lg-4">
                <h3 className="fw-bold mb-4">ABOUT FREELANCER</h3>
                <p className="px-5 fs-5">
                  Freelance is a free to use, MIT licensed Bootstrap theme
                  created by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm_footer text-center p-3">
          <p className="my-2 fs-6">Copyright &#169; Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
