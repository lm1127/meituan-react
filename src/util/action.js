import { ADD, REDUCE } from './actionType.js';


export function ADD_TODO (text) {
  return {
    type: ADD,
    text,
  }
}

export function REDUCE_TODO (text) {
  return {
    type: REDUCE,
    text,
  }
}