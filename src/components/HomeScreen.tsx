import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";

import AppHeader from '../components/AppHeader';
import HomeContainer from '../containers/HomeContainer';

export interface Props {
  foo?: number;
  onIncrement?: () => void;
}

class HomeScreen extends React.Component<Props, {}> {
  render() {
    return (
      <HomeContainer {...this.props} />
    );
  }
}

HomeScreen.navigationOptions = ({ navigation }) => {
  const onNavPress = () => null;

  return {
    header: (
      <AppHeader
        title="Trains"
        onButtonPress={onNavPress}
      />
    ),
  };
};

export default HomeScreen;
