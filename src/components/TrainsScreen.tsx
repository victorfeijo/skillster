import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from "native-base";

import AppHeader from '../components/AppHeader';

class TrainsScreen extends React.Component<{}, {}> {
  render() {
    return (
      <Title> Train screen :) </Title>
    );
  }
}

TrainsScreen.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <AppHeader navigation={navigation} title="New Train" />
    ),
  };
};

export default TrainsScreen;
