"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroBg from "@/assets/images/heroBg4.jpg"
import LandingArrow from "@/assets/icons/arrow.jpg"

const keywords = [
    { title: "physical well-being." },
    { title: "mental well-being." },
    { title: "social well-being." }
];

const LandingPage = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isRemoving, setIsRemoving] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let currentText = keywords[index].title;

        const typingInterval = setTimeout(() => {
            if (!isRemoving) {
                // Typing animation
                if (charIndex < currentText.length) {
                    setText(currentText.slice(0, charIndex + 1));
                    setCharIndex((prev) => prev + 1);
                } else {
                    // Wait before deleting
                    setTimeout(() => setIsRemoving(true), 1000);
                }
            } else {
                // Deleting animation
                if (charIndex > 0) {
                    setText(currentText.slice(0, charIndex - 1));
                    setCharIndex((prev) => prev - 1);
                } else {
                    // Move to next word
                    setIsRemoving(false);
                    setIndex((prev) => (prev + 1) % keywords.length);
                }
            }
        }, 60); // Speed of typing/deleting

        return () => clearTimeout(typingInterval);
    }, [charIndex, isRemoving]);

    return (
        <div className='flex flex-col '>
            <Navbar />
            <div className='relative min-h-[90vh] md:min-h-[70vh]  lg:min-h-screen text-black  w-full' style={{ backgroundImage: ` url(${HeroBg.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <section className=" text-center xs:text-left lg:text-left xs:px-3 lg:px-10  mt-10  py-32 relative z-10">
                    <h1 className="font-extrabold  xs:text-5xl md:text-6xl font-zain text-[#5ab00a]">
                        Simplifying<br /> Health Goals by <br /> Offering Healthy Food for you
                    </h1>
                    <h2 className="mb-4 mr-5 xs:text-[1.2rem] md:text-[1.3rem] whitespace-nowrap font-karla font-bold">
                        "Health is not just the absence of disease, <br />but a state of complete{" "}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-clip-text md:text-xl font-extrabold text-[#5ab00a] "
                        >
                            {text}
                        </motion.span>
                    </h2>
                    <h3 className="font-light text-[#5ab00a]">-World Health Organization</h3>
                    <div className="flex flex-row z-10 mt-6">
                    <div className="xs:px-4 md:px-10 py-3 text-center text-xl bg-[#6de0019f] cursor-pointer uppercase text-black font-medium rounded-lg font-zain  shadow-lg">
                        Foodcription
                    </div>
                    <div className="flex w-full relative">
                        <Image src={LandingArrow} alt="arrow" width={50} height={50} className="w-20" />
                        <span className="xs:text-xs text-[#5ab00a] md:text-xs font-semibold absolute bottom-0 xs:left-7 xs:top-11 md:top-12 xl:left-10">
                            Click here to get your own
                        </span>
                    </div>
                </div>
                </section>
                

                {/* SVG Curved Shape */}
                <div className="absolute bottom-0 w-full">
                    <svg viewBox="0 0 1440 320" className="w-full">
                        <path fill="#ffffff" d="M0,224 C 480,124, 960,184, 1440,96 L1440,320 L0,320 Z"></path>                                </svg>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
