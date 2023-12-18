import { MOTION_CONFIG } from '@moth-constants/animation';
import { MotionConfig } from 'framer-motion';
import { Suspense } from 'react';
import { MothProvider } from '@moth-state/Provider';
import { Main } from './main';

export const OstWip = () => (
  <Suspense fallback={null}>
    <MothProvider>
      <MotionConfig {...MOTION_CONFIG}>
        <Main />
      </MotionConfig>
    </MothProvider>
  </Suspense>
);
