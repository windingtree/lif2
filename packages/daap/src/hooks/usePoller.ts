import { useState, useCallback, useEffect } from 'react';

import Logger from '../utils/logger';

// Initialize logger
const logger = Logger('usePoller');

// usePoller react hook
export const usePoller = (
  fn: Function,
  delay: number | null,
  enabled = true
) => {
  const [pollerOn, setPollerOn] = useState(enabled);
  const tick = useCallback(() => {
    try {
      fn();
    } catch (error) {
      logger.error(error);
    }
  }, [fn]);

  useEffect(() => {
    setPollerOn(enabled);
  }, [enabled]);

  useEffect(() => {
    if (pollerOn && delay) {
      const id = setInterval(tick, delay);
      tick();
      return () => clearInterval(id);
    }
  }, [tick, delay, pollerOn]);
};
