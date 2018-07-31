import { Container } from "native-base";
import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { connect } from 'react-redux';

import actions from '../actions/index';
import foo from '../reducers';
import { StoreState } from '../types';

import AppFooter from '../components/AppFooter';
import HomeScreen from '../components/HomeScreen';
import TrainsFab from '../components/TrainsFab';
import TrainsList from '../components/TrainsList';

function mapStateToProps(state: StoreState) {
  return state.trains;
}

const mapDispatchToProps = {
  ...actions.trains,
};

class HomeContainer extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <TrainsList {...this.props} />
        <TrainsFab {...this.props} />
        <AppFooter active="trains" />
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
