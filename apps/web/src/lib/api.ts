import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API Service Methods
export const apiService = {
  // Auth
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),
  register: (data: any) =>
    apiClient.post('/auth/register', data),
  logout: () =>
    apiClient.post('/auth/logout'),

  // Users
  getUser: (id: string) =>
    apiClient.get(`/users/${id}`),
  updateUser: (id: string, data: any) =>
    apiClient.put(`/users/${id}`, data),

  // Listings
  getListings: (params?: any) =>
    apiClient.get('/listings', { params }),
  getListingById: (id: string) =>
    apiClient.get(`/listings/${id}`),
  createListing: (data: any) =>
    apiClient.post('/listings', data),
  updateListing: (id: string, data: any) =>
    apiClient.put(`/listings/${id}`, data),
  deleteListing: (id: string) =>
    apiClient.delete(`/listings/${id}`),

  // Payments
  getPayments: (params?: any) =>
    apiClient.get('/payments', { params }),
  getPaymentById: (id: string) =>
    apiClient.get(`/payments/${id}`),
  createPayment: (data: any) =>
    apiClient.post('/payments', data),

  // Leases
  getLeases: (params?: any) =>
    apiClient.get('/leases', { params }),
  getLeaseById: (id: string) =>
    apiClient.get(`/leases/${id}`),
  signLease: (id: string, data: any) =>
    apiClient.post(`/leases/${id}/sign`, data),

  // Agents
  getAgents: (params?: any) =>
    apiClient.get('/agents', { params }),
  getAgentById: (id: string) =>
    apiClient.get(`/agents/${id}`),
  registerAgent: (data: any) =>
    apiClient.post('/agents', data),

  // Inquiries
  getInquiries: (params?: any) =>
    apiClient.get('/inquiries', { params }),
  createInquiry: (data: any) =>
    apiClient.post('/inquiries', data),

  // Payment Groups
  getPaymentGroups: (params?: any) =>
    apiClient.get('/payment-groups', { params }),
  createPaymentGroup: (data: any) =>
    apiClient.post('/payment-groups', data),
  joinPaymentGroup: (code: string) =>
    apiClient.post(`/payment-groups/join/${code}`),
};

export default apiClient;
