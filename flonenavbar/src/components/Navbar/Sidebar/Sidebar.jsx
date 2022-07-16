import React,{useState} from 'react';
import {MdClose} from 'react-icons/md';
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';

import './sidebar.css';
import AddIcon from '@material-ui/icons/Add';

import SideHome from './sideComponent/SideHome';
import SearchBar from './sideComponent/SearchBar';
import SideShop from './sideComponent/SideShop';
import SidePage from './sideComponent/SidePage';
import SideBlog from './sideComponent/SideBlog';
import SiSelect from './SideSelect/SiSelect';
import Contact from './SideSelect/Contact';

const Sidebar = ({sidebar,setSidebar}) => {

    const [openHome,setOpenHome] = useState(false);
    const [openShop,setOpenShop] = useState(false);
    const [openPage,setOpenPage] = useState(false);
    const [openBlog,setOpenBlog] = useState(false);

    const onHome = () => setOpenHome(!openHome);

    const onPage = () => setOpenPage(!openPage);
    
    const onShop = () => setOpenShop(!openShop);
   
    const onBlog = () => setOpenBlog(!openBlog);

  return (
    <div className= { sidebar ? "main-container active" : "main-container"} >
        <div className='icon-close' onClick={()=>setSidebar(false)}><MdClose/></div>
         <div  id="sidebarContainer">
         <div> <SearchBar/></div> 
         <div className='sliding'>
        <div className='Menu-jar'>
         <ul >
            <li><span><a href="#">Home</a><i >{ !openHome ? <AiOutlinePlus  onClick={onHome}/> :<AiOutlineMinus onClick={onHome}/> }</i></span>{openHome && <SideHome openHome={openHome}/>}</li>
            <li><span><a href="#">Shop</a><i>{ !openShop ? <AiOutlinePlus  onClick={onShop}/> :<AiOutlineMinus onClick={onShop}/> }</i></span>{openShop && <SideShop openShop={openShop}/>}</li>
            <li><a href="#">Collection</a></li>
            <li><span><a href="#">Pages</a><i>{ !openPage ? <AiOutlinePlus  onClick={onPage}/> :<AiOutlineMinus onClick={onPage}/> }</i></span>{openPage && <SidePage openShop={openPage}/>}</li>
            <li><span><a href="#">Blog</a><i>{ !openBlog ? <AiOutlinePlus  onClick={onBlog}/> :<AiOutlineMinus onClick={onBlog}/> }</i></span>{openBlog && <SideBlog openShop={openBlog}/>}</li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <SiSelect/>
          <Contact/>
         </div>
         </div>
         </div>
    </div>
   
  )
}

export default Sidebar;