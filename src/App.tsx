import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class App extends React.Component<{}, {}> {
  state = {
    show: false
  }

  changeShow = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon type='FontAwesome' name='home' />
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
            <Button onPress={this.changeShow}>
              <Icon name='heart' />
              <Text style={styles.welcome}>
                text
              </Text>
            </Button>
          </View>
          { this.state.show &&
            <Text> show up :) </Text>
          }
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
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
    alignSelf: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
