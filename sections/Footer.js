"use client"
import React from "react";
import Image from "next/image";
// import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
// import { motion } from 'framer-motion';
// import Scooter from "@/assets/images/footer-scooter.svg"
import Logo from "@/assets/icons/thinLogo.png"
import Play from "@/assets/icons/playStore.png"
import Apple from "@/assets/icons/appStore.png"
// import Rx from "@/assets/images/rxGold.svg"
// import footerBg from "@/assets/images/footerBg3.png";
// import footerBg1 from "@/assets/images/footerBg31.png";

// import { Karla } from "next/font/google";


const Footer = () => {
  return (
    <>
    
    <footer className=" relative overflow-hidden text-black p-10 xs:bg-[url('/footerBg31.png')] md:bg-[url('/footerBg3.png')] bg-cover" >
      <div className="max-w-7xl mx-auto  grid md:grid-cols-4 gap-2 text-center md:text-left">
        {/* Logo & Intro */}
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

      {/* Copyright */}
    
      {/* <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: '0vw' }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 5, eease: "linear" } }
        className="absolute  bottom-0 left-0 w-auto h-[180px] "
      >
        <img src="/footer-scooter.svg" alt="Moving Image" className="w-[auto] h-[200px] object-cover" />
      </motion.div> */}
    
    </footer>
    {/* <Scooter/> */}
    <div className=" bg-[#5ab00a] justify-center text-white  text-center border-t border-gray-700 xs:pt-2 pb-1  xs:text-xs sm:text-xs md:text-sm lg:text-sm">
    © {new Date().getFullYear()} FoodCription. All rights reserved. <span>| Powered by Night Owls</span>
    </div>

    </>
  );
};

export default Footer;