import React from 'react'
// import CraveBg from "@/assets/images/CraveBg.jpg"
// import CraveBg1 from "@/assets/images/CraveBg.jpg"
// import Image from 'next/image'
const Crave = () => {
    return (
        <div className='flex flex-col gap-4 lg:gap-10 font-zain xl:justify-center xs:bg-[url("/CraveBg1.jpg")] xl:bg-[url("/CraveBg.jpg")] xs:px-4 xl:px-20 mb-16 xs:h-[100vh] xl:h-[90vh] bg-cover bg-no-repeat bg-center' >
            <div className='text-3xl xs:py-10 xl:py-0 xl:text-5xl text-[#5ab001]'>
                    Beat The Cravings, Eat Right, Feel Amazing
            </div>
            <p className='w-[90vw] xl:w-[50vw] text-2xl xl:text-3xl'>
                One of the biggest challenges we all face is midnight cravings—that urge to grab something unhealthy late at night.With FoodCription, you no longer have to rely on instant noodles, fast food, or sugary snacks.Our thoughtfully curated meal options ensure you always have <b b > a healthy, delicious alternative</b> ready to go.
            </p>



        </div>



    )
}

export default Crave
