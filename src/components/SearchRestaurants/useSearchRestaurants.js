// src/hooks/useSearchRestaurants.js

import { useQuery } from "@tanstack/react-query";
import { searchRestaurants } from "../../services/apiRestaurant";

export const useSearchRestaurants = (name, type) => {
  return useQuery({
    queryKey: ["searchRestaurants", name, type],
    queryFn: () => searchRestaurants(name, type),
    enabled: false, // Disable automatic fetch, we'll trigger it manually
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false, // Optional: Prevent refetch on window focus
  });
};
