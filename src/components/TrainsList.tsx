import * as React from "react";
import { View } from "react-native";
import { Content, Text } from "native-base";

interface Props {
  navigation?: object;
}

class TrainsList extends React.Component<Props, {}> {
  render() {
    return (
      <Content>
        <Text>Train list</Text>
      </Content>
    );
  }
}

export default TrainsList;
