import * as React from "react";
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import HomeScreen from './components/HomeScreen';
import NewTrainScreen from './components/NewTrainScreen';
import TrainScreen from './components/TrainScreen';
import reducers from './reducers';
import { StoreState } from './types';

const store = createStore<StoreState>(
  reducers,
  applyMiddleware(thunk),
);

const RootStack = StackNavigator({
  Home: { screen: HomeScreen },
  NewTrain: { screen: NewTrainScreen },
  Train: { screen: TrainScreen },
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
