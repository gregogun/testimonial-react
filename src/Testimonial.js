import React, { useState } from "react";
import Testimony from "./Testimony";
import "./Testimonial.css";

const Testimonial = ({ initPersons }) => {
  const [persons, setPersons] = useState(initPersons[0]);

  const incrementPerson = (i) => {
    const newPersons = () => {
      if (i < initPersons.length) {
        return initPersons[i];
      } else {
        return initPersons[0];
      }
    };
    setPersons(newPersons);
  };


  const decrementPerson = (i) => {
    const newPersons = () => {
      if (i >= 0 && i < initPersons.length) {
        return initPersons[i];
      } else {
        return initPersons[3];
      }
    };
    setPersons(newPersons);
  };

  return (
    <div className="Testimonial">
      <Testimony
        key={persons.id}
        incrementPerson={incrementPerson}
        decrementPerson={decrementPerson}
        {...persons}
      />
    </div>
  );
};

export default Testimonial;
