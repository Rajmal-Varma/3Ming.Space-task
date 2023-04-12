import React from 'react'
import Logo1 from '../assest/3minglogo 1.png'
import social1 from '../assest/Ellipse 43.png'
import social2 from '../assest/Ellipse 38.png'
import social3 from '../assest/Ellipse 39.png'
import social4 from '../assest/Ellipse 41.png'
import social5 from '../assest/Ellipse 42.png'
function Footer() {
  return (
    <div className="relative bg-black h-48  mt-10 mb-5   pt-8 justify-center ">
    <div className="relative bg-gray-700   h-32  rounded flex mr-6 ">

      <div className="flex pt-4 ml-4 relative">
         <img src={Logo1} alt="" className="w-8 h-12 "></img>
         <div className="ml-3 relative ">
            <h1 className=" text-3xl font-mono font-semibold">3Ming.space</h1>
            <p className="justify-start text-sm   font-semibold">UNLOCK THE POWER OF WEB3 STREAMING <br/> ANYWHERE-ANYTIME</p>
         </div>
      </div>

      <div className="pl-48 pt-4  relative">
         <h3 className="text-xl font-medium relative">community</h3>
         <h3 className = "text-xl font-medium relative">faq</h3>
         <h3  className ="text-xl font-medium relative">Help</h3>
    </div>

    <div className="pl-48 pt-4 relative">
         <h3 className="text-xl font-medium relative">About us</h3>
         <h3 className = "text-xl font-medium relative">Terms Of Use</h3>
         <h3  className ="text-xl font-medium relative">Privacy Policy </h3>
    </div>

    <div className="pl-48 pt-4 relative">
        <h1 className="text-3xl font-medium ml-2 relative">Social</h1>
        <ul className="flex pt-3 relative">
           <img src={social1} alt="/"  className="w-14 h-12 pr-2" />
           <img src={social2} alt="/"  className="w-14 h-12 pr-2" />
           <img src={social3} alt="/"  className="w-14 h-12 pr-2" />
           <img src={social4} alt="/"  className="w-14 h-12 pr-2" />
           <img src={social5} alt="/"  className="w-14 h-12 pr-2" />
          
         </ul>
    </div>

    </div>

    </div>
  )
}

export default Footer
