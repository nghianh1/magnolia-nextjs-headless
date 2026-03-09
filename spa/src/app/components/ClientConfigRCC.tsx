'use client';
import { config } from '@/magnolia.config';
import { RefService } from '@magnolia/react-editor';

export default function ClientConfigRCC() {
  console.log('client :>> ', window.location.href);
  if (!RefService.getConfigRef()) {
      RefService.setConfigRef(config);
  }

  return null;
}

