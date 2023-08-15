//actions

interface Action {
  type: string;
  payload?: any;
}

// const incrementAction: Action = { type: 'Increment' };

function reducer(state = 10, action: Action) {
  switch (action.type) {
    case 'Increment':
      return (state += 1);

    case 'Decrement':
      return (state -= 1);

    case 'Multiply':
      return state * action.payload;
    
      case 'Divide':
        return state / action.payload;

    default:
      return state;
  }
}

//use reducer -> action creators
