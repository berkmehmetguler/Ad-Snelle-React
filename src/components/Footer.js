import React from "react";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dak ms-auto">
      <div className="container-fluid bg-dark text-light my-3">
        <div className="row">
          <div className="col-md-4 my-3">
            <h3 className="text-center pb-2 fs-2">
              <span className="text-warning">-</span> Contact{" "}
              <span className="text-warning">-</span>
            </h3>
            <h4 className="text-bold text-center fs-5">
              <span className="text-warning">-</span>{" "}
              <span className="text-warning fs-3 text-border">Snelle</span> car
              wash <span className="text-warning">-</span>
            </h4>
            <p className="text-center fs-5">
              Energy street 1 2671 DE Naaldwijk
            </p>
            <p className="text-center fs-5">
              Email:{" "}
              <a href="mailto:info@carwashwestland.nl" className="text-warning">
                info@carwashwestland.nl
              </a>
            </p>
            <p className="text-center fs-5">
              Telephone:{" "}
              <a href="callto:0174-623165" className="text-warning">
                0174-623165
              </a>
            </p>
            <p className="text-center fs-5">
              <span>-------------------</span>
            </p>
            <div className="d-flex justify-content-evenly text-center">
              <a href="/">
                <FaFacebookSquare className="text-warning fs-1" />
              </a>
              <a href="/">
                <FaLinkedin className="text-warning fs-1" />
              </a>
              <a href="/">
                <FaInstagram className="text-warning fs-1" />
              </a>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <h3 className="text-center text-bold pb-2">
              <span className="text-warning">-</span> Opening hours{" "}
              <span className="text-warning">-</span>
            </h3>

            <div className="row">
              <div className="col-sm">
                <p className="text-center fs-5">Monday:</p>
                <p className="text-center fs-5">Tuesday:</p>
                <p className="text-center fs-5">Wednesday:</p>
                <p className="text-center fs-5">Thursday:</p>
                <p className="text-center fs-5">Friday:</p>
                <p className="text-center fs-5">Saturday:</p>
                <p className="text-center fs-5">Sunday:</p>
              </div>
              <div className="col-sm">
                <p className="text-center fs-5">9am - 5pm</p>
                <p className="text-center fs-5">10am - 4pm</p>
                <p className="text-center fs-5">9am - 5pm</p>
                <p className="text-center fs-5">10am - 4pm</p>
                <p className="text-center fs-5">9am - 5pm</p>
                <p className="text-center fs-5">10am - 4pm</p>
                <p className="text-center fs-5">Closed</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <h3 className="text-center pb-2">
              <span className="text-warning">-</span> Information{" "}
              <span className="text-warning">-</span>
            </h3>

            <p className="bg-transparent text-center fs-5">
              <a href="" className="text-warning ">
                Gift card
              </a>
            </p>
            <p className="bg-transparent text-center fs-5">
              <a href="" className="text-warning ">
                Vacancies
              </a>
            </p>
            <p className="bg-transparent text-center fs-5">
              <a href="" className="text-warning ">
                Privacy Policy
              </a>
            </p>
            <p className="bg-transparent text-center fs-5">
              <a href="" className="text-warning ">
                Disclaimer
              </a>
            </p>
            <p className="bg-transparent text-center fs-5">
              <a href="" className="text-warning ">
                User Agreement
              </a>
            </p>
            <p className="bg-transparent text-center fs-5">
              <a href="" className="text-warning ">
                FAQ
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <span className="d-flex justify-content-center text-center text-light  fs-5">
          &copy; 2023 Snelle Car Wash |{" "}
          <a href="/" className="text-warning mx-2">
            BMG
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
