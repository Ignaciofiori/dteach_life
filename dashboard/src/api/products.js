import { API_BASE_URL } from "../utils/constants";

export async function getProductsApi() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getProductApi(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
