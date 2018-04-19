import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from "native-base";

import { Provider, Dispatch, connect } from 'react-redux';
import { createStore } from 'redux';
import foo from '../reducers';
import * as actions from '../actions/index';
import { StoreState } from '../types';

import HomeScreen from '../components/HomeScreen';

function mapStateToProps({ foo }: StoreState) {
  return {
    foo,
  };
}

function mapDispatchToProps(dispatch: Dispatch<actions.FooAction>) {
  return {
    onDecrement: () => dispatch(actions.decrementFoo()),
    onIncrement: () => dispatch(actions.incrementFoo()),
  };
}

class HomeContainer extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <Content>
          <Text style={styles.welcome}>Hello test!</Text>
          <View style={styles.button}>
            <Button onPress={() => this.props.navigation.navigate("Trains")}>
              <Icon name="heart" />
              <Text style={styles.welcome}>
                new train
              </Text>
            </Button>
          </View>
          <Text> {this.props.foo} </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full={true}>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
  },
  instructions: {
    color: "#333333",
    marginBottom: 5,
    textAlign: "center",
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
