"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/icons/thinLogo.png"
import Play from "@/assets/icons/playStore.png"
import Apple from "@/assets/icons/appStore.png"



const Footer = () => {
  return (
    <>
    
    <footer className=" relative overflow-hidden text-black p-10 xs:bg-[url('/footerBg31.PNG')] md:bg-[url('/footerBg3.png')] bg-cover" >
      <div className="max-w-7xl mx-auto  grid md:grid-cols-4 gap-2 text-center md:text-left">
        <div className="ml flex flex-col  items-center justify-center">
          <Image  src={Logo} alt="back" width={200} height={10} className=""/>
          <p className="xs:text-xl  lg:text-justify mt-2 font-zain">
          A Healthcare Community that offers FoodCription (Lifestyle Prescription) to help individuals achieve their Health Goals by collaborating with leading Industry Partners.
          </p>
          <div className="flex md:mt-0 md:h-25 gap-2 mt-4 justify-center items-center">
            <div className="hover:scale-110 transition-transform duration-300" >
                <Image  src={Play} alt="back" width={40} height={40} />
                
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
                <Image  src={Apple} alt="back" width={40} height={40}/>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:ml-[4rem]">
          <h3 className="text-3xl  font-zain font-bold  text-green-800">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="#" className="hover:text-green-800">Home</Link></li>
            <li><Link href="#" className="hover:text-green-800">About Us</Link></li>
            <li><Link href="#" className="hover:text-green-800">Blog</Link></li>
            <li><Link href="#" className="hover:text-green-800">Order</Link></li>
            <li><Link href="#" className="hover:text-green-800">Consultation</Link></li>
            <li><Link href="#" className="hover:text-green-800">Medical Tourism</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="lg:ml-[3rem]">
          <h3 className="text-3xl font-bold font-zain text-green-800">More</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="#" className="hover:text-green-800">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-green-800">Help</Link></li>
            <li><Link href="#" className="hover:text-green-800">FAQs</Link></li>
            <li><Link href="#" className="hover:text-green-800">Help</Link></li>
            <li><Link href="/contact" className="hover:text-green-800">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-green-800">News and Media</Link></li>
            <li><Link href="#" className="hover:text-green-800">Careers</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="">
          <h3 className="text-3xl lg:relative lg:-left-19 lg:top-10 font-zain font-bold text-green-800">“Simplifying Health Goals by advice on Healthy 'Food and Lifestyle”</h3>
          
        </div>
      </div>


    
    </footer>
    <div className=" bg-[#5ab00a] justify-center text-white  text-center border-t border-gray-700 xs:pt-2 pb-1  xs:text-xs sm:text-xs md:text-sm lg:text-sm">
    © {new Date().getFullYear()} FoodCription. All rights reserved. <span>| Powered by Night Owls</span>
    </div>

    </>
  );
};

export default Footer;