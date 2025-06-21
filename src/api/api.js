const API_URL = 'http://localhost:5000/api'; 

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/data`);  
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
