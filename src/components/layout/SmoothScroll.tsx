'use client';

import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};
