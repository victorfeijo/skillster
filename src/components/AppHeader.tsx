import * as React from "react";
import { Header, Title, Button, Left, Right, Body, Icon, Text } from "native-base";

export interface Props {
  title: string;
  navigation?: object;
}

export default class AppHeader extends React.Component<Props, {}> {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent={true}>
            <Icon type="FontAwesome" name="bars" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
