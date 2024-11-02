// src/api.js
import axios from 'axios';

// Access the API key from the .env file
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (category = 'general', page = 1, pageSize = 20) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        category,
        apiKey: API_KEY, // Use the API key from the environment variable
        country: 'us', // Change this as needed
        page,          // Page number for pagination
        pageSize,      // Number of articles per page
      },
    });
    
    return response.data.articles; // Return the articles directly
  } catch (error) {
    console.error("Error fetching news:", error.response ? error.response.data : error.message);
    return []; // Return an empty array to handle errors gracefully in your app
  }
};
