import _ from 'lodash';
import { VALID_MOVES } from '../actions';

const changeBox = (state = [], action) => {

    switch (action.type) {
        case 'MOVE_BOX':
            if (action.id !== ' ') {
                let boxRequestingMove = state.boxes.find(box => box.id == action.id);
                let emptyBox = state.boxes.find(box => box.id === ' ');
                let oldPosition = boxRequestingMove.position;
                let emptyPosition = emptyBox.position;
                
                if(VALID_MOVES[oldPosition].indexOf(emptyPosition) > -1){
                    let newBoxes= state.boxes.map((box) => {
                        if(box.id == boxRequestingMove.id){
                            //Move its position to be empty position
                            return Object.assign({}, box, {position: emptyPosition});
                        }else if(box.id == emptyBox.id){
                            //Move it to be old position
                            return Object.assign({}, box, {position: oldPosition});
                        }else{
                            return box;
                        }
                    });
                    return Object.assign({}, {boxes: newBoxes});
                }else{
                    return state;
                }
            }
            return state;
        default:
            return state;
    }
}

export default changeBox;