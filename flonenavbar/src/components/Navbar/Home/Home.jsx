import React from 'react';
import './style.css';


const Home = ({home,openHome,closeHome}) => {
  return (

  <div className={home ? "homecontainer" : "homecontainer active"} onMouseOver={openHome} onMouseLeave={closeHome}>
    
    <div> 
        <ul>
            <h3>Home Group One</h3>
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
        <h3>Home Group Two</h3>
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
        </ul></div>
    <div>
        <ul>
        <h3>Home Group Two</h3>
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
  </div>
  )
}

export default Home;