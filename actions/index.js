export const moveBox = (id) => {

  //might want to return a function here and check for valid move
  return {
    type: 'MOVE_BOX',
    id,
  }
}

export const VALID_MOVES = [
    [1,3],
    [0,2,4],
    [1,5],
    [0,4,6],
    [1,3,5,7],
    [2,4,8],
    [3,7],
    [4,6,8],
    [5,7],
  ]
  // export const addTodo = (text) => {
  //   return {
  //     type: 'ADD_TODO',
  //     id: nextTodoId++,
  //     text
  //   }
  // }

// export const setVisibilityFilter = (filter) => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }

// export const toggleTodo = (id) => {
//   return {
//     type: 'TOGGLE_TODO',
//     id
//   }
// }
