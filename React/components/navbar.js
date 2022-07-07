import React from 'react';
import './navBar.css'
import { FaGithub } from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
function Navbar(){
    
    return(
        <nav className ="navbar">
            <div className="title">SENA</div>
            <ul className="nav-links">
                <li><a href="\">Home</a></li>
                <li><a href="\">About</a></li>
                <li><a href="\">My Skills</a></li>
                <li><a href="\">Contact</a></li>
                <div className='hr'></div>
            </ul>
            <ul className='social-items'>
                <li><a href="/"><FaGithub/></a></li>
                <li><a href="/"><FaLinkedin/></a></li>
                <li><a href="/"><BsInstagram/></a></li>
                <li><a href="/"><FaTwitter/></a></li>
            </ul>
            
        </nav>
    )
}
export default Navbar;