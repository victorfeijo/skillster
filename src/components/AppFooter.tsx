import * as React from 'react';
import { Button, Footer, FooterTab, Icon, Text } from 'native-base';

export interface Props {
  active: string;
}

class AppFooter extends React.Component<Props, {}> {
  render() {
    const statsActive = this.props.active === 'stats';
    const trainsActive = this.props.active === 'trains';
    const goalsActive = this.props.active === 'goals';

    return (
      <Footer>
        <FooterTab>
          <Button vertical={true} active={statsActive}>
            <Icon active={statsActive} name="bar-chart" type="FontAwesome" />
            <Text>Statistics</Text>
          </Button>
          <Button vertical={true} active={trainsActive}>
            <Icon active={trainsActive} name="bullseye" type="FontAwesome" />
            <Text>Trains</Text>
          </Button>
          <Button vertical={true} active={goalsActive}>
            <Icon active={goalsActive} name="cloud" type="FontAwesome" />
            <Text>Goals</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default AppFooter;
