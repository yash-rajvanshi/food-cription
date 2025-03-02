"use client"
import React, { useState, useEffect } from "react";
import Why1 from "@/assets/images/WhyLap.jpeg";
import Why2 from "@/assets/images/WhyXs.jpeg";
import Why3 from "@/assets/images/WhyPhone.jpeg";

const Why = () => {
  const [bgImage, setBgImage] = useState(Why1.src);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth >= 1024) {
        setBgImage(Why1.src); // Large screens (lg)
      } else if (window.innerWidth >= 600) {
        setBgImage(Why3.src); // Medium screens (md)
      } else if (window.innerWidth >= 500) {
        setBgImage(Why2.src); // Medium screens (md)
      } else {
        setBgImage(Why2.src); // Small screens (default)
      }
    };

    updateBackground(); // Run on mount
    window.addEventListener("resize", updateBackground); // Listen to resize

    return () => window.removeEventListener("resize", updateBackground); // Cleanup
  }, []);

  return (
    <div>
      <h1 className="text-[#5ab00a]  text-center font-zain xs:text-5xl  md:text-7xl ">Why FoodCription?</h1>
      <div
        className="w-full xx:leading-[1.7rem] sm:leading-[1.4rem]  h-[100vh] xs:text-[15px] xx:text-[20px] relative mb-16" style={{backgroundImage: url(${bgImage}),backgroundSize: "contain",backgroundPositionX: "right",backgroundRepeat: "no-repeat"}}>
        
        <div className="flex flex-col items-center absolute xs:right-[36%] sm:right-[41%] xx:right-[35%] md:right-[35%]  xs:top-[10%] md:top-[6%] right-[15rem] top-[10%] font-zain ">
          <h3 className="font-bold xs:text-[14px] sm:text-[18px] xx:text-[23px] md:text-[30px] ">Healthy, delicious, and convenient</h3>
          <p>No more guilt-driven food choices.</p>
        </div>

        <div className="flex flex-col items-center absolute xs:right-[36%] sm:right-[41%] xx:right-[44%] md:right-[44%] xs:top-[33%] md:top-[32%] right-[20rem] top-[15rem] font-zain">
          <h3 className="font-bold xs:text-[14px] sm:text-[18px] xx:text-[23px] md:text-[30px]">Personalized for your body’s needs</h3>
          <p>Because no two people are the same.</p>
        </div>

        <div className="flex flex-col items-center absolute xs:right-[36%] sm:right-[41%] xx:right-[35%] md:right-[44%] xs:top-[59%] md:top-[61%] right-[20rem] top-[28rem] font-zain">
          <h3 className="font-bold xs:text-[14px] sm:text-[18px] xx:text-[23px] md:text-[30px]">Perfect for busy professionals</h3>
          <p>Balanced meals without the hassle.</p>
        </div>

        <div className=" flex flex-col items-center absolute xs:right-[36%] sm:right-[41%] xx:right-[44%] md:right-[35%] xs:top-[84%] md:top-[87%] right-[15rem] top-[40rem] font-zain">
          <h3 className="font-bold xs:text-[14px] sm:text-[18px] xx:text-[23px] md:text-[30px]">A smart alternative to junk food</h3>
          <p>Feel full, feel great, and stay energized..</p>
        </div>
      </div>
    </div>
  );
};

export default Why;