import React, { PropTypes } from 'react';
import _ from 'lodash';


const Move = ({onClick, id, emptyBox, position}) => {
    
    let style = {
        margin: '3px'
    }
    let className = 'col-xs-3';
    return (
        <div 
            style={style}
            className={className}
            onClick={() => onClick(id)}
            key={id}>
            
            <h2>{emptyBox.graphic} 
            <i className="fa fa-arrow-right"></i>
            {id}</h2>
            </div>
        );
    
}

export default Move;