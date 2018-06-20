import { createAction } from 'redux-actions';
import * as constants from '../constants';

export interface IncrementFoo {
  type: constants.INCREMENT_FOO;
}

export interface DecrementFoo {
  type: constants.DECREMENT_FOO;
}

export type FooAction = IncrementFoo | DecrementFoo;

export const incrementFoo = createAction(constants.INCREMENT_FOO);

export function decrementFoo(): DecrementFoo {
  return {
    type: constants.DECREMENT_FOO,
  };
}
