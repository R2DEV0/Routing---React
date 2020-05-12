import React from 'react';
import { Link } from '@reach/router';

const Hello = (props) => {

    if (isNaN(props.input)){
        return(<div>
            <p style={{fontSize: "30px"}}>The word is: { props.input }</p>
            </div>)
    }

    else {
        return(<div>
            <p style={{fontSize: "30px"}}>The number is: { props.input }</p>
            </div>)
    }

}

export default Hello;