import * as React from 'react';
import { remove, curry } from 'ramda';
import { Platform, StyleSheet, View } from 'react-native';
import { Icon, Button, Content, Card, CardItem, Body, Text, Form, Item, Label, Input, Grid, Row, Col, View } from 'native-base';

import { Provider, Dispatch, connect } from 'react-redux';
import foo from '../reducers';
import actions from '../actions/index';
import { StoreState } from '../types';

function mapStateToProps(state: StoreState) {
  return state.trains.form;
}

const mapDispatchToProps = {
  ...actions.trains,
};

const styles = StyleSheet.create({
  bottomBtns: {
    justifyContent: 'space-between',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 12,
  },
  closeBtn: {
    alignSelf: 'flex-end',
  },
  content: {
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
  },
});

class NewTrainContainer extends React.Component<{}, {}> {
  public state = {
    name: '',
    tasks: [{
      name: '',
      tries: '',
    }],
  };

  onChangeName = (value) => {
    this.setState({ name: value });
  }

  removeTask = (idx: number) => (
    () => {
      const { tasks } = this.state;

      if (tasks.length > 1) {
        this.setState({ tasks: remove(idx, 1, this.state.tasks) });
      }
    }
  )

  onChangeTaskName = (idx: number, text: string) => {
    const { tasks } = this.state;
    tasks[idx].name = text;

    this.setState({ tasks });
  }

  onChangeTaskTries = (idx: number, text: string) => {
    const { tasks } = this.state;
    tasks[idx].tries = text;

    this.setState({ tasks });
  }

  addNewTask = () => {
    this.setState({ tasks: [...this.state.tasks, { name: '', tries: ''}] });
  }

  onSaveNewTrain = () => {
    this.props.saveNewTrain(this.state);
    this.props.navigation.navigate('Home');
  }

  renderTaskForm = (task: object, idx: number) => (
    <Card key={idx} style={{ marginTop: 12 }}>
      <Button style={styles.closeBtn} transparent={true} danger={true} onPress={curry(this.removeTask)(idx)}>
        <Icon type="FontAwesome" name="close" />
      </Button>

      <CardItem>
        <Item floatingLabel={true}>
          <Label>Task name</Label>
          <Input onChangeText={curry(this.onChangeTaskName)(idx)} value={this.state.tasks[idx].name} />
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
        <Form style={styles.content}>
          <Item floatingLabel={true}>
            <Label>Train name</Label>
            <Input value={this.state.name} onChangeText={this.onChangeName} />
          </Item>

          <View style={styles.taskForm}>
            {this.state.tasks.map((task, idx) => this.renderTaskForm(task, idx))}
          </View>

          <Grid>
            <Row style={styles.bottomBtns}>
              <Button bordered={true} success={true} onPress={this.addNewTask}>
                <Text>Add Task</Text>
              </Button>

              <Button onPress={this.onSaveNewTrain}>
                <Text>Save</Text>
              </Button>
            </Row>
          </Grid>
        </Form>
      </Content>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTrainContainer);
