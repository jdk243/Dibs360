import React from 'react';
import get from 'lodash.get';

import { View, asset } from 'react-360';
import Entity from 'Entity';
import { hans } from '../spaces';

export const Dibs3603D = ({ x, y, z }) => (
  <View
    style={{
      transform: [
        {
          translate: [x, y, z],
        },
      ],
    }}
  >
    <Entity source={{ obj: asset('table.obj') }} />
  </View>
);
