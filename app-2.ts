import {
    DecrementAction,
    DivideAction,
    MultiplyAction,
    ResetAction,
    incrementAction
} from './contador/contador.actions';
import { Action } from './ngrx-fake/ngrx';

export function reducer(state = 10, action: Action) {
  switch (action.type) {
    case 'Increment':
      return (state += 1);

    case 'Decrement':
      return (state -= 1);

    case 'Multiply':
      return state * action.payload;

    case 'Divide':
      return state / action.payload;

      case 'Reset':
        return 0;

    default:
      return state;
  }
}

console.log(reducer(10, incrementAction));
console.log(reducer(10, DecrementAction));
console.log(reducer(10, MultiplyAction));
console.log(reducer(10, DivideAction));
console.log(reducer(10, ResetAction));
