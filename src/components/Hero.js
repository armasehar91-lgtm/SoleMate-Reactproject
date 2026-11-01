
import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">THE NEW FOOTWEAR EDIT</p>

        <h1>
          Every step.
          <br />
          A little more <span>style.</span>
        </h1>

        <p className="hero-description">
          Discover footwear that brings together comfort,
          confidence and everyday fashion.
        </p>

        <a href="#shop" className="hero-button">
          SHOP COLLECTION <span>→</span>
        </a>
      </div>

      <div className="hero-side-text">
        SOLEMATE / COLLECTION 2026
      </div>
    </section>
  );
}

export default Hero;
