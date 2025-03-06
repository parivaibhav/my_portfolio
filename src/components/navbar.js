import React from "react";

let ImageUrl = "https://source.unsplash.com/random/900x700/?fruit";


// Landing Page Component
const navbar = () => {
  return (<nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-around">
    <div className="container-fluid">
      <a className="navbar-brand" href="#f">
        <img
          src={ImageUrl}
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
  </nav>);
};

export default navbar;
