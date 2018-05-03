import * as React from "react";
import { Header, Title, Button, Left, Right, Body, Icon, Text } from "native-base";

export interface Props {
  title: string;
  icon?: string;
  onButtonPress(event: any);
}

class AppHeader extends React.Component<Props, {}> {
  public static defaultProps: Partial<Props> = {
    icon: 'bars',
  };

  render() {
    const { title, icon, onButtonPress } = this.props;

    return (
      <Header>
        <Left>
          <Button
            onPress={onButtonPress}
            transparent={true}
          >
            <Icon type="FontAwesome" name={icon} />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default AppHeader;
