import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from "native-base";

import { Provider, Dispatch, connect } from 'react-redux';
import { createStore } from 'redux';
import foo from '../reducers';
import * as actions from '../actions/index';
import { StoreState } from '../types';

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

export interface Props {
  foo?: number;
  onIncrement?: () => void;
}

class HomeContainer extends React.Component<Props, {}> {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent={true}>
              <Icon type="FontAwesome" name="home" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text style={styles.welcome}>Hello test!</Text>
          <View style={styles.button}>
            <Button onPress={this.props.onIncrement}>
              <Icon name="heart" />
              <Text style={styles.welcome}>
                text
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
