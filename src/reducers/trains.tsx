import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as c from '../constants';
import { StoreState } from '../types';

const trains = combineReducers({
  form: combineReducers({
    loading: handleActions({
      [c.SAVE_NEW_TRAIN]: (state: boolean, { payload }): boolean => true,
      [c.SAVE_NEW_TRAIN_DONE]: (state: boolean, { payload }): boolean => false,
    }, false),
    saved: handleActions({
      [c.SAVE_NEW_TRAIN]: (state: object, { payload }): object => ( {} ),
      [c.SAVE_NEW_TRAIN_DONE]: (state: object, { payload }): object => payload,
    }, {}),
  }),
});

export default trains;
