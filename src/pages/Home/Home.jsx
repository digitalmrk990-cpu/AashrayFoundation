import { useEffect } from "react";
import { Link } from "react-router-dom";
import galleryData from "../../data/galleryData";
import Partners from "../../components/Partners/Partners";
import "./Home.css";

const stories = [
  {
    id: 1,
    tag: "Impact Story",
    date: "Oct 12, 2024",
    title: "How 'Ashray Ka Aashra' changed Meena's future forever",
    description:
      "After losing her parents, Meena found a home, an education, and a family within our foundation. Today, she is pursuing her dreams of becoming a nurse.",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    tag: "Project News",
    date: "Sep 28, 2024",
    title: "Sustainable water solutions reach 5 new villages",
    description:
      "Project JAL has successfully implemented solar-powered filtration plants in the drought-hit regions of Rajasthan, serving over 2000 families.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    tag: "Volunteer Spotlight",
    date: "Sep 15, 2024",
    title: "Finding purpose in the golden years of others",
    description:
      "Meet our longest-serving volunteer, Arun, who has dedicated his weekends for 5 years to ensuring the residents of Sahara never feel alone.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "The level of transparency and professional dedication seen at AFLF is rare. Every time I visit one of their projects, I am moved by the tangible progress and the genuine love the team has for their work.",
    name: "Dr. Rajesh Sharma",
    role: "Corporate Partner, Global Health Ltd",
    initials: "RS",
    color: "accent",
  },
  {
    id: 2,
    quote:
      "As a monthly donor, I get regular updates that actually show me where my money goes. From a well being dug to an animal being rescued, it makes me feel like I am truly part of the change.",
    name: "Ananya Patel",
    role: "Monthly Supporter Since 2018",
    initials: "AP",
    color: "primary",
  },
];

