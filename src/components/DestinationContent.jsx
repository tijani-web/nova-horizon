import React, { useState, useEffect } from "react";
import destinationsData from "../data/data.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const destinations = destinationsData.destinations;

const DestinationContent = () => {
  const [selected, setSelected] = useState(destinations[0]);

  useGSAP(); 

  useEffect(() => {
    gsap.fromTo(
      ".flip",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 }
    );
  }, [selected]); // <-- Trigger animation when selection changes

  return (
    <>
    <div className="destination-container">
      <h2 className="crew-title des-title"><span>01</span>PICK YOUR DESTINATION</h2>


      <div className="destination-content">
        <img
          src={selected.images.png}
          alt={selected.name}
          className="destination-image flip"
        />
        
        <div className="destination-info">
          <nav className="destination-nav">
            {destinations.map((dest) => (
              <button
                key={dest.name}
                onClick={() => setSelected(dest)}
                className={`nav-button ${
                  selected.name === dest.name ? "active-nav-button" : ""
                }`}
                aria-current={selected.name === dest.name ? "page" : undefined}
              >
                {dest.name}
              </button>
            ))}
          </nav>

          <div className="destination-text">
            <h2 className="destination-heading flip">{selected.name}</h2>
            <p className="destination-description flip">{selected.description}</p>
            <hr className="flip" />
            <div className="destination-stats">
              <div className="flip">
                <h4 className="stat-title">Avg. Distance</h4>
                <p className="stat-value">{selected.distance}</p>
              </div>
              <div className="flip">
                <h4 className="stat-title">Est. Travel Time</h4>
                <p className="stat-value">{selected.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default DestinationContent;
