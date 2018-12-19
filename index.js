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
import { home as ApartmentSpace, office as OfficeSpace } from './spaces';

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
    Environment.setBackgroundImage(asset(OfficeSpace.bulgari.assetName));
    this.setState({ scene: 'office' });
  };

  setApartment = () => {
    Environment.setBackgroundImage(asset(ApartmentSpace.foyer.assetName));
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
    width: 50,
    height: 50,
    borderRadius: 999,
    backgroundColor: '#BBBBBB',
    borderColor: '#639dda',
  },
});

AppRegistry.registerComponent('Dibs360', () => Dibs360);
