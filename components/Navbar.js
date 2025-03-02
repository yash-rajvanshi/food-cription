import React from "react";
import Logo from "@/assets/icons/thinLogo.png"
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {

    return (
        <div className=" flex items-center  lg:mx-10  z-100 text-[#5ab00a] relative">
            {/* Navbar */}
            <div className="absolute xs:px-16 md:shadow-[0px_0px_6px_2px_rgba(0,_0,_0,_0.1)]  md:px-8 md:bg-white  xs:top-5 md:top-10 mb-20 md:w-full xs:w-[100vw]">
                <header className=" flex xs:flex-col  md:h-16 xs:gap-2 md:gap-10 lg:gap-0  md:flex-row justify-between items-center">
                    <Link href="/" className=""><h1 className="items-center  flex justify-center "><Image src={Logo} alt="FoodCription" width={200} height={200} className=" " /></h1></Link>
                    <div className="flex    xs:gap-7 md:gap-20 xs:text-[0.9rem] md:text-lg font-karla font-bold">
                        <Link href="#" className="whitespace-nowrap">About Us</Link>
                        <Link href="#">Blogs</Link>
                        <Link href="#">Orders</Link>
                        <Link href="/contact">Consultation</Link>
                    </div>
                </header>
            </div>
        </div>
    );
}
