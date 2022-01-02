import React from 'react'
import logo from './logo.svg'
import './POPOSSpace.css'

function POPOSSpace(props) {
    // The attributes below set the values of these properties
    const { name, image, address, like } = props
    return (
        <div className= "POPOSSpace">
            <h1>{name}</h1>
            <img src={`${process.env.PUBLIC_URL}pics/${image}`}
             width="300" height="300" alt="Hello" />
            <div>{address}</div>
            <h5>Like Count: {like}</h5>

        </div>
    )
}

export default POPOSSpace
