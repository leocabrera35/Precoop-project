import React from 'react'
import logo from './logo.svg'

function POPOSSpace(props) {
    // The attributes below set the values of these properties
    const { name, image, address } = props
    return (
        <div>
            <img src={`${process.env.PUBLIC_URL}pics/${image}`}
             width="300" height="300" alt="Hello" />
            <h1>{name}</h1>
            <div>{address}</div>

        </div>
    )
}

export default POPOSSpace
