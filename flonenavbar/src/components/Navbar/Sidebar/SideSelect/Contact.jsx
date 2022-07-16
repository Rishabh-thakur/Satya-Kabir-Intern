import React from 'react';
import {BsTelephoneFill} from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { BsTwitter } from 'react-icons/bs';
import { TiSocialInstagram } from 'react-icons/ti';
import { FaFacebookF } from 'react-icons/fa';
import { BsPinterest } from 'react-icons/bs';

import './siselect.css';

const Contact = () => {
  return (
    <div className='contact-info'>
        <p><i><BsTelephoneFill/></i>123456789</p>
        <p><i><IoMdMail/></i>Info@yourdomain.com</p>
        <div className='icon-tags'>
            <i><BsTwitter/></i>
            <i><TiSocialInstagram/></i>
            <i><FaFacebookF/></i>
            <i><BsPinterest/></i>
        </div>
    </div>
  )
}

export default Contact;