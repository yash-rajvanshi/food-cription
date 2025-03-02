import React from 'react'
import Card from '@/components/card'
import How1 from '@/assets/images/How1.png'
import How2 from '@/assets/images/How2.png'
import How3 from '@/assets/images/How3.png'

const How = () => {
    return (
        <div className='flex flex-col gap-18 mb-10'>
            <div className='flex flex-col xs:ml-8 xl:ml-28 gap-2 xs:text-3xl text-gray-700 md:text-5xl xl:text-6xl '>
                <h1 className="xs:text-4xl xl:text-5xl font-bold">
                    <span className="">FOOD</span>
                    <span className=" relative">CR<sub className='absolute xs:bottom-[0.8rem]  xs:left-[2.6rem] xl:bottom-[0.8rem] xl:left-[3.6rem]  transform -translate-x-1/2'>x</sub>IP</span>
                    <span className="relative">
                        TION
                    </span>
                </h1>
                <div className='flex items-center'>
                    <div className='xs:w-30 xl:w-52 h-1 bg-[#5ab00a5a]'></div>
                    <div>How It Works!</div>
                </div>
            </div>
            <div className='flex xl:flex-row xs:flex-col gap-8  md:flex-row  justify-center items-center mb-16'>
                <Card CardImg={How1} num="1" title="Express" content="Feeling tired? Bloated? Heavy? We’ve got you covered." />
                <Card CardImg={How2} num="2" title="Personalized" content="Our expert-designed meals nourish your body with the right balance of nutrients." />
                <Card CardImg={How3} num="3" title="Indulge" content="Satisfying, wholesome, and delivered right when you need it." />
            </div>

        </div>
    )
}

export default How
