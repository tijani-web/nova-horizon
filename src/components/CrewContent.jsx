import { useEffect, useState } from "react";
import data from "../data/data.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CrewContent = () => {
  const [selected, setSelected] = useState(3); // 3 = Anousheh Ansari
  const crewMember = data.crew[selected];
  
  useGSAP(); // needed to register gsap/react context

  useEffect(() => {
    gsap.fromTo(
      ".crw",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 }
    );
  }, [selected]); // <-- Trigger animation when selection changes

  return (
    <section className="crew-section">

      <div className="crew-content">
        {/* Left: Text Info */}
        <div className="crew-info">
      <h2 className="crew-title crew-header "><span>02</span> MEET YOUR CREW</h2>

          <h3 className="crew-role crw">{crewMember.role}</h3>
          <h1 className="crew-name crw">{crewMember.name}</h1>
          <p className="crew-bio crw">{crewMember.bio}</p>

          <div className="crew-tabs">
            {data.crew.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`crew-dot ${index === selected ? "active" : ""}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="crew-image">
          <img
            src={crewMember.images.webp.replace("./assets", "")}
            alt={crewMember.name}
            className="crw"
          />
        </div>
      </div>
    </section>
  );
};

export default CrewContent;
