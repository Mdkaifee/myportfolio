// frontend/src/api/api.js
const API_URL = 'http://localhost:5000/api';  // API base URL

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/data`);  // Correct API endpoint
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
