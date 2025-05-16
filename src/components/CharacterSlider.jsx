import React, { useState } from "react";
import "./CharacterSlider.css";

import layla from "../assets/slider/layla.png";
import klee from "../assets/slider/klee.png";
import faruzan from "../assets/slider/faruzan.png";

const slides = [
  {
    image: layla,
    name: "Layla",
    description:
      "She is a student in the Rtawahist Darshan, specializing in Theoretical Astrology.",
  },
  {
    image: klee,
    name: "Klee",
    description:
      "She is a knight of the Knights of Favonius with a penchant for explosives.",
  },
  {
    image: faruzan,
    name: "Faruzan",
    description:
      'She is a scholar from "one hundred years ago" and specializes in ancient mechanics.',
  },
];

const CharacterSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <button className="arrow left" onClick={prevSlide}>
        ‹
      </button>

      <div className="slide">
        <img src={slides[current].image} alt={`Slide ${current + 1}`} />
      </div>

      <button className="arrow right" onClick={nextSlide}>
        ›
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CharacterSlider;
