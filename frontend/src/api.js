const API_URL = "https://anmol-portfolio-backend.onrender.com";

export async function getProfile() {
  const response = await fetch(`${API_URL}/profile`);

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  return response.json();
}

export async function getProjects() {
  const response = await fetch(`${API_URL}/projects`);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}