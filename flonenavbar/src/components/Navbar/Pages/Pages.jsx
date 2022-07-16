import React from 'react'

import './pagestyle.css';

const Pages = ({pages,openPages,closePages }) => {
  return (
    <div className={pages ? "homecontainer" : "homecontainer active"} onMouseOver={openPages} onMouseLeave={closePages} >
    <div style={{width : "13vw"}}> 
        <ul>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Checkout</a></li>
            <li><a href="#">Wishlists</a></li>
            <li><a href="#">Compare</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">404 Page</a></li>
        </ul>
        </div>

  </div>
  )
}

export default Pages;