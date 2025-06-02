import { useEffect, useState } from "react";
import data from "../data/data.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TechnologyContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tech = data.technology[activeIndex];

   useGSAP(); 

  useEffect(() => {
    gsap.fromTo(
      ".tec",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 }
    );
  }, [activeIndex]); 

  return (
    <section className="tech-section">
      <h2 className="tech-title"><span>03</span> SPACE LAUNCH 101</h2>

      <div className="tech-content">
        {/* Tabs */}
        <div className="tech-tabs">
          {data.technology.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`tech-tab ${activeIndex === i ? "active" : ""}`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Text */}
        <div className="tech-info">
          <p className="tech-subtitle tec">THE TERMINOLOGY…</p>
          <h1 className="tech-name tec">{tech.name}</h1>
          <p className="tech-description tec">{tech.description}</p>
        </div>

        {/* Image */}
        <div className="tech-image tec">
          <picture>
            <source media="(min-width: 1024px)" srcSet={tech.images.portrait.replace("./assets", "")} />
            <img src={tech.images.landscape.replace("./assets", "")} alt={tech.name} />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default TechnologyContent;
