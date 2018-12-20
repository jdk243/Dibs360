import React from 'react';
import get from 'lodash.get';

import { View, asset } from 'react-360';
import Entity from 'Entity';
import { hans } from '../spaces';

export class Dibs3603D extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: props.x,
      y: props.y,
      z: props.z,
    };
  }

  render() {
    const { x, y, z } = this.props;
    console.log(`x: ${x}, y: ${y}, z: ${z}`);
    return (
      <View
        style={{
          transform: [
            {
              translate: [x, y, z],
            },
          ],
        }}>
        <Entity source={{ obj: asset('table.obj') }} />
      </View>
    );
  }
}
