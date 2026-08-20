import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { motion } from "framer-motion";

/* =========================================================
   PORTFOLIO DATA
   ---------------------------------------------------------
   Edit your portfolio information ONLY from here.
   No MongoDB/API fetching is required.
   ========================================================= */

const PORTFOLIO_DATA = {
  /* =======================================================
     PERSONAL INFORMATION
     ======================================================= */

  personal: {
    name: "Anmol Chauhan",

    role: "Full Stack Developer",

    bio:
      "Full-stack developer passionate about building scalable web applications, AI integration, cloud deployment and solving data structures and algorithms.",

    location: "India",

    education: "B.Tech Computer Science",

    profileImage: "/profile.jpeg",

    resume: "/resume.pdf",

    available: true,
  },

  /* =======================================================
     SOCIAL LINKS
     ======================================================= */

  social: {
    github:
      "https://github.com/anmolchauhan0101",

    linkedin:
      "https://linkedin.com/in/anmolchauhan0810",

    email:
      "anmolchauhan@gmail.com",
  },

  /* =======================================================
     HERO STATS
     ======================================================= */

  stats: {
    leetcode: "250+",
    projects: "10+",
    internships: "1",
  },

  /* =======================================================
     SKILLS
     ======================================================= */

  skills: [
    "C",
    "Java",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "MySQL",
    "Git",
    "GitHub",
    "Tailwind CSS",
    "MERN Stack",
    "Data Structures",
    "Algorithms",
    "REST APIs",
    "Cloud Deployment",
    "Docker",
    "DBMS",
    "OOPs Concepts",
    "AWS",
  ],

  /* =======================================================
     EXPERIENCE
     ======================================================= */

  experience: [
    {
      year: "September 2025 - May 2026",

      title: "Vice President",

      company: "CSI - DIT University",

      description:
        "Served as Vice President to one of the oldest clubs of DIT University, managed a team of 100+ active members, contributing to technical events, student engagement, community activities and peer learning initiatives.",
    },

    {
      year: "December 2025 - January 2026",

      title: "Full Stack Developer Intern",

      company: "Codec Technologies",

      description:
        "Worked on full-stack web development using MERN Stack, building responsive interfaces and working with modern web technologies.",
    },

    {
      year: "August 2024 - March 2025",

      title: "Public Relations Deputy Head",

      company: "NSS - DIT University",

      description:
        "Managed public relations and outreach for the National Service Scheme (NSS) at DIT University, coordinating events, campaigns and community service initiatives.",
    },
  ],

  /* =======================================================
     PROJECTS
     ======================================================= */

  projects: [
    {
      title: "TravelMate",

      description:
        "A full-stack travel platform designed to help users explore destinations, travel options, hotels and itinerary planning.",

      tech:
        "MERN Stack • JavaScript • Tailwind CSS • REST APIs",

      github:
        "https://github.com/anmolchauhan0101/travelmate",

      live:
        "https://travelmate-plreo4b2z-anmol-chauhans-projects-e9526c2b.vercel.app/",

      featured: true,
    },

    {
      title: "Alumni Connect Portal",

      description:
        "A web application that connects university alumni with current students, providing a platform for networking, mentorship and career guidance.",

      tech:
        "MERN Stack • JavaScript • Tailwind CSS • REST APIs",

      github:
        "https://github.com/anmolchauhan0101/alumni-portal.git",

      live:
        "https://alumni-portal-psi.vercel.app/",

      featured: false,
    },

    {
      title: "College Management System",

      description:
        "A desktop-based application built using Java Swing and MySQL that provides full CRUD operations for managing students and teachers in one centralized system. The project includes features for adding, updating, deleting, viewing records and secure database connectivity.",

      tech:
        "Java • Swing • JDBC • MySQL",

      github:
        "https://github.com/anmolchauhan0101/college-management-system.git",

      live: "",

      featured: false,
    },

    {
      title: "AI-University Enquiry Chatbot",

      description:
        "AI-powered chatbot built using Python Flask for the backend, SQL for database management and a basic frontend interface for interaction. The chatbot fetches university information such as courses, fees, rankings and other details from the web.",

      tech:
        "Python • Flask • SQL • HTML/CSS • JavaScript",

      github:
        "https://github.com/anmolchauhan0101/Ai-university-enquiry-chatbot.git",

      live: "",

      featured: false,
    },

    {
      title: "Expense Tracker",

      description:
        "A simple yet effective expense tracking application to help users manage their finances.",

      tech:
        "React.js • CSS • JavaScript",

      github:
        "https://github.com/anmolchauhan0101/expense-tracker.git",

      live:
        "https://expense-tracker-weld-eta-wnodtgg2uh.vercel.app/",

      featured: false,
    },
  ],
};


