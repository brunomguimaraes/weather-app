import React from 'react';

function useDebouncedFunction(fn: Function, delay: number) {
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  return (...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => fn(...args), delay);
  };
}

export default useDebouncedFunction;
