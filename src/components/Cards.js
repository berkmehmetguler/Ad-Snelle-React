import React from "react";
import "../styles/Cards.scss";

const Cards = () => {
  return (
    <div className="container mt-3 pb-3">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://picsum.photos/200/300"
              alt="Card image cap"
              className="card-img-top"
              width={500}
              height={400}
            />
            <div className="card-body bg-dark text-light">
              <h5 className="card-title">Details</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                assumenda enim hic asperiores minima nisi labore culpa sit rerum
                corrupti!
              </p>
              <a href="#" className="btn btn-warning text-dark">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://picsum.photos/200/300"
              alt="Card image cap"
              className="card-img-top"
              width={500}
              height={400}
            />
            <div className="card-body bg-dark text-light">
              <h5 className="card-title">Services</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                rerum saepe ratione omnis quod quasi dolorem! Necessitatibus vel
                repellendus ullam.
              </p>
              <a href="#" className="btn btn-warning text-dark">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://picsum.photos/200/300"
              alt="Card image cap"
              className="card-img-top"
              width={500}
              height={400}
            />
            <div className="card-body bg-dark text-light">
              <h5 className="card-title">Contact</h5>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                accusantium odit fugiat corrupti maxime praesentium et error
                tempore rerum earum.
              </p>
              <a href="#" className="btn btn-warning text-dark">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
