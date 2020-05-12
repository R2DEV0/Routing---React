import React from 'react';
import { Link } from '@reach/router';

const HelloColor = (props) => {
    const{word, color, color2} = props;


    return (
        <div style={{background: color2}}  >
            <div style={{color: color}} > 
                <h1>The word is: {word}</h1> 
            </div>
        </div>
    );
}

export default HelloColor;