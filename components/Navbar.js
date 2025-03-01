import React from "react";
import Logo from "@/assets/images/community-icon.svg"
export default function Home() {
    return (
        <div className="relative min-h-screen bg-[#68c90d] text-white">
            {/* Navbar */}
            <header className="flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Delfood</h1>
                <div>
                    <button className="text-sm mr-4">Login</button>
                    <button className="text-sm">&#9776;</button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="text-center py-16 relative z-10">
                <h1 className="font-extrabold xs:text-5xl md:text-6xl font-zain text-black">
                    Free <br /> Customized Lifestyle <br /> Prescription Plan!
                </h1>
                <p className="mt-2 text-sm">when looking at its layout. The point of using Lorem Ipsum</p>

                {/* Search Bar */}
                <div className="mt-6 flex justify-center gap-2">
                    <input
                        type="text"
                        placeholder="Restaurant Name"
                        className="px-4 py-2 rounded-lg text-black w-60"
                    />
                    <select className="px-4 py-2 rounded-lg text-black w-40">
                        <option>All Locations</option>
                    </select>
                    <button className="bg-yellow-500 px-6 py-2 rounded-lg">Search</button>
                </div>
            </section>

            {/* SVG Curved Shape */}
            <div className="absolute bottom-0 w-full">
                <svg viewBox="0 0 1440 320" className="w-full">
                <path fill="#ffffff" d="M0,224 C 480,124, 960,184, 1440,96 L1440,320 L0,320 Z"></path>                                </svg>
            </div>

            {/* Food Images */}
            <div className="relative z-10 flex justify-center gap-6 mt-10">
                {/* <img src="@/assets/images/community-icon.svg" className="w-40 h-40 z-100 invert  rounded-full border-4 border-white" /> */}
                {/* <img src="@/assets/images/community-icon.svg" className="w-40 h-40 z-100 invert  rounded-full border-4 border-white" /> */}
                {/* <img src="@/assets/images/community-icon.svg" className="w-40 h-40 z-100 invert  rounded-full border-4 border-white" /> */}
                {/* <img src="@/assets/images/community-icon.svg" className="w-40 h-40 z-100 invert  rounded-full border-4 border-white" /> */}
            </div>
        </div>
    );
}
