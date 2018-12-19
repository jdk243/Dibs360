import React from 'react';
import get from 'lodash.get';

import {
  View,
  asset,
} from 'react-360';
import Entity from 'Entity';
import { spaces } from './spaces';

const baseLocation = {
    x: 0,
    y: -1,
    z: -2,
};

export class Dibs3603D extends React.Component {
    state = {
        x: baseLocation.x,
        y: baseLocation.y,
        z: baseLocation.z,
    }

    constructor(props) {
        super(props);
        this.handleNewLocation = this.handleNewLocation.bind(this);
    };

    componentDidMount() {
        window.addEventListener('moveLocation', this.handleNewLocation);
    }

    componentWillUnmount() {
        window.removeEventListener('moveLocation');
    }

    handleNewLocation(event) {
        const nextLocation = get(spaces, get(event, 'detail.location'));
        const currentLocation = get(spaces, get(event, 'detail.currentLocation'));
        console.log('nextLocation', nextLocation);
        console.log('currentLocation', currentLocation);
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
