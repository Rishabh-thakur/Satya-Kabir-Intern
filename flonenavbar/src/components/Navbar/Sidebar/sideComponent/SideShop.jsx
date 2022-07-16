import React from 'react';
import { useState } from 'react';
import './SideHome.css';
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';

const SideShop = ({shop}) => {
    const [onshop1,setOnShop1] = useState(false);
    const [onshop2,setOnShop2] = useState(false);
    // const [onshop3,setOnShop3] = useState(false);

    const openshop1 = () => setOnShop1(!onshop1);

    const openshop2 = () => setOnShop2(!onshop2);

    // const openshop3 = () => setOnShop3(!onHome3);
  return (
    <div className='sideContainer' style={{display : `${shop} ? "flex" : "none"`}}>
    
    <div  className='list-item1'> 
    <span><h3>Shop Layout</h3><i> {onshop1 ? <AiOutlineMinus onClick={openshop1}/>  : <AiOutlinePlus onClick={openshop1}/>}</i></span> 
       { onshop1 && <ul>
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
          </ul>}
        </div>

    <div className='list-item1'>
       
    <span><h3>Product Details</h3><i> {onshop2 ? <AiOutlineMinus onClick={openshop2}/>  : <AiOutlinePlus onClick={openshop2}/>}</i></span> 
       { onshop2 && <ul>
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
        </ul>}
        </div>
  </div>
  )
}

export default SideShop;