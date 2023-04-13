import React from "react";
import Logo1 from "../assest/3minglogo 1.png";
import social1 from "../assest/Ellipse 43.png";
import social2 from "../assest/Ellipse 38.png";
import social3 from "../assest/Ellipse 39.png";
import social4 from "../assest/Ellipse 41.png";
import social5 from "../assest/Ellipse 42.png";
function Footer() {
  return (

    <footer className="bg-gray-700   py-10 mx-[-3px] cursor-pointer  md:flex md:justify-between   md:h-[15rem] w-[88rem]   rounded-lg ">


      <div className="flex p-4 mx-2">
        <img src={Logo1} alt="" className="h-12 w-10 my-4" />

        <div className="p-2">
          <h1 className=" text-4xl py-2  font-semibold ">3Ming.Space</h1>
          <span className=" font-medium">UNLOCK THE POWER OF WEB3 STREAMING <br/> ANYWHERE ANYTIME</span>
        </div>
      </div>



      <div className="md:flex sm:flex lg:flex  xl:flex ml:text-center px-40 ml:justify-between md:px-16 ">
      <div className="flex p-4 mx-2 ">
    
        <div className="p-2 text-xl mx-160 font-medium">
          <h1 className="">community</h1>
          <h1 className="">faq</h1>
          <h1 className="">Help</h1>
        </div>
      </div>


      
      <div className="flex p-4 mx-2">
      <div className="p-2 text-xl md:mx-10 font-medium ">
          <h1 className=" ">About us</h1>
          <h1 className=" ">Terms Of Use</h1>
          <h1 className=" ">Privacy Policy</h1>
      </div>
      </div>



      
      <div className="flex  md:mx-1">
      <div className="py-4 ">
          <h1 className="text-3xl font-semibold mx-12">Social</h1>
          <ul className="flex mt-3  " >
            <img src={social1} alt="" className="px-1 ml-2 h-12 " />
            <img src={social2} alt="" className="px-1 ml-2 h-12"/>
            <img src={social3} alt="" className="px-1 ml-2 h-12"/>
            <img src={social4} alt="" className="px-1 ml-2 h-12"/>
            <img src={social5} alt="" className="px-1 ml-2 h-12"/>
         </ul>
        </div>
      </div>
      </div>


    </footer>
   
  );
}

export default Footer;
