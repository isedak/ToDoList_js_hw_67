import axios from 'axios';
import { apiUrl } from './apiUrl';

export const toDoInstance = axios.create({
    baseURL: apiUrl
});