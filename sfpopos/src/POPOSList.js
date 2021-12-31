import React from 'react'
import POPOSSpace from './POPOSSpace';
import './POPOSList.css'



function POPOSList() {
    return (
        <div className = "POPOSList">
            <POPOSSpace
               name ="Mexico City Street" // name 
               address ="27 Avenida Juarez" // address
               image ="mexico_city_guide_mexico.jpeg" // image
            />
            <POPOSSpace
               name ="San Francisco Park" // name 
               address ="1234 Beach rd." // address
               image ="sanfrancisco.jpeg" // image
            />
            <POPOSSpace
               name ="Tokyo Streets" // name 
               address ="29 Manga St." // address
               image ="tokyostreet4.jpeg" // image
            />
            <POPOSSpace
               name ="Leamington Marina" // name 
               address ="25 Robson Rd" // address
               image ="leamingtonmarina.jpeg" // image
            />
            <POPOSSpace
               name ="Canals of Venice" // name 
               address ="Riva del vin " // address
               image ="venice.jpeg" // image
            />
            <POPOSSpace
               name ="Times Square" // name 
               address ="42nd St." // address
               image ="timesquare.jpeg" // image
            />
        </div>
    )
}

export default POPOSList
