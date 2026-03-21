const API = "http://localhost:5000/api";

/* ------------------ HELPERS ------------------ */
const setText = (id, text) => {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
};

const createSkill = (skill) => {
  const span = document.createElement("span");
  span.innerText = skill;
  return span;
};

const createProjectCard = (project) => {
  const div = document.createElement("div");
  div.className = "project";

  div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-links">
      ${project.github ? `<a href="${project.github}" target="_blank">GitHub</a>` : ""}
      ${project.live ? `<a href="${project.live}" target="_blank">Live</a>` : ""}
    </div>
  `;

  return div;
};

/* ------------------ PROFILE ------------------ */
const loadProfile = async () => {
  try {
    const res = await fetch(`${API}/profile`);
    if (!res.ok) throw new Error("API Error");

    const profile = await res.json();

    setText("name", profile.name);
    setText("bio", profile.bio);

    document.getElementById("github").href = profile.socialLinks.github;
    document.getElementById("linkedin").href = profile.socialLinks.linkedin;

    const skillsContainer = document.getElementById("skillsList");
    skillsContainer.innerHTML = "";

    profile.skills.forEach(skill => {
      skillsContainer.appendChild(createSkill(skill));
    });

  } catch (err) {
    console.error("Profile load failed:", err);

    // Fallback (VERY IMPORTANT)
    setText("name", "Anmol Chauhan");
    setText("bio", "Full Stack Developer | MERN | AI Enthusiast");

    const skillsContainer = document.getElementById("skillsList");
    ["Java", "JavaScript", "React", "Node.js"].forEach(skill => {
      skillsContainer.appendChild(createSkill(skill));
    });
  }
};

/* ------------------ PROJECTS ------------------ */
const loadProjects = async () => {
  const container = document.getElementById("projectsContainer");
  container.innerHTML = "<p>Loading projects...</p>";

  try {
    const res = await fetch(`${API}/projects`);
    if (!res.ok) throw new Error("API Error");

    const projects = await res.json();
    container.innerHTML = "";

    projects.forEach(project => {
      container.appendChild(createProjectCard(project));
    });

  } catch (err) {
    console.error("Projects load failed:", err);

    // Fallback projects
    container.innerHTML = "";
    const fallbackProjects = [
      {
        title: "TravelMate",
        description: "MERN travel planner with authentication",
        github: "#"
      },
      {
        title: "AI Video Generator",
        description: "Automated video creation tool",
        github: "#"
      }
    ];

    fallbackProjects.forEach(p => {
      container.appendChild(createProjectCard(p));
    });
  }
};

/* ------------------ CONTACT ------------------ */
const handleContactForm = () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    status.innerText = "Sending...";
    status.style.color = "#facc15";

    const formData = {
      name: form.querySelector("input").value,
      email: form.querySelector("input[type='email']").value,
      message: form.querySelector("textarea").value
    };

    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        status.innerText = "✅ Message sent successfully!";
        status.style.color = "lightgreen";
        form.reset();
      } else {
        throw new Error("Failed");
      }

    } catch (err) {
      console.error("Contact error:", err);
      status.innerText = "❌ Failed to send message. Try again.";
      status.style.color = "red";
    }
  });
};

/* ------------------ INIT ------------------ */
document.addEventListener("DOMContentLoaded", () => {
  loadProfile();
  loadProjects();
  handleContactForm();
});
