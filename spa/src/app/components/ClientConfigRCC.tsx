'use client';
import { config } from '@/magnolia.config';
import { RefService } from '@magnolia/react-editor';

export default function ClientConfigRCC() {
  if (!RefService.getConfigRef()) {
      RefService.setConfigRef(config);
  }

  return null;
}

