import { ADD_TODO, REDUCE_TODO } from './action.js';

const inititalstate = {
  falg: false,
  name: '张三',
}

export function reducer (state = inititalstate, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        flag: true,
        name: '李四'
      }
    case 'REDUCE_TODO':
      return {
        ...state,
        flag: false,
        name: '张三',
      }
    default:
      return state;
  }
}
