import React from 'react' ;
import './App.css' ;

const RenderDoc = (props) => {
    return(
        <div className='RenderDoc' >
            <h1>RenderDoc Component</h1>
            <p>{props.participants}</p>
            <p>{props.activity}</p>
        </div>
    )
}

export default RenderDoc ;