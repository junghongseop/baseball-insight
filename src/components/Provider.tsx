'use client';

import { OverlayProvider } from '@toss/use-overlay';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => {
  return <OverlayProvider>{children}</OverlayProvider>;
};

export default Provider;
