import React from 'react';
import './SideHome.css';


const SidePage = ({page}) => {
   
  return (
    <div className='sideContainer page-layout' style={{display : `${page} ? "flex" : "none"`}}>
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
  )
}

export default SidePage