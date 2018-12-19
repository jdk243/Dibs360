import React from 'react';
import get from 'lodash.get';

import {
  View,
  asset,
} from 'react-360';
import Entity from 'Entity';
import { spaces } from './spaces';

const baseLocation = {
    x: -3,
    y: -1,
    z: 3.5,
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
        const nextLocationLinks = (get(spaces, get(event, 'detail.location')) || {}).links || [];
        const currentLocationName = get(event, 'detail.currentLocation');
        const nextLink = nextLocationLinks.find(link => {
            return get(link, 'link') === currentLocationName;
        });
        const translation = get(nextLink, 'translation');
        console.log('translation', translation);
        if (translation) {
            this.setState({
                x: baseLocation.x + (translation[0].translateX / 4),
                y: baseLocation.y,
                z: baseLocation.z + (translation[2].translateZ / 4),
            });
        }
    }

    render() {
        const { x, y, z } = this.state;
        console.log(`x: ${x}, y: ${y}, z: ${z}`);
        return (
            <View style={{
              transform: [{ translate: [x, y, z] }]
            }}>
                <Entity source={{obj: asset('table.obj') }}/>
            </View>
        )
    }
}
