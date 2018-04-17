import * as React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import foo from './reducers';
import { StoreState } from './types';
import HomeContainer from './containers/HomeContainer';

const store = createStore<StoreState>(foo, { foo: 0 });

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );
  }
}
