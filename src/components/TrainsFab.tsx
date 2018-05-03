import * as React from "react";
import { View } from "react-native";
import { Content, Button, Icon, Text, Fab } from "native-base";

interface Props {
  navigation?: object;
}

class TrainsFab extends React.Component<Props, {}> {
  navigateToTrains = () => {
    this.props.navigation.navigate('NewTrain');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={this.navigateToTrains}
        >
          <Icon name="add" type="MaterialIcons" />
        </Fab>
      </View>
    );
  }
}

export default TrainsFab;
