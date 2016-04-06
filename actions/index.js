
export const moveBox = (oldPosition, newPosition) => {

//might want to return a function here and check for valid move
  return {
    type: 'MOVE_BOX',
    oldPosition,
    newPosition
  }
}




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