/* =========================================================
   APP
   ========================================================= */

function App() {
  const {
    personal,
    social,
    stats,
    skills,
    experience,
    projects,
  } = PORTFOLIO_DATA;

  /* =======================================================
     CONTACT FORM
     ======================================================= */

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contactStatus, setContactStatus] = useState("");

  /* =======================================================
     NAME
     ======================================================= */

  const nameParts = personal.name.trim().split(" ");

  const firstName =
    nameParts[0] || "Anmol";

  const lastName =
    nameParts.slice(1).join(" ") || "Chauhan";

  /* =======================================================
     SMOOTH NAVIGATION
     ======================================================= */

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();

    const section =
      document.getElementById(sectionId);

    if (!section) return;

    const navbarHeight = 100;

    const position =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `#${sectionId}`
    );
  };

  /* =======================================================
     CONTACT FORM
     -------------------------------------------------------
     Opens Gmail compose with:
     - recipient
     - subject
     - visitor name
     - visitor email
     - message
     ======================================================= */

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const name =
      contactForm.name.trim();

    const email =
      contactForm.email.trim();

    const message =
      contactForm.message.trim();

    if (!name || !email || !message) {
      setContactStatus(
        "Please fill in all the fields."
      );

      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Hello Anmol,

Name: ${name}
Email: ${email}

Message:

${message}`
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(social.email)}` +
      `&su=${subject}` +
      `&body=${body}`;

    const gmailWindow = window.open(
      gmailUrl,
      "_blank",
      "noopener,noreferrer"
    );

    if (!gmailWindow) {
      setContactStatus(
        "Please allow pop-ups for this website to open Gmail."
      );

      return;
    }

    setContactStatus(
      "Gmail opened with your message. Click Send in Gmail to send it."
    );

    setContactForm({
      name: "",
      email: "",
      message: "",
    });
  };

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <div className="app">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={(e) =>
            scrollToSection(e, "home")
          }
        >
          <span>A</span>

          <strong>
            {firstName}.
          </strong>
        </a>

        <nav className="nav-links">

          <a
            href="#about"
            onClick={(e) =>
              scrollToSection(e, "about")
            }
          >
            About
          </a>

          <a
            href="#skills"
            onClick={(e) =>
              scrollToSection(e, "skills")
            }
          >
            Skills
          </a>

          <a
            href="#experience"
            onClick={(e) =>
              scrollToSection(e, "experience")
            }
          >
            Experience
          </a>

          <a
            href="#projects"
            onClick={(e) =>
              scrollToSection(e, "projects")
            }
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={(e) =>
              scrollToSection(e, "contact")
            }
          >
            Contact
          </a>

        </nav>

        <div className="nav-socials">

          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

        </div>

      </header>


      {/* =================================================
          MAIN
      ================================================= */}

      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section
          id="home"
          className="hero"
        >

          <motion.div
            className="hero-content"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >

            <div className="status">

              <span></span>

              {personal.available
                ? "Available for opportunities"
                : "Currently unavailable"}

            </div>

            <p className="small-heading">
              HELLO, I'M
            </p>

            <h1>
              {firstName}

              <br />

              <span>
                {lastName}.
              </span>
            </h1>

            <h2>
              {personal.role}
            </h2>

            <p className="hero-description">
              {personal.bio}
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
                onClick={(e) =>
                  scrollToSection(
                    e,
                    "projects"
                  )
                }
              >
                View My Work

                <FaArrowUpRightFromSquare
                  size={15}
                />
              </a>

              <a
                href={personal.resume}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Resume

                <FaArrowUpRightFromSquare
                  size={14}
                />
              </a>

              <a
                href="#contact"
                className="secondary-button"
                onClick={(e) =>
                  scrollToSection(
                    e,
                    "contact"
                  )
                }
              >
                Let's Connect

                <FaEnvelope size={15} />
              </a>

            </div>

            <div className="hero-stats">

              <div className="stat-item">
                <strong>
                  {stats.leetcode}
                </strong>

                <span>
                  LeetCode Problems
                </span>
              </div>

              <div className="stat-item">
                <strong>
                  {stats.projects}
                </strong>

                <span>
                  Full Stack Projects
                </span>
              </div>

              <div className="stat-item">
                <strong>
                  {stats.internships}
                </strong>

                <span>
                  Internships
                </span>
              </div>

            </div>

          </motion.div>


          <motion.div
            className="hero-visual"
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: "easeOut",
            }}
          >

            <div className="profile-photo-card">

              <img
                src={personal.profileImage}
                alt={`${personal.name} profile`}
                className="profile-photo"
              />

              <div className="profile-badge">

                <span></span>

                Available

              </div>

            </div>


            <div className="code-card">

              <div className="code-header">

                <div className="window-buttons">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>
                  developer.js
                </p>

              </div>

              <pre>
{`const developer = {
  name: "${personal.name}",
  role: "${personal.role}",

  skills: [
${skills
  .slice(0, 7)
  .map(
    (skill) =>
      `    "${skill}"`
  )
  .join(",\n")}
  ],

  location: "${personal.location}",
  available: true
};`}
              </pre>

            </div>

          </motion.div>

        </section>


        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="section"
        >

          <p className="section-label">
            01 — ABOUT
          </p>

          <h2 className="section-title">
            Building with purpose,

            <span>
              {" "}learning every day.
            </span>
          </h2>

          <div className="about-grid">

            <div className="about-text">

              <p>
                {personal.bio}
              </p>

              <p>
                I am currently pursuing{" "}
                <strong>
                  {personal.education}
                </strong>{" "}
                at DIT University, Dehradun.
              </p>

              <p>
                Based in {personal.location},
                I enjoy turning ideas into
                practical and scalable
                applications while continuously
                improving my problem-solving
                and development skills.
              </p>

            </div>

            <div className="about-highlight">

              <div>
                <strong>
                  FULL STACK
                </strong>

                <span>
                  Modern Web Development using MERN Stack
                </span>
              </div>

              <div>
                <strong>
                  DSA
                </strong>

                <span>
                  Problem Solving ability and Algorithmic Thinking
                </span>
              </div>

              <div>
                <strong>
                  AI Integration
                </strong>

                <span>
                  Intelligent Applications using modern AI tools and APIs
                </span>
              </div>

              <div>
                <strong>
                  CLOUD Deployment
                </strong>

                <span>
                  Safe and secure Deployment & Infrastructure over cloud
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            SKILLS
        ================================================= */}

        <section
          id="skills"
          className="section"
        >

          <p className="section-label">
            02 — SKILLS
          </p>

          <h2 className="section-title">
            My technical

            <span>
              {" "}toolkit.
            </span>
          </h2>

          <div className="skills">

            {skills.map(
              (skill, index) => (

                <motion.div
                  className="skill-card"
                  key={`${skill}-${index}`}
                  whileHover={{
                    y: -4,
                  }}
                >

                  <span className="skill-dot"></span>

                  <span className="skill-name">
                    {skill}
                  </span>

                </motion.div>

              )
            )}

          </div>

        </section>


        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <section
          id="experience"
          className="section"
        >

          <p className="section-label">
            03 — EXPERIENCE
          </p>

          <h2 className="section-title">
            Where I've

            <span>
              {" "}learned and grown.
            </span>
          </h2>

          <div className="experience-list">

            {experience.map(
              (item, index) => (

                <Experience
                  key={index}
                  year={item.year}
                  title={item.title}
                  company={item.company}
                  description={item.description}
                />

              )
            )}

          </div>

        </section>


        {/* =================================================
            PROJECTS
        ================================================= */}

        <section
          id="projects"
          className="section"
        >

          <p className="section-label">
            04 — PROJECTS
          </p>

          <h2 className="section-title">
            Things I've

            <span>
              {" "}built.
            </span>
          </h2>

          <div className="projects">

            {projects.map(
              (project, index) => (

                <Project
                  key={index}

                  number={String(
                    index + 1
                  ).padStart(2, "0")}

                  title={
                    project.title
                  }

                  description={
                    project.description
                  }

                  tech={
                    project.tech
                  }

                  github={
                    project.github
                  }

                  live={
                    project.live
                  }

                  featured={
                    project.featured
                  }
                />

              )
            )}

          </div>

        </section>


        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="section contact"
        >

          <p className="section-label">
            05 — CONTACT
          </p>

          <h2 className="section-title">
            Let's build something

            <span>
              {" "}together.
            </span>
          </h2>

          <p className="contact-intro">
            I'm currently open to
            internships, entry-level
            roles, freelance projects
            and interesting collaborations.
          </p>


          <form
            className="contact-form"
            onSubmit={
              handleContactSubmit
            }
          >

            <div className="contact-fields">

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      name: e.target.value,
                    })
                  }
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      email: e.target.value,
                    })
                  }
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                placeholder="Tell me about your project..."
                rows="6"
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    message: e.target.value,
                  })
                }
                required
              />

            </div>


            <div className="contact-submit-row">

              <button
                type="submit"
                className="primary-button"
              >
                Send Message

                <FaArrowUpRightFromSquare
                  size={13}
                />
              </button>

            </div>


            {contactStatus && (
              <p className="contact-status">
                {contactStatus}
              </p>
            )}

          </form>


          <div className="contact-buttons">

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                social.email
              )}`}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              <FaEnvelope size={15} />

              Email Me
            </a>


            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <FaGithub size={16} />

              GitHub
            </a>


            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <FaLinkedin size={16} />

              LinkedIn
            </a>


            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Resume

              <FaArrowUpRightFromSquare
                size={13}
              />
            </a>

          </div>

        </section>

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer>

        <p>
          © {new Date().getFullYear()}{" "}
          {personal.name}
        </p>

      </footer>

    </div>
  );
}


/* =========================================================
   PROJECT COMPONENT
   ========================================================= */

function Project({
  number,
  title,
  description,
  tech,
  github,
  live,
  featured,
}) {
  return (
    <article className="project-card">

      <div className="project-top">

        <span className="project-number">
          {number}
        </span>

        {featured && (
          <span className="featured-label">
            Featured
          </span>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${title} GitHub repository`}
            className="project-github"
          >
            <FaGithub size={16} />
          </a>
        )}

      </div>


      <div className="project-content">

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

        {tech && (
          <div className="project-tech">
            {tech}
          </div>
        )}

      </div>


      <div className="project-links">

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            GitHub

            <FaArrowUpRightFromSquare
              size={11}
            />
          </a>
        )}

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            Live Demo

            <FaArrowUpRightFromSquare
              size={11}
            />
          </a>
        )}

      </div>

    </article>
  );
}


/* =========================================================
   EXPERIENCE COMPONENT
   ========================================================= */

function Experience({
  year,
  title,
  company,
  description,
}) {
  return (
    <article className="experience-card">

      <div className="experience-year">
        {year}
      </div>

      <div className="experience-content">

        <h3>
          {title}
        </h3>

        <h4>
          {company}
        </h4>

        <p>
          {description}
        </p>

      </div>

    </article>
  );
}


export default App;
