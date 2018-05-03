import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";

import AppHeader from '../components/AppHeader';
import NewTrainContainer from '../containers/NewTrainContainer';

const styles = StyleSheet.create({
  closeBtn: {
    alignSelf: 'flex-end',
    padding: 10,
  },
});

class NewTrainScreen extends React.Component<{}, {}> {
  render() {
    return (
      <NewTrainContainer {...this.props} />
    );
  }
}

NewTrainScreen.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <AppHeader
        navigation={navigation}
        title="New Train"
        onButtonPress={() => navigation.goBack()}
        icon="arrow-left"
      />
    ),
  };
};

export default NewTrainScreen;
