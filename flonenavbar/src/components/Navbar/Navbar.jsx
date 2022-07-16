import React,{ useState , useEffect } from 'react';

import { BsSearch,BsHeart,BsBagDash } from 'react-icons/bs';
import {BiMenu} from 'react-icons/bi';
import { CgProfile} from 'react-icons/cg';
import {MdClose} from 'react-icons/md';
import { makeStyles} from '@material-ui/core';
import Badge from '@material-ui/core/Badge';

import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import { RiSendPlaneLine} from 'react-icons/ri';

//navbar components
import Home from './Home/Home';
import Pages from './Pages/Pages';
import Blog
 from './Blog/Blog';
import './navstyle.css';
import Shop from './Shop/Shop';

//sidebar components
import Sidebar from './Sidebar/Sidebar';

const useStyles = makeStyles({
    root: {
      marginBottom : '-7px',
      marginLeft : '-4.5px'
    },
    
  });


const Navbar = () => {
    const [home,setHome] = useState(false);
    const [shop,setShop] = useState(false);
    const [pages,setPages] = useState(false);
    const [blog,setBlog] = useState(false);
    const [mobile,setMobile] = useState(false);
    const [sidebar,setSidebar] = useState(false);

    useEffect(()=>{
      if(window.innerWidth < 750){
        setMobile(true);
      }
    },[]);
  
    useEffect(() => {
      const handleResize = () => {
        if(window.innerWidth < 750)
        {
          setMobile(true);
        }else{
          setMobile(false);
          setSidebar(false)
        }
      };
  
      window.addEventListener("resize",handleResize);
  
      return ()=>{
        window.removeEventListener("resize",handleResize);
      }
    },[]);
  
    const openHome = () => setHome(true);    
  
    const closeHome = () => setHome(false);    
      
   const openShop = () => setShop(true);

   const closeShop = () => setShop(false);

   const openPages = () => setPages(true);

   const closePages = () => setPages(false);

   const openBlog = () => setBlog(true);

   const closeBlog = () => setBlog(false);

  const classes = useStyles();
  return (
    <div className='divContainer'>
    <div className='container'>
      <h1>Piltr.</h1>
     {!mobile && <div className='menuBar'>
        <ul>
          <li><a href="#" onMouseOver={openHome} onMouseLeave = {closeHome}>Home<ExpandMoreSharpIcon className={classes.root} /></a><Home home ={home} openHome={openHome} closeHome = {closeHome}/></li> 
          <li><a href="#" onMouseOver={openShop} onMouseLeave = {closeShop}>Shop<ExpandMoreSharpIcon className={classes.root}/></a>{<Shop shop = {shop} openShop = {openShop} closeShop ={closeShop} />}</li>  
          <li><a href="#">Collection</a></li> 
          <li><a href="#" onMouseOver={openPages} onMouseLeave = {closePages}>Pages< ExpandMoreSharpIcon className={classes.root}/></a>{<Pages pages = {pages} openPages = {openPages} closePages = {closePages}/>}</li> 
          <li><a href="#" onMouseOver={openBlog} onMouseLeave ={closeBlog}>Blog<ExpandMoreSharpIcon className={classes.root}/></a>{<Blog blog ={blog} openBlog = {openBlog} closeBlog ={closeBlog}/> }</li> 
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
   }
      <div className='iconMenu'>
      <ul>
        
      {!mobile &&  <li><a href="#" className='badgeIcon'><BsSearch/></a></li>}
     { !mobile &&  <li><a href="#" className='badgeIcon'><CgProfile/></a></li> }
        { !sidebar ? <><li><a href="#" className='badgeIcon'>
          <Badge badgeContent = {"0"} color = "primary"> <RiSendPlaneLine/></Badge>
            </a></li> 
         <li><a href="#" className='badgeIcon'><Badge badgeContent = {"0"} color = "primary"> <BsHeart/></Badge></a></li> 
         <li><a href="#" className='badgeIcon'><Badge badgeContent = {"0"} color = "primary"> <BsBagDash/></Badge></a></li></> : null }
         { mobile &&  <li><a href="#" className='badgeIcon' onClick={()=>setSidebar(!sidebar)} ><BiMenu className='sidebar-toggle'/></a>{ <Sidebar sidebar = {sidebar} setSidebar = {setSidebar}/>}</li> }
      </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar;