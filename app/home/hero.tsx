import React from "react";

export default function HeroSection() {
  return (
    <section
      className="hero-2-bg active"
      // style="background-image: url(images/hero-2-bg.jpg)"
      id="home"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-10">
            <div className="text-center">
              <span className="badge badge-soft-primary text-uppercase">
                Creative Landing
              </span>
              <h1 className="hero-2-title text-shadow text-dark fw-bold my-4">
                A Clean &amp; Minimal Landing Template
              </h1>
              <p className="text-muted w-75 mx-auto mb-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam aperiam eaqueillosite
                inventore veritatis.
              </p>
              <a href="#" className="btn btn-primary">
                Read More <i className="mdi mdi-timer-sand mdi-spin me-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
