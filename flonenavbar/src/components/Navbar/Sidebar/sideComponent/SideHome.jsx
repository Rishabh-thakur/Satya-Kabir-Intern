import React from 'react';
import { useState } from 'react';
import './SideHome.css';
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';


const SideHome = ({home}) => {

    const [onHome1,setOnHome1] = useState(false);
    const [onHome2,setOnHome2] = useState(false);
    const [onHome3,setOnHome3] = useState(false);

    const openHome1 = () => setOnHome1(!onHome1);

    const openHome2 = () => setOnHome2(!onHome2);

    const openHome3 = () => setOnHome3(!onHome3);

   return (

  <div className='sideContainer' style={{display : `${home} ? "flex" : "none"`}}>
    
    <div  className='list-item1'> 
    <span><h3>Home Group One</h3><i> {onHome1 ? <AiOutlineMinus onClick={openHome1}/>  : <AiOutlinePlus onClick={openHome1}/>}</i></span> 
       { onHome1 && <ul>
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
       
    <span><h3>Home Group Two</h3><i> {onHome2 ? <AiOutlineMinus onClick={openHome2}/>  : <AiOutlinePlus onClick={openHome2}/>}</i></span> 
       { onHome2 && <ul>
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
    <span><h3>Home Group Three</h3><i> {onHome3 ? <AiOutlineMinus onClick={openHome3}/>  : <AiOutlinePlus onClick={openHome3}/>}</i></span> 
       {onHome3 && <ul>
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

export default SideHome;