import "./Partners.css";

import q1 from "/images/partnerslogos/q1.jpg";
import q2 from "/images/partnerslogos/q2.jpg";
import q3 from "/images/partnerslogos/q3.jpg";
import q4 from "/images/partnerslogos/q4.jpg";
import q5 from "/images/partnerslogos/q5.jpg";
import q6 from "/images/partnerslogos/q6.jpg";
import q7 from "/images/partnerslogos/q7.jpg";
import q8 from "/images/partnerslogos/q8.jpg";
import q9 from "/images/partnerslogos/q9.jpg";
import q10 from "/images/partnerslogos/q10.jpg";
import q11 from "/images/partnerslogos/q11.jpg";
import q12 from "/images/partnerslogos/q12.jpg";
import q13 from "/images/partnerslogos/q13.jpg";
import q14 from "/images/partnerslogos/q14.jpg";
import q15 from "/images/partnerslogos/q15.jpg";

const logos = [
  { id: 1, src: q1 },
  { id: 2, src: q2 },
  { id: 3, src: q3 },
  { id: 4, src: q4 },
  { id: 5, src: q5 },
  { id: 6, src: q6 },
  { id: 7, src: q7 },
  { id: 8, src: q8 },
  { id: 9, src: q9 },
  { id: 10, src: q10 },
  { id: 11, src: q11 },
  { id: 12, src: q12 },
  { id: 13, src: q13 },
  { id: 14, src: q14 },
  { id: 15, src: q15 },
];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="container">
        <h2>Our Partners</h2>
        <p className="partners-subtitle">Trusted by organizations that believe in our mission</p>
      </div>
      <div className="partners-track-wrapper">
        <div className="partners-track">
          <div className="partners-track-inner">
            {logos.map((logo) => (
              <div key={logo.id} className="partner-logo">
                <img src={logo.src} alt={`Partner ${logo.id}`} />
              </div>
            ))}
            {logos.map((logo) => (
              <div key={`dup-${logo.id}`} className="partner-logo">
                <img src={logo.src} alt={`Partner ${logo.id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
