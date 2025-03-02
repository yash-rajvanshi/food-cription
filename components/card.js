import React from 'react'
import Image from 'next/image'



const Card = ({ CardImg, title, content, num }) => {
    return (
        <div>
            <div className='w-[250px] h-[340px] md:w-[220px] xl:w-[270px] lg:w-[260px] rounded-3xl flex flex-col overflow-hidden bg-white shadow-[0px_0px_6px_1px_rgba(0,_0,_0,_0.1)]'>
                <div><Image src={CardImg} alt='card' width={260} height={150} /></div>
                <div className='flex flex-col'>
                    <div className='px-5 py-2 text-3xl text-gray-700'>{title}</div>
                    <div className='px-5 py-3 flex gap-6 '>
                        <div className='text-sm w-[50vw] text-gray-600 '>{content}</div>
                        <div className='w-[10vw]'><div className='w-10 h-10 bg-gradient-to-l from-lime-300 to-lime-500 
                            relative rounded-full  shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.1)]'>
                            <div className='absolute left-4 text-white top-2 '>{num}</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
