'use client';

import { motion } from 'motion/react';
import React, { PropsWithChildren } from 'react';

export const SlideUpContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial="offscreen"
      animate="onscreen"
      transition={{ type: 'spring', duration: 0.8 }}
      variants={{
        offscreen: { opacity: 0, y: 20 },
        onscreen: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
