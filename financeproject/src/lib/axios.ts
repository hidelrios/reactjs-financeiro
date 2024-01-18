import axios from 'axios';

const apiKey = 'nKffhAxJPFqtc7YSikLQgo';
export const apiUrl = `/api/quote/list?search=TR&sortBy=close&sortOrder=desc&limit=10&sector=finance&token=${apiKey}`

export const api = axios.create({
  baseURL: 'https://brapi.dev',
});

//