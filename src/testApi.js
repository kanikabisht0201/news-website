// src/testApi.js
import axios from 'axios';

const API_KEY = '68170eeb4d91432aab7a49d8fca62cd4';

axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("API Error:", error.response ? error.response.data : error.message);
  });
