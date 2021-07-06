import React from "react";
import PropTypes from "prop-types";


function Card({ imageSource, title, text}) {
  return (
    <div className="card text-center bg-grey">
        <div className="overflow">
            <img src={imageSource} alt="" className="card-img-top" />
        </div>
        <div className="card-body text-secondary">
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-secondary">
            {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
            </p>
          <a
            href="./contacto"
            className="btn btn-outline-secondary border-0"
            rel="noreferrer"
          >
            Contactanos
          </a>
        </div>
    </div>

);
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;