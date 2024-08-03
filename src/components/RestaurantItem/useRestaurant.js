// src/hooks/useRestaurant.js

import { useQuery } from "@tanstack/react-query";
import { fetchRestaurantById } from "../../services/apiRestaurant";

export const useRestaurant = (id) => {
  return useQuery({
    queryKey: ["restaurant", id],
    queryFn: () => fetchRestaurantById(id),
    enabled: !!id, // Fetch only if id exists
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false, // Prevent refetch on window focus
  });
};
