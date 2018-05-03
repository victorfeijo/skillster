import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Icon, Button, Content, Card, CardItem, Body, Text, Form, Item, Label, Input } from "native-base";

import { Provider, Dispatch, connect } from 'react-redux';
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

const styles = StyleSheet.create({
  closeBtn: {
    alignSelf: 'flex-end',
    padding: 10,
  },
});

class NewTrainContainer extends React.Component<{}, {}> {
  public state = {
    name: '',
    tasks: [{
      name: '',
      tries: '',
    }, {
      name: '',
      tries: '',
    }],
  };

  onChangeName = (value) => {
    this.setState({ name: value });
  }

  renderTry = () => (
    <Card>
      <Button style={styles.closeBtn} transparent={true} danger={true}>
        <Icon type="FontAwesome" name="close" />
      </Button>

      <CardItem>
        <Item floatingLabel={true}>
          <Label>Task name</Label>
          <Input />
        </Item>
      </CardItem>

      <CardItem>
        <Item floatingLabel={true}>
          <Label>Number of tries</Label>
          <Input keyboardType="numeric" />
        </Item>
      </CardItem>
    </Card>
  )

  render() {
    return (
      <Content>
        <Form>
          <Item floatingLabel={true}>
            <Label>Train name</Label>
            <Input value={this.state.name} onChangeText={this.onChangeName} />
          </Item>

          { this.state.tasks.map((v) => this.renderTry()) }

        </Form>
      </Content>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTrainContainer);
