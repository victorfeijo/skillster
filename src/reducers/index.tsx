import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { FooAction } from '../actions';
import { StoreState } from '../types';
import { DECREMENT_FOO, INCREMENT_FOO } from '../constants';

const newTrain = combineReducers({
  counter: handleActions({
    [INCREMENT_FOO]: (state: number, { payload }): number => {
      return state + 1;
    },
  }, 0),
});

const reducers = combineReducers({
  newTrain,
});

export default reducers;
