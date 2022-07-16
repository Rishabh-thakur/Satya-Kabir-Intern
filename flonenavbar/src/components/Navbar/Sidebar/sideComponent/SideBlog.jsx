import React from 'react';
import './SideHome.css';

const SideBlog = ({blog}) => {
    return (
        <div className='sideContainer page-layout' style={{display : `${blog} ? "flex" : "none"`}}>
         <ul>
         <li><a href="#"> Blog Standard</a></li>
            <li><a href="#"> Blog No Sidebar</a></li>
            <li><a href="#"> Blog Right Sidebar</a></li>
            <li><a href="#"> Blog Details Standard</a></li>
            </ul>
            </div>
      )
}

export default SideBlog