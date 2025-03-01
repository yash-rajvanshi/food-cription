import React from "react";
import Logo from "@/assets/icons/logo.png"
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {

    return (
        <div className=" flex items-center xs:mx-0 lg:mx-10  z-100 text-[#095111] relative">
            {/* Navbar */}
            <div className="absolute xs:px-16   md:px-8 bg-white  xs:top-3 md:top-10 mb-20 md:w-full xs:w-[100vw]">
                <header className=" flex xs:flex-col  md:h-16 md:gap-10 lg:gap-0  md:flex-row justify-between items-center">
                    <div className=""><h1 className="items-center  flex justify-center "><Image src={Logo} alt="FoodCription" width={200} height={200} className=" "/></h1></div>
                    <div className="flex    xs:gap-7 md:gap-20 xs:text-[0.9rem] md:text-lg font-karla font-bold">
                        <Link href="#" className="whitespace-nowrap">About Us</Link>
                        <Link href="#">Blogs</Link>
                        <Link href="#">Orders</Link>
                        <Link href="#">Consultation</Link>
                    </div>
                </header>
            </div>

            

            {/* Food Images */}
            {/* <div className="relative z-10 flex justify-center gap-6 mt-10"> */}
            {/* <img src="@/assets/images/community-icon.svg" className="w-40 h-40 z-100 invert  rounded-full border-4 border-white" />
                <img src="@/assets/images/community-icon.svg" className="w-40 h-40 z-100 invert  rounded-full border-4 border-white" />
                <img src="@/assets/images/community-icon.svg" className="w-40 h-40 z-100 invert  rounded-full border-4 border-white" />
                <img src="@/assets/images/community-icon.svg" className="w-40 h-40 z-100 invert  rounded-full border-4 border-white" /> */}
            {/* </div> */}
        </div>
    );
}
