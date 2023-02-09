import { API_BASE_URL } from "../utils/constants";

export async function getUsersApi() {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserApi(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
