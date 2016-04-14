import 'babel-polyfill';

//React stuff
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
//App stuff
import puzzleSolverApp from './reducers';
import App from './components/App';

var boxes = [],
  colors = ['blue', 'green', 'red', 'orange'];

//Generate the 8 boxes
for (var i = 1; i < 9; ++i) {
    boxes.push({
        key: i,
        id: i,
        position: 0,
        color: colors[Math.floor(Math.random() * colors.length)]
    });
}
//Generate the final empty box
boxes.push({
    key: 9,
    id: ' ',
    graphic: <i className="fa fa-bomb"></i>,
    color: colors[Math.floor(Math.random() * colors.length)]
});
//Shuffle them
var shuffledNums = _.shuffle([0,1,2,3,4,5,6,7,8]);
shuffledNums.forEach((num, i) => {boxes[i].position = num});
let store = createStore(puzzleSolverApp, Object.assign({}, {'boxes': boxes}));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.subscribe(() => {
        console.log(store.getState());
});