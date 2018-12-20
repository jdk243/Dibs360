import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset,
} from 'react-360';
import { hans } from '../spaces';
import { Dibs3603D } from './dibs3603d';

const origin = {
  x: 0,
  y: -1.4,
  z: 0,
};

export class Tour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location,
      tableX: -1.5,
      tableY: -0.5,
      tableZ: -2.3,
    };
  }

  moveLocation = (location, translate) => {
    Environment.setBackgroundImage(asset(hans[location].assetName));
    const { tableX, tableY, tableZ } = this.state;
    const tableCoordinates = {
      tableX: tableX + origin.x - translate[0],
      tableY: tableY + origin.y - translate[1],
      tableZ: tableZ + origin.z - translate[2],
    };
    this.setState({ location, ...tableCoordinates });
  };

  renderNavTiles = () => {
    const currentLocation = hans[this.state.location];
    const adjacentLocations = currentLocation.links;

    return adjacentLocations.map(location => {
      return (
        <View style={{ transform: [{ translate: location.translate }] }}>
          <VrButton
            style={styles.navButton}
            onClick={e => {
              return this.moveLocation(location.link, location.translate);
            }}
          />
        </View>
      );
    });
  };

  render() {
    const { tableX, tableY, tableZ } = this.state;
    return (
      <View>
        {this.renderNavTiles()}
        <Dibs3603D x={tableX} y={tableY} z={tableZ} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navButton: {
    width: 0.3,
    height: 0.3,
    borderRadius: 999,
    backgroundColor: '#0000ff',
    borderColor: '#639dda',
    transform: [{ rotateX: 90 }],
  },
});
