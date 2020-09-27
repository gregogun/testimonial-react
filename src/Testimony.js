import React from "react";
import * as FaIcons from "react-icons/fa";
import "./Testimony.css";

const Testimony = ({ id, name, image, quote, incrementPerson, decrementPerson }) => {
  const addOne = () => incrementPerson(id + 1);
  const subtractOne = () => decrementPerson(id - 1);

  return (
    <div className="Testimony">
      <p className="PersonQuote">{quote}</p>
      <img className="PersonImage" src={image} alt={name} />
      <p>{name}</p>
      <div className="arrow-nav">
        <div className="arrow-box" onClick={subtractOne}>
          <FaIcons.FaChevronLeft className="arrow arrow--left" />
        </div>
        <div className="arrow-box" onClick={addOne}>
          <FaIcons.FaChevronRight className="arrow arrow--right" />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
