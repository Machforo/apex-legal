import { useQuery } from '@tanstack/react-query';

export function useLegalData(endpoint: string) {
  return useQuery({
    queryKey: ['legal', endpoint],
    queryFn: async () => {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
      const response = await fetch(`${apiBase}/legal/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint} data`);
      }
      return response.json();
    },
    retry: 2,
  });
}
