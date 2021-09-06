import { useEffect } from 'react';

import Logger from '../utils/logger';

// Initialize logger
const logger = Logger('usePoller');

// usePoller react hook
export const usePoller = (
  fn: Function,
  delay: number | null,
  enabled = true,
  name?: string
) => {
  useEffect(() => {
    if (enabled && delay) {
      const id1 = setInterval(fn, delay);
      const id0 = setTimeout(fn, 0);
      logger.info(`Poller ${name ? '"name" ' : ' '}started`);
      return () => {
        clearTimeout(id0);
        clearInterval(id1);
        logger.info(`Poller ${name ? '"name" ' : ' '}stopped`);
      };
    }
  }, [fn, name, delay, enabled]);
};
