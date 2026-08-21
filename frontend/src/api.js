const API_URL = "https://anmol-portfolio-backend.onrender.com";

export async function getProfile() {
  const response = await fetch(`${API_URL}/api/profile`);

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  return response.json();
}

export async function getProjects() {
  const response = await fetch(`${API_URL}/api/projects`);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}