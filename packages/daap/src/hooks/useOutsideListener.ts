import type { RefObject, MouseEvent } from 'react';
import { useEffect } from 'react';

// useOutsideListener react hook
export const useOutsideListener = (ref: RefObject<HTMLElement>, callback: Function) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent<HTMLElement>) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside as unknown as EventListener);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener);
    };
  }, [ref, callback]);
};
