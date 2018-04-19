import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from "native-base";

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
  return {
    header: (
      <AppHeader navigation={navigation} title="Trains" />
    ),
  };
};

export default HomeScreen;
