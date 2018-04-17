import { FooAction } from '../actions';
import { StoreState } from '../types';
import { DECREMENT_FOO, INCREMENT_FOO } from '../constants';

export default function foo(state: StoreState, action: FooAction): StoreState {
  switch (action.type) {
    case INCREMENT_FOO:
      return { ...state, foo: state.foo + 1 };
    case DECREMENT_FOO:
      return { ...state, foo: Math.max(1, state.foo - 1) };
    default:
      return state;
  }
}
