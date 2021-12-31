import React from 'react'
import POPOSSpace from './POPOSSpace';


function POPOSList() {
    return (
        <div className = "POPOSList">
            <POPOSSpace
               name ="Mexico City Street" // name 
               address ="Avenida Juarez" // address
               image ="mexico_city_guide_mexico.jpeg" // image
            />
            <POPOSSpace
               name ="San Francisco Beach" // name 
               address ="1234 Beach rd." // address
               image ="sanfrancisco.jpeg" // image
            />
            <POPOSSpace
               name ="Modern Public Space Pond" // name 
               address ="29 Manga St." // address
               image ="modernpond.jpeg" // image
            />
            <POPOSSpace
               name ="Leamington Marina" // name 
               address ="25 Robson Rd" // address
               image ="leamingtonmarina.jpeg" // image
            />
            <POPOSSpace
               name ="Japan Public Park" // name 
               address ="44 Apple Crt." // address
               image ="publicpark.jpeg" // image
            />
            <POPOSSpace
               name ="Times Square" // name 
               address ="42nd St." // address
               image ="newyork.jpeg" // image
            />
        </div>
    )
}

export default POPOSList
