import * as constants from '../constants';

export interface IncrementFoo {
  type: constants.INCREMENT_FOO;
}

export interface DecrementFoo {
  type: constants.DECREMENT_FOO;
}

export type FooAction = IncrementFoo | DecrementFoo;

export function incrementFoo(): IncrementFoo {
  return {
    type: constants.INCREMENT_FOO,
  };
}

export function decrementFoo(): DecrementFoo {
  return {
    type: constants.DECREMENT_FOO,
  };
}
