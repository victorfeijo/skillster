import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";

import AppHeader from '../components/AppHeader';
import TrainContainer from '../containers/TrainContainer';

class TrainScreen extends React.Component<Props, {}> {
  render() {
    return (
      <TrainContainer {...this.props} />
    );
  }
}

TrainScreen.navigationOptions = ({ navigation }) => {
  const onNavPress = () => null;

  return {
    header: (
      <AppHeader
        title="Train"
        onButtonPress={onNavPress}
      />
    ),
  };
};

export default TrainScreen;
