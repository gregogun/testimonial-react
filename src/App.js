import React from "react";
import Testimonial from "./Testimonial";
import angela from "./images/Angela.png";
import denzel from "./images/Denzel.png";
import laura from "./images/Laura.png";
import marcos from "./images/Marcos.png";
import "./App.css";



  const people = [
    { id: 0, name: "Angela", image: angela, quote: "I love this app!" },
    { id: 1, name: "Denzel", image: denzel, quote: "This app is great!" },
    { id: 2,
      name: "Laura",
      image: laura,
      quote: "My productivity is so much better because of this app!",
    },
    { id: 3,
      name: "Marcos",
      image: marcos,
      quote: "This app has helped me achieve great success!",
    },
  ];

function App() {
  return (
    <div className="App">
    <h1>Testimonials</h1>
      <Testimonial initPersons={people}/>
    </div>
  );
}

export default App;
