import React, { PropTypes } from 'react';
import _ from 'lodash';

const Box = ({className, style, num, position, onClick}) => {
    
    return (
        <div 
            className={className}
            style={style}
            onClick={() => onClick(num)} >
            <h2>{num}</h2>
            </div>
        );
    
};


export default Box;