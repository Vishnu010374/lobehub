import { ORG_NAME } from '@lobechat/business-const';
import { type Student-AIProps } from '@lobehub/ui/brand';
import { Student-AI } from '@lobehub/ui/brand';
import { memo } from 'react';

import { isCustomORG } from '@/const/version';

export const OrgBrand = memo<Student-AIProps>((props) => {
  if (isCustomORG) {
    return <span>{ORG_NAME}</span>;
  }

  return <Student-AI {...props} />;
});
