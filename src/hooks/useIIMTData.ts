import { useQuery } from '@tanstack/react-query';

export function useIIMTData(endpoint: string) {
  return useQuery({
    queryKey: ['iimt', endpoint],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/api/iimt/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint} data`);
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });
}
