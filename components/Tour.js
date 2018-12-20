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

export class Tour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location,
    };
  }

  moveLocation = (location, event) => {
    Environment.setBackgroundImage(asset(hans[location].assetName));
    // window.dispatchEvent(
    //   new CustomEvent('moveLocation', {
    //     detail: { location, currentLocation: this.state.location },
    //   })
    // );
    this.setState({ location });
  };

  renderNavTiles = () => {
    const currentLocation = hans[this.state.location];
    const adjacentLocations = currentLocation.links;

    return adjacentLocations.map(location => {
      console.log(location.link);
      console.log(location.translate);
      return (
        <View style={{ transform: [location.translate] }}>
          <VrButton
            style={styles.navButton}
            onClick={event => {
              return this.moveLocation(location.link, event);
            }}
          />
        </View>
      );
    });
  };

  render() {
    return <View>{this.renderNavTiles()}</View>;
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
