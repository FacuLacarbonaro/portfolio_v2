import { Tooltip } from '@material-ui/core';
import React from 'react';

export const ReutilizableIcon = ({ alt, src }) => {
      return (
            <Tooltip title={alt} placement='bottom-start'>
                  <img src={src} alt={alt} style={{ height: '36px', cursor:"pointer" }} />
            </Tooltip>
      );
};
