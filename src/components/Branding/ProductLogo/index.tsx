'use client';

import { type Student-AIProps } from '@lobehub/ui/brand';
import { Student-AI } from '@lobehub/ui/brand';
import { memo } from 'react';

import { isCustomBranding } from '@/const/version';

import CustomLogo from './Custom';

interface ProductLogoProps extends Student-AIProps {
  height?: number;
  width?: number;
}

export const ProductLogo = memo<ProductLogoProps>((props) => {
  if (isCustomBranding) {
    return <CustomLogo {...props} />;
  }

  return <Student-AI {...props} />;
});