const projects = [
  {
    id: 1,
    title: "Project JAL",
    desc: "Clean water access for rural communities.",
    tag: "Clean Water",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Ashray Ka Aashra",
    desc: "Comprehensive care for orphaned children.",
    tag: "Orphan Care",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Life-Line",
    desc: "Emergency medical aid & healthcare support.",
    tag: "Medical",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Sahara",
    desc: "Dignified support and homes for the elderly.",
    tag: "Elderly Care",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Pashupremi",
    desc: "Rescue and welfare programs for animals.",
    tag: "Animal Welfare",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
  },
];

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".observe-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="home-hero">
        <div className="hero-shape hero-shape--1" />
        <div className="hero-shape hero-shape--2" />
        <div className="hero-container">
          <div className="hero-text-col">
            <span className="hero-badge">Empowering Lives Since 2010</span>
            <h1 className="hero-title">
              Creating A Better <span className="hero-title-accent">Future Together</span>
            </h1>
            <p className="hero-desc">
              We are dedicated to providing sustainable support for those in need, bridging the gap between hope and reality through community-driven initiatives.
            </p>
            <div className="hero-btns">
              <Link to="/donate" className="btn-primary-glass">
                <span className="material-symbol">volunteer_activism</span>
                Donate Now
              </Link>
              <Link to="/about" className="btn-secondary-glass">
                Learn Our Story
              </Link>
            </div>
          </div>
          <div className="hero-image-col">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
                alt="Children smiling"
              />
            </div>
            <div className="hero-decor" />
          </div>
        </div>
      </section>

      {/* ===== STATS & INTRO ===== */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stats-text-col">
              <h2 className="stats-title">Empowering the <br />Unreachable</h2>
              <p className="stats-desc">
                Ashray for Life Foundation (AFLF) is more than an organization; it's a movement of compassion. We focus on systemic change by addressing core needs from healthcare to animal welfare.
              </p>
              <div className="stats-numbers">
                <div className="stat-card glass">
                  <span className="stat-value">15k+</span>
                  <span className="stat-label">Impacted</span>
                </div>
                <div className="stat-card glass">
                  <span className="stat-value">50+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-card glass">
                  <span className="stat-value">12</span>
                  <span className="stat-label">Cities</span>
                </div>
              </div>
            </div>
            <div className="stats-cards-col">
              <div className="stats-bg-glow" />
              <div className="stat-feature-card glass-dark">
                <h3>Our Institutional Trust</h3>
                <p>Partnered with over 30 corporate entities to ensure transparency and high-impact delivery of every single rupee donated.</p>
              </div>
              <div className="stat-feature-card glass">
                <div className="feature-icon">
                  <span className="material-symbol">verified</span>
                </div>
                <h4>Transparency</h4>
                <p>100% auditable funds allocation across all sectors.</p>
              </div>
              <div className="stat-feature-card glass">
                <div className="feature-icon">
                  <span className="material-symbol">groups</span>
                </div>
                <h4>Community</h4>
                <p>Driven by 500+ dedicated volunteers nationwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="projects-section">
        <div className="section-container">
          <div className="projects-header">
            <div>
              <h2 className="projects-title">Our Core Pillars</h2>
              <p className="projects-subtitle">Focusing our efforts where they are needed the most.</p>
            </div>
            <Link to="/programs" className="projects-view-btn glass">
              View All Projects
              <span className="material-symbol">arrow_forward</span>
            </Link>
          </div>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <div key={project.id} className={`project-card-wrapper ${i % 2 === 0 ? "offset-top" : ""}`}>
                <div className="project-card-glow" />
                <div className="project-card glass">
                  <div className="project-card-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.desc}</p>
                  <span className="project-card-tag">{project.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="mv-section">
        <div className="mv-bg-glow" />
        <div className="section-container">
          <div className="mv-grid">
            <div className="mv-card-dark glass-dark">
              <div className="mv-card-glow" />
              <div className="mv-icon-wrap">
                <span className="material-symbol">track_changes</span>
              </div>
              <h2 className="mv-card-title">Our Mission</h2>
              <p className="mv-card-desc">
                To catalyze a sustainable social revolution by empowering the underprivileged through education, medical aid, and compassionate intervention, ensuring every life has the shelter (Ashray) it deserves.
              </p>
            </div>
            <div className="mv-card-dark glass-dark mv-card-offset">
              <div className="mv-icon-wrap">
                <span className="material-symbol fill">visibility</span>
              </div>
              <h2 className="mv-card-title">Our Vision</h2>
              <p className="mv-card-desc">
                To envision a world where socio-economic barriers are dismantled, where every being—human or animal—thrives in a safe environment filled with dignity, opportunity, and communal support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GET INVOLVED ===== */}
      <section className="involved-section">
        <div className="section-container">
          <div className="involved-grid">
            <div className="involved-image-col">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=500&fit=crop"
                alt="Volunteers"
                className="involved-img-back"
              />
              <div className="involved-card glass">
                <h3>Support Our Mission</h3>
                <p>Your corporate partnership or individual donation drives our largest projects. Be the anchor that supports our future initiatives.</p>
                <Link to="/donate" className="btn-primary-glass">
                  Partner With Us
                  <span className="material-symbol">handshake</span>
                </Link>
              </div>
            </div>
            <div className="involved-form-col">
              <div className="involved-form-card glass">
                <div className="involved-form-glow" />
                <h3>Become a Volunteer</h3>
                <p>Lend your skills and time to make a tangible difference in the lives of many. We have opportunities in field work, administration, and digital support.</p>
                <Link to="/volunteer" className="btn-primary-glass">
                  Apply Now
                  <span className="material-symbol">person_add</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STORIES ===== */}
      <section className="stories-section">
        <div className="section-container">
          <h2 className="stories-main-title">Stories of Change</h2>
          <div className="stories-grid-new">
            {stories.map((story, i) => (
              <article key={story.id} className={`story-article ${i === 1 ? "story-offset" : ""}`}>
                <div className="story-image-wrap asymmetric-card">
                  <img src={story.image} alt={story.title} />
                  <div className="story-image-overlay" />
                </div>
                <div className="story-content">
                  <div className="story-meta">
                    <span className="story-tag">{story.tag}</span>
                    <span className="story-date">{story.date}</span>
                  </div>
                  <h3 className="story-title">{story.title}</h3>
                  <p className="story-desc">{story.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section">
        <div className="testimonials-glow" />
        <div className="section-container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">Voices of Hope</h2>
            <div className="testimonials-dots">
              <span className="dot dot--sm" />
              <span className="dot dot--lg" />
              <span className="dot dot--sm" />
            </div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.id} className={`testimonial-card glass border-${t.color}`}>
                <span className="testimonial-quote-icon">"</span>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <h4 className="testimonial-name">{t.name}</h4>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="newsletter glass">
        <div className="section-container">
          <h3>Sign up for newsletter</h3>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); const i = e.target.querySelector("input"); const b = e.target.querySelector("button"); if (i.value.trim()) { b.textContent = "Subscribed!"; b.style.background = "#2e7d32"; i.value = ""; setTimeout(() => { b.textContent = "Sign Up"; b.style.background = ""; }, 3000); } }}>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </section>

      <Partners />
    </>
  );
}

export default Home;
