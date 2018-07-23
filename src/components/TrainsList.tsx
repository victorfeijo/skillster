import * as React from "react";
import { List, ListItem, View, Content, Text } from "native-base";

interface Props {
  navigation?: object;
}

class TrainsList extends React.Component<Props, {}> {
  componentWillMount = () => {
    this.props.getTrains();
  }

  render() {
    console.log(this.props.list.data);

    return (
      <Content>
        { this.props.list.loading ? (
        <Text>Carregando...</Text>
        ) : (
        <List>
          { this.props.list.data.map((train => (
          <ListItem>
            <Text>{train.name || 'Sem nome'}</Text>
          </ListItem>
          )))}
        </List>
        )}
      </Content>
    );
  }
}

export default TrainsList;
