import Logo from '../assest/3ming_logo.jpg'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


   const Navbar = () => {
     //   usestate is used for close menu or open menu view
   
     const [nav, setNav] = useState(false);
   
     const handleClick = () => {
       return setNav(!nav);
     };
   
   
     return (
       <div className="fixed w-full h-[88px] flex justify-between items-center px-4 bg-[#000000] text-white">
         <div>
          <img src={Logo} alt="LogoImage" style={{width:'220px' }} className="ml-4"/>
         </div>
   
         {/* Menu */}
   
         <ul className="hidden md:flex  justify-between mx-1  font-medium  cursor-pointer">
           <li className="text-xl mx-6">Home</li>
           <li className="text-xl mx-6">About</li>
           <li className="text-xl mx-6">Stream</li>
           <li className="text-xl mx-6">Pramote</li>
           <li className="text-xl mx-16">Blog</li>
         </ul>
   
         {/* Hamburger */}
         <div onClick={handleClick} className="md:hidden z-10 md:justify-between">
           {!nav ? <FaBars /> : <FaTimes />}
         </div>
   
   
         {/* Mobile Menu */}
   
         <ul
           className={
             !nav
               ? "hidden"
               : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
           }
         >
           <li className="py-6 text-4xl ">Home</li>
           <li className="py-6 text-4xl">About</li>
           <li className="py-6 text-4xl">Skill</li>
           <li className="py-6 text-4xl">Work</li>
           <li className="py-6 text-4xl">Contact</li>
         </ul>
   </div>
     );
 }  
     
export default Navbar;
