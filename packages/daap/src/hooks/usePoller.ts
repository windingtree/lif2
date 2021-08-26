import { useCallback, useEffect } from 'react';

import Logger from '../utils/logger';

// Initialize logger
const logger = Logger('usePoller');

export interface Ref {
  current: Function;
}

// usePoller react hook
export const usePoller = (
  fn: Function,
  delay: number | null,
  dependency?: unknown | undefined
) => {
  const tick = useCallback(() => {
    try {
      fn();
    } catch (error) {
      logger.error(error);
    }
  }, [fn]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(tick, delay);
      tick();
      return () => clearInterval(id);
    }
  }, [tick, delay, dependency]);
};
