// src/api.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

/**
 * Function to fetch news articles based on category, page number, and page size.
 * @param {string} category - The news category to fetch (default: 'general').
 * @param {number} page - The page number for pagination (default: 1).
 * @param {number} pageSize - The number of articles per page (default: 20).
 * @returns {Promise<Array>} - A promise that resolves to an array of articles.
 */
export const fetchNews = async (category = 'general', page = 1, pageSize = 20) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        category,
        apiKey: API_KEY, // Use the API key from the environment variable
        country: 'us',    // Change this as needed
        page,             // Page number for pagination
        pageSize,         // Number of articles per page
      },
    });

    return response.data.articles; // Return the articles directly
  } catch (error) {
    console.error("Error fetching news:", error.response ? error.response.data : error.message);
    return []; // Return an empty array to handle errors gracefully in your app
  }
};

/**
 * Function to fetch all available news categories.
 * This is just an example to demonstrate additional API calls you can make.
 */
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sources`, {
      params: {
        apiKey: API_KEY, // Use the API key from the environment variable
      },
    });

    return response.data.sources; // Return the sources directly
  } catch (error) {
    console.error("Error fetching categories:", error.response ? error.response.data : error.message);
    return []; // Return an empty array to handle errors gracefully
  }
};
