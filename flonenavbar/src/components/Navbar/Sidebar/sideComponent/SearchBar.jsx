import React,{useState} from 'react';
import {MdClose} from 'react-icons/md';
import SearchIcon from '@material-ui/icons/Search';
import './search.css';

const SearchBar = () => {

    const [search,setSearch] = useState("");
    // const [show,setShow] = useState(false);

    const inputcheck = (e) => {
      setSearch(e.target.value);
    }

    const clearInput = () =>{
      setSearch("");
      const inputField = document.querySelector('.input-field');
      inputField.value = "";
    }

  return (
    <div className='input-icon'>
    <form action="submit">
        <input className='input-field' type="text" onChange={inputcheck} placeholder='Search ...' />
       { search.length ? <i className='input-close' onClick={clearInput}><MdClose/></i> : null }
        <i className='icon-search'><SearchIcon/></i>
        </form>
        </div>
  )
}

export default SearchBar;