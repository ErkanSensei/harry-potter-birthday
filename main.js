/** In order for logging to stream to XDE or the exp CLI you must import the
  * exponent module at some point in your app */
import Exponent from 'exponent';

import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import HomeScreen from './screens/HomeScreen'

class AppContainer extends React.Component {
  render() {
    return (
      <HomeScreen />
    )
  }
}
AppRegistry.registerComponent('main', () => AppContainer);
