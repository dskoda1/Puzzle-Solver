import { VALID_MOVES } from '../actions';

const boxMoves = (boxes) => {

    //Find the empty box
    let emptyBox = boxes.find(box => box.id === ' ');
    let emptyPosition = emptyBox.position;
    let validMoves = VALID_MOVES[emptyPosition].map((position) => {
        
        return boxes.find((box) => box.position == position);
    });

    return {
        emptyBox,
        validMoves
    }

}

export default boxMoves;