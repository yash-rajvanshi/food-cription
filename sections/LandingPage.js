"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
            <div className='relative min-h-[80vh] md:min-h-[70vh]  lg:min-h-screen text-white  bg-[url("/heroBg.png")] bg-cover bg-center w-full'>
                <div className="absolute inset-0 bg-teal-800/30 z-0"></div>
                <section className=" text-center xs:text-left md:text-center xs:px-3 lg:px-0  mt-10  py-32 relative z-10">
                    <h1 className="font-extrabold  xs:text-5xl md:text-6xl font-zain text-white">
                    Transform <br/> Your Lifestyle with <br/> Personalized Health Guide! 
                    </h1>
                    <h2 className="mb-4 mr-5 md:text-[1rem] font-karla font-bold">
                    "Health is not just the absence of disease, <br/>but a state of complete{" "}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-clip-text text-lg font-bold text-black "
                        >
                            {text}
                        </motion.span>
                    </h2>
                    <h3 className="font-light text-black">-World Health Organization</h3>
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
