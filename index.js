import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset,
} from 'react-360';
import get from 'lodash.get';
import { spaces } from './spaces';

import { Dibs3603D } from './dibs3603d';

export default class Dibs360 extends React.Component {
  // Our component will keep track of this state
  state = {
    scene: 'home',
  };

  setHome = () => {
    Environment.setBackgroundImage(asset('360_world.jpg'));
    this.setState({ scene: 'home' });
  };

  setOffice = () => {
    Environment.setBackgroundImage(asset(spaces.office.bulgari.assetName));
    this.setState({ scene: 'office' });
  };

  setApartment = () => {
    Environment.setBackgroundImage(asset(spaces.apartment.foyer.assetName));
    this.setState({ scene: 'apartment' });
  };

  render() {
    const { scene } = this.state;
    return (
      <View style={styles.panel}>
        {scene !== 'home' && (
          <VrButton onClick={this.setHome} style={styles.button}>
            <Text style={styles.greeting}>Go Home</Text>
          </VrButton>
        )}
        {scene !== 'office' && (
          <VrButton onClick={this.setOffice} style={styles.button}>
            <Text style={styles.greeting}>Go to the Office</Text>
          </VrButton>
        )}
        {scene !== 'apartment' && (
          <VrButton onClick={this.setApartment} style={styles.button}>
            <Text style={styles.greeting}>Go to the Apartment</Text>
          </VrButton>
        )}
        {/* <VrButton style={styles.navButton} /> */}
      </View>
    );
  }
}

export class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location,
    };
  }

  moveLocation = location => {
    Environment.setBackgroundImage(asset(get(spaces, location).assetName));
    this.setState({ location });
  };

  renderNavTiles = () => {
    const currentLocation = get(spaces, this.state.location);
    const adjacentLocations = currentLocation.links;

    console.log(currentLocation);
    return adjacentLocations.map(location => {
      console.log(location.link);
      console.log(location.translation);
      return (
        <View style={{ transform: location.translation }}>
          <VrButton
            style={styles.navButton}
            onClick={() => this.moveLocation(location.link)}
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
  panel: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 1000,
    height: 600,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  navButton: {
    width: 1,
    height: 1,
    borderRadius: 999,
    backgroundColor: '#0000ff',
    borderColor: '#639dda',
    transform: [{ rotateX: 90 }],
  },
});

AppRegistry.registerComponent('Dibs360', () => Dibs360);
AppRegistry.registerComponent('Dibs3603D', () => Dibs3603D);
AppRegistry.registerComponent('Location', () => Location);
