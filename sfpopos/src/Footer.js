import React from 'react'
import './Footer.css'



function Footer() {
    return (
        <div className="Footer">
            <h3>© {new Date().getFullYear()} Leonardo Cabrera Ortiz </h3>
            {/* returns the current date year */}
        </div>
    )
}


export default Footer
