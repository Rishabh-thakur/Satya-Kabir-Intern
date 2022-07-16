import React from 'react';
import './siselect.css';

const SiSelect = () => {
  return (
    <div className='select-bar'>
      <div>
      <h4>Choose Language</h4>
        <select name="lang" id="lang">
            <option value="#">English</option>
            <option value="#">Franch</option>
            <option value="#">Germany</option>
        </select>
        </div> 

        <div>
        <h4>Choose Currency</h4>
        <select name="lang" id="curr">
            <option value="#">EUR</option>
            <option value="#">DOL</option>
            <option value="#">IND</option>
        </select>
        </div>
    </div>
  )
}

export default SiSelect;