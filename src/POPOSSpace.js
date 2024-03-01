import React from 'react'
import './POPOSSpace.css';

function POPOSSpace(props) {
    const { name, image, address, likes } = props;
    return (
        <div className='POPOSSpace'>
            <h1 className='Name'>{name}</h1>
            <img 
                src={image} 
                width="300" 
                height="300" 
                alt="Hello"
            />
            <div>{address}</div>
            <div className='Likes'>{likes} likes</div>
        </div>
    )
}

export default POPOSSpace