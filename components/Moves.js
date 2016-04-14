import React, { PropTypes } from 'react';
import {BoxMoves} from '../actions';
import Move from './Move';

const Moves = ({state, onClick}) => {
    console.log(state);
    let { emptyBox, validMoves } = state;
    let moves = validMoves.map((move) => {
                    console.log(move);

        return (
            <Move 
                onClick={onClick}
                emptyBox={emptyBox}
                position={move.position}
                key={move.id}
                id={move.id} />
            
            );
    })
    return (
        <div>
            <h3>Available Moves</h3>
            {moves}
        </div>
    );
};


export default Moves;