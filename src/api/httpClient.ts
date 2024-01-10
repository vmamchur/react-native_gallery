import axios from 'axios';
import {UNSPLASH_API_KEY} from '@env';

const httpClient = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    ['Accept-Version']: 'v1',
    Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
  },
});

export default httpClient;
