import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// import {styles} from '/Users/saadatali/Desktop/z3d-portfolio/src/styles.css'
import { navLinks } from '../constants';
import { logo, menu, close} from '../assets';


const Navbar = () => {
    const [active, setActive] = useState('')
    const styles = {
      paddingX: "sm:px-16 px-6",
      paddingY: "sm:py-16 py-6",
      padding: "sm:px-16 px-6 sm:py-16 py-10",
      
      heroHeadText:
        "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
      heroSubText:
        "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
      
      sectionHeadText:
        "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
      sectionSubText:
        "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
      };
  return (
    <nav
    className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

      <Link to="/" className='flex items-center gap-2' onClick={()=> {setActive (""); window.scrollTo(0,0)}}>
      <img src={logo} alt="logo" className='w-4 h-9 object-contain' />
      <p className='text-white text-[18px] font-bold cursor-pointer'> Hamza Khan <span className='sm:block hidden'>| Full Stak Dev </span></p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map((link) => (
          <li key={`#${link.id}`} className={`${active === link.title ? 'text-white':''}`}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      </div> 
    </nav>
  )
}

export default Navbar 