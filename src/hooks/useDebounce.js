import { useRef } from "react";

export default function useDebounce(func, delay) {
    const timeoutRef = useRef(null);
  
    return function (...args) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => func(...args), delay);
    };
  }
  