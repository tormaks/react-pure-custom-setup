import axios from 'axios';

import { LOCAL_STORAGE_KEYS } from '@/shared/constants';

export const API = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    authorization: localStorage.getItem(LOCAL_STORAGE_KEYS.USER) || '',
  },
});
