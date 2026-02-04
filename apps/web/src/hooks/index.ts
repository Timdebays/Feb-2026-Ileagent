import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiService } from '@/lib/api';

// User hooks
export const useUser = (id: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => apiService.getUser(id).then((res) => res.data),
  });
};

// Listings hooks
export const useListings = (params?: any) => {
  return useQuery({
    queryKey: ['listings', params],
    queryFn: () => apiService.getListings(params).then((res) => res.data),
  });
};

export const useListing = (id: string) => {
  return useQuery({
    queryKey: ['listing', id],
    queryFn: () => apiService.getListingById(id).then((res) => res.data),
  });
};

export const useCreateListing = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => apiService.createListing(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listings'] });
    },
  });
};

// Payments hooks
export const usePayments = (params?: any) => {
  return useQuery({
    queryKey: ['payments', params],
    queryFn: () => apiService.getPayments(params).then((res) => res.data),
  });
};

// Agents hooks
export const useAgents = (params?: any) => {
  return useQuery({
    queryKey: ['agents', params],
    queryFn: () => apiService.getAgents(params).then((res) => res.data),
  });
};

export const useAgent = (id: string) => {
  return useQuery({
    queryKey: ['agent', id],
    queryFn: () => apiService.getAgentById(id).then((res) => res.data),
  });
};
