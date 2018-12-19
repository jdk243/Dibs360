import React from 'react';
import {
  View,
  asset,
} from 'react-360';
import Entity from 'Entity';

export class Dibs3603D extends React.Component {
    state = {
        x: 0,
        y: -1,
        z: -2,
    }
    render() {
        const { x, y, z } = this.state;
        return (
            <View style={{
              transform: [{ translate: [x, y, z] }]
            }}>
                <Entity source={{obj: asset('table.obj') }}/>
            </View>
        )
    }
}
