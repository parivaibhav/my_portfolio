import React from "react";
import "./components/App.css";
// import LandingPage from "./components/LandingPage";
// import navbar from "./components/navbar";

function App() {
  return (
    // <div>
    //   {/* Hello */}
    //   {/* <navbar /> */}
    //   {/* <LandingPage /> */}

    // </div>

    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-around">
        <div className="container-fluid">
          <a className="navbar-brand" href="#f">
            <img
              src="./assets/logo.svg"
              alt="Logo"
              width={100}
              height={24}
              className="d-inline-block align-text-top"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2  mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#f"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Demos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#f">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#f">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#f">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#f"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#f">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#f">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#f">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#f"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Portfolio
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#f">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#f">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#f">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#f"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Magamenu
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#f">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#f">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#f">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#f">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex gap-2">
              <i className="bi bi-brightness-low-fill fs-5" />
              <button
                className="rounded px-2 btn-outline-primary btn-sm d-none d-sm-block"
                type="submit"
              >
                <i className="bi bi-person-circle me-2" />
                Sign up
              </button>
              <button
                className="btn btn-primary btn-sm d-none d-sm-block"
                type="submit"
              >
                Buy now
              </button>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
        </div>
      </nav>
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
            src="./assets/01.jpg"
            alt=""
            style={{ width: "25rem" }}
            className="img-fluid"
          />
          <div className="position-absoulte" />
        </div>
      </section>
      {/* <h1>Hello World</h1> */}
      <section className="prc-sec">
        <h3 className="text-center py-5"> Pricing</h3>
        <div className="cards d-flex w-100 align-items-center justify-content-center flex-wrap gap-5 ">
          <div className="card" style={{ width: "18rem" }}>
            <div className="py-2 card-header">
              <h4 className="text-center ">Free</h4>
            </div>
            <div className="card-body text-center">
              <h3 className="card-title">$0 / mo</h3>
              <div>
                <p className="card-text fw-normal">
                  10 users included <br /> 2 gb of storage <br /> Email support{" "}
                </p>
              </div>
              <br />
              <button className=" btn-sg">sign up for free</button>
            </div>
          </div>
          {/* card-2 */}
          <div className="card" style={{ width: "28rem", height: "20rem" }}>
            <div className="py-2 card-header">
              <h4 className="text-center ">Pro</h4>
            </div>
            <div className="card-body text-center d-block align-content-center">
              <h3 className="card-title">$15 / mo</h3>
              <div>
                <p className="card-text fw-normal">
                  20 users included <br /> 10 gb of storage <br />
                  Priority Email support
                </p>
              </div>
              <br />
              <button className="btn btn-outline-sg">Get Started</button>
            </div>
          </div>
          {/* card-3 */}
          <div
            className="card col-sm-10 col-md-3 mb-3me-3"
            style={{ width: "18rem" }}
          >
            <div className="card-header">
              <h4 className="text-center ">Enterprise</h4>
            </div>
            <div className="card-body text-center">
              <h3 className="card-title">$29 / mo</h3>
              <div>
                <p className="card-text fw-normal">
                  30 users included <br /> 15 gb of storage <br />
                  phone &amp; Email support
                </p>
              </div>
              <br />
              <button className="btn btn-sg">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
      <footer className="position-relative text-light">
        <div className="position-absolute top-0 start-50 translate-middle bg-danger ft-box  p-5 ban d-flex flex-column flex-lg-row flex-xl-row flex-xxl-row justify-content-around ">
          <div className="py-2 px-3">
            <h1 className="display-6 fw-bold w-75">
              Let's talk about your digital agency goals
            </h1>
            <div className="d-flex gap-2 flex-column flex-md-row">
              <div className="mt-3">
                <input
                  type="text"
                  className="rounded px-2 w-auto"
                  placeholder="example@email.com"
                />
                <button className=" text-light btn w-md-auto sbs-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <p>
              <i className="bi bi-headset fs-5 text-light me-2 " />
              Call on: 0125 783 875 32
            </p>
            <p>
              <i className="bi bi-clock fs-5 text-light me-2" />
              Time: 9am to 5pm (Sunday close)
            </p>
            <p>
              <i className="bi bi-envelope-fill fs-5 text-light me-2" />
              example@email.com
            </p>
          </div>
        </div>
        <div className="box-ft w-100 bg-dark text-light px-3  d-flex flex-column flex-md-row justify-content-end align-itmes-start align-items-lg-center gap-3 flex-wrap ">
          <div className="col">
            <h3>Mizzle</h3>
            <p className="text-wrap">
              A Bootstrap theme that's both stylish and functional, perfect for
              any type of technology or corporate website.
            </p>
          </div>
          <div className="d-flex justify-content-sm-start justify-content-lg-center ju col">
            <div className=" ">
              <h4>Quick links</h4>
              <div className=" d-flex flex-column gap-2 mt-3">
                <a className="ft-link" href="#f">
                  About Us
                </a>
                <a className="ft-link" href="#f">
                  About Us
                </a>
                <a className="ft-link" href="#f">
                  About Us
                </a>
                <a className="ft-link" href="#f">
                  About Us
                </a>
                <a className="ft-link" href="#f">
                  About Us
                </a>
              </div>
            </div>
            <div className=" ">
              <h4>Community</h4>
              <div className=" d-flex flex-column py-2 gap-2">
                <a className="ft-link" href="#f">
                  About Us
                </a>
                <a className="ft-link" href="#f">
                  About Us
                </a>
                <a className="ft-link" href="#f">
                  About Us
                </a>
                <a className="ft-link" href="#f">
                  About Us
                </a>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="row ">
              <div className="col">
                <h5 className>App available on</h5>
                <p>
                  A Bootstrap theme that's both stylish and functional, perfect
                  for any type of technology or corporate website.
                </p>
                <div className>
                  <img
                    src="./assets/google-play.svg"
                    alt=""
                    srcSet
                    width={150}
                  />
                  <img src="./assets/app-store.svg" alt="" srcSet width={150} />
                </div>
              </div>
              <div className="row mt-4">
                <h5>Follow on</h5>
                <div className="ft-icons py-2 d-flex gap-2">
                  <span className="p-2 rounded icn ">
                    <i className="bi bi-facebook m-auto" />
                  </span>
                  <span className="p-2 rounded icn">
                    <i className="bi bi-instagram" />
                  </span>
                  <span className="p-2 rounded icn">
                    <i className="bi bi-whatsapp" />
                  </span>
                  <span className="p-2 rounded icn">
                    <i className="bi bi-twitter" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
