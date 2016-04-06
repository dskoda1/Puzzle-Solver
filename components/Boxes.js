import React, { PropTypes } from 'react';
import _ from 'lodash';
import Box from './Box';

const Boxes = ({boxes, onBoxClick}) => {
    
    let className = 'col-xs-6 col-sm-4';
    boxes = _.sortBy(boxes, 'position');
    let newBoxes = _.map(boxes, (box) => {
        var divStyle = {
            border: '1px solid ' + box.color,
            textAlign: 'center',
            height: '100px',
        };
        return (
            <Box
                className={className}
                style={divStyle}
                num={box.id}
                position={box.position}
                onClick={onBoxClick} 
                key={box.id}/>
      );
    });
    return (
        <div>
            {newBoxes}
        </div>
    );
};


export default Boxes;