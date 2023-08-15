import { Action } from "../ngrx-fake/ngrx";

export function contadorReducer(state = 10, action: Action) {
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