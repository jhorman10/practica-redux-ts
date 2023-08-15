import { Action } from './../ngrx-fake/ngrx';

export const incrementAction: Action = { type: 'Increment' };
export const DecrementAction: Action = { type: 'Decrement' };
export const MultiplyAction: Action = { type: 'Multiply', payload: 2 };
export const DivideAction: Action = { type: 'Divide', payload: 2 };
export const ResetAction: Action = { type: 'Reset' };
