import React from 'react'
import Image from 'next/image'
import Because from "@/assets/images/Because1.jpg"
import Img from "@/assets/images/Contact14.png"

const Welcome = () => {
    return (
        <div className='mb-20'>
            <div className='text-center px-4 xs:leading-[1rem] md:leading-[3rem]  font-zain mb-7'>
             <span className='xs:text-3xl  md:text-5xl'> Welcome to</span>   <br /> <span style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"}} className='text-[#5ab00a] xs:text-6xl md:text-[5rem] font-bold'>FoodCription</span> <br/><span className='xs:text-3xl  md:text-4xl'> – Your Personalized Path to Healthy Eating!</span>
            </div>
            <div className='w-full font-karla  relative xs:h-[100vh] sm:h-[75vh]  md:h-[94vh] xl:h-[90vh] lg:h-[70vh] 'style={{ backgroundImage: ` url(${Because.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className='xs:w-[90vw]  md:w-[80vw]  sm:h-[60vh] xs:h-[80vh] md:h-[80vh] xl:h-[70vh] lg:h-[50vh] flex flex-col gap-2 xs:px-6 md:px-20 absolute top-20 xs:left-4 md:left-20 lg:left-30 rounded-lg bg-white '>
                    <h1 className='xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-center text-[#396b0a] font-zain xs:mt-8 lg:mt-5 xs:py-5 lg:py-2' style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"}}>Because Your Body Deserves Better</h1>
                    <p className='xs:text-[1rem] md:text-[1.6rem] xl:text-[1.7rem] lg:text-[1.4rem]  font-zain'>In today's fast-paced world, eating healthy is harder than ever—especially for working professionals living away from home. With hectic schedules, irregular meal times, and the easy availability of junk food, we often make food choices that leave us feeling sluggish, bloated, and drained.</p>
                    <p className='xs:text-[1rem] md:text-[1.6rem] xl:text-[1.7rem] lg:text-[1.4rem]  font-zain'>At FoodCription, we believe food should work for you, not against you. Instead of resorting to unhealthy options when you're tired, stressed, or battling midnight cravings, we provide <span className='font-karla italic'>personalized, health-focused meals tailored to how you feel</span>—whether you're feeling bloated, low on energy, or just need something wholesome to get through the day.</p>


                </div>
            </div>
        </div>
    )
}

export default Welcome
