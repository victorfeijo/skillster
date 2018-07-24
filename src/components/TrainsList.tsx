import * as React from "react";
import { List, ListItem, View, Content, Text } from "native-base";
import { ScrollView } from "react-native"

interface Props {
  list: {
    data: object[];
    loading: boolean;
  };
}

class TrainsList extends React.Component<Props, {}> {
  componentWillMount() {
    this.props.getTrains();
  }

  onClickTrain = (train) => () => (
    console.log(train)
  )

  renderList = () => (
    this.props.list.data.map((train) => (
      <ListItem button={true} onPress={this.onClickTrain(train)}>
        <Text>{train.name || 'Sem nome'}</Text>
      </ListItem>
    ))
  )

  render() {
    return (
      <ScrollView style={{ width: '100%', height: '100%' }}>
        {this.props.list.loading ? (<Text>Carregando...</Text>) : this.renderList()}
      </ScrollView>
    );
  }
}

export default TrainsList;
