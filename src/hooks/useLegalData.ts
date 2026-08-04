import { useQuery } from '@tanstack/react-query';

export function useLegalData(endpoint: string) {
  return useQuery({
    queryKey: ['legal', endpoint],
    queryFn: async () => {
      const apiBase = import.meta.env.VITE_API_URL || "https://ishan-backend-g096.onrender.com/api";
      const response = await fetch(`${apiBase}/legal/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint} data`);
      }
      return response.json();
    },
    retry: 2,
  });
}
