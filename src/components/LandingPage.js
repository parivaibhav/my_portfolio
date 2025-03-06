import React from 'react';


let ImageUrl = "https://source.unsplash.com/random/900x700/?fruit";

// Landing Page Component
const LandingPage = () => {
  return (
    <section className="sec-1  d-flex flex-column flex-lg-row align-items-center justify-content-center">
      <div className=" px-5 py-4">
        <button className="btn-head px-2 py-1 rounded">
          😍 Award-winning digital services
        </button>
        <h1 className="display-4 fw-bold">
          Creative studio<div> focused on</div>
          <div>Web- Devloper</div>
        </h1>
        <p className="w-75">
          From concept to execution, we deliver web designs that make an
          impact. Let your brand shine with our innovative and visually
          stunning websites.
        </p>
        <div className="d-flex gap-2 ">
          <div className="mt-3">
            <input
              type="text"
              className="rounded px-2 w-auto border border-secondary border-2 "
              placeholder="example@email.com"
            />
            <button className=" text-light btn w-md-auto bg-black py-2">
              Start Trial!
            </button>
          </div>
        </div>
      </div>
      <div className=" w-50 d-flex align-items-center position-relative">
        <img
          src={ImageUrl}
          alt=""
          style={{ width: "25rem" }}
          className="img-fluid"
        />
        <div className="position-absoulte" />
      </div>
    </section>
  );
};

export default LandingPage;
