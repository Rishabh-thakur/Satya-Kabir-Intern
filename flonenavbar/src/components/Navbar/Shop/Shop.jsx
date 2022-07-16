import React from 'react'
import girl from './images/shoppinggirl.png';
const Shop = ({shop,openShop,closeShop}) => {

  return (
    <div className={shop ? "homecontainer" : "homecontainer active"} onMouseOver={openShop} onMouseLeave={closeShop}>
    <div> 
        <ul>
        <h3>Shop Layout</h3>
        <li><a href="#">Home Fashion</a></li>
            <li><a href = "#">Home Fashion one</a></li>
            <li><a href = "#">Home Fashion Two</a></li>
            <li><a href = "#">Home Fashion Three</a></li>
            <li><a href = "#">Home Fashion Four</a></li>
            <li><a href = "#">Home Fashion Five</a></li>
            <li><a href = "#">Home Fashion Six</a></li>
            <li><a href = "#">Home Fashion Seven</a></li>
            <li><a href = "#">Home Fashion Eight</a></li>
            <li><a href = "#">Home Fashion Nine</a></li>
        </ul>
        </div>
    <div>
        <ul>
        <h3>Product Details</h3>
        <li><a href="#">Home Fashion</a></li>
            <li><a href = "#">Home Fashion one</a></li>
            <li><a href = "#">Home Fashion Two</a></li>
            <li><a href = "#">Home Fashion Three</a></li>
            <li><a href = "#">Home Fashion Four</a></li>
            <li><a href = "#">Home Fashion Five</a></li>
            <li><a href = "#">Home Fashion Six</a></li>
            <li><a href = "#">Home Fashion Seven</a></li>
            <li><a href = "#">Home Fashion Eight</a></li>
            <li><a href = "#">Home Fashion Nine</a></li>
        </ul>
    </div>
    <div className='imgcontainer' style={{width : "15vw"}}>
        <img src={girl} style={{width : "80%"}} alt="" />
    </div>
  </div>
  )
}

export default Shop