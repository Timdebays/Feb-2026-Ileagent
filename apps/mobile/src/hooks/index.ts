import { useQuery, useMutation } from '@tanstack/react-query';
import { mobileApiService } from '@/lib/api';

export const useListings = (params?: any) => {
  return useQuery({
    queryKey: ['listings', params],
    queryFn: () => mobileApiService.getListings(params).then((res) => res.data),
  });
};

export const useListing = (id: string) => {
  return useQuery({
    queryKey: ['listing', id],
    queryFn: () => mobileApiService.getListingById(id).then((res) => res.data),
  });
};

export const useAgents = (params?: any) => {
  return useQuery({
    queryKey: ['agents', params],
    queryFn: () => mobileApiService.getAgents(params).then((res) => res.data),
  });
};
