import axios from 'axios';
import { URL_API } from '../constants/database';

const instance = axios.create({
  baseURL: URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;