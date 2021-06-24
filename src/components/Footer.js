import React from "react";

function Footer() {
  return (
    <div className="row m-4">
      <div className="card col-10 col-md-5 m-3">
        <p className="card-text">
          <span>&copy; 2021</span>
          <span className="fw-bolder"> Mustafa Akbas.</span> All rights
          reserved.
        </p>
      </div>
      <div className="card col-10 col-md-5 m-3">
        <p className="card-text">
          Built using <span className="fw-bolder">ReactJS, Context, REST Api, Bootstrap</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
