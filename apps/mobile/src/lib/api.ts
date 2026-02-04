import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3001';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
apiClient.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const mobileApiService = {
  // Auth
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),
  register: (data: any) =>
    apiClient.post('/auth/register', data),
  logout: () =>
    apiClient.post('/auth/logout'),

  // Listings
  getListings: (params?: any) =>
    apiClient.get('/listings', { params }),
  getListingById: (id: string) =>
    apiClient.get(`/listings/${id}`),

  // Payments
  getPayments: (params?: any) =>
    apiClient.get('/payments', { params }),
  createPayment: (data: any) =>
    apiClient.post('/payments', data),

  // Leases
  getLeases: (params?: any) =>
    apiClient.get('/leases', { params }),
  signLease: (id: string, data: any) =>
    apiClient.post(`/leases/${id}/sign`, data),

  // Agents
  getAgents: (params?: any) =>
    apiClient.get('/agents', { params }),
  getAgentById: (id: string) =>
    apiClient.get(`/agents/${id}`),
};

export default apiClient;
