import axios from 'axios';

export const IMDB_API_URL = 'https://imdb-api.com/en/API/';

export const IMDB_API_KEY = 'k_mqkzcvg4';

export const IMDB_API = axios.create({
  baseURL: IMDB_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
