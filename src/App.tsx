import * as React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import NewTrainScreen from './components/NewTrainScreen';
import foo from './reducers';
import { StoreState } from './types';

const store = createStore<StoreState>(foo, { foo: 0 });

const RootStack = StackNavigator({
  Home: { screen: HomeScreen },
  NewTrain: { screen: NewTrainScreen },
  initialRouteName: 'Home',
});

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
