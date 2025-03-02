import React from 'react'
import CraveBg from "@/assets/images/Contact14.png"
// import CraveBg1 from "@/assets/images/CraveBg.jpg"
// import Image from 'next/image'
const Crave = () => {
    return (
        <div className='flex items-center mb-16 h-[90vh]'style={{ backgroundImage: ` url(${CraveBg.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} >
            <div>
                <div className='w-[30rem]  absolute left-[20rem] z-50 h-[30rem] bg-white shadow-[0px_0px_6px_1px_rgba(0,_0,_0,_0.1)] rounded-full'>
                    <div className='text-5xl px-2 text-[#5ab001] font-zain flex relative'>
                        <div className='absolute left-[4rem] top-20'>Beat The Cravings,</div>
                        <div className='absolute left-[10rem] top-30'>Eat Right,</div>
                        <div className='absolute left-[15rem] top-40'>Feel Amazing</div>
                    </div>
                    <div className='absolute text-sm px-6 text-center top-60 w-[30rem] h-[30rem] rounded-full'>
                        One of the biggest challenges we all face is midnight cravings—that urge to grab something unhealthy late at night. With FoodCription, you no longer have to rely on instant noodles, fast food, or sugary snacks. Our thoughtfully curated meal options ensure you always have <b>a healthy, delicious alternative</b> ready to go.
                    </div>
                </div>
                <div className='w-[30rem] relative left-[30rem] z-10 h-[30rem]  rounded-full' ></div>

            </div>

        </div>
    )
}

export default Crave
