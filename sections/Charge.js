import React from 'react';

const Charge = () => {
  return (
    <div className=" mx-auto flex flex-col justify-center p-8 text-center space-y-6 h-[80vh] mb-16 shadow-lg rounded-2xl bg-[url('/Charge.png')] bg-cover bg-center">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        <span className='text-orange-500'>Take Charge</span> of Your Health Today!
      </h1>
      <p className="text-lg md:text-3xl text-gray-700 font-zain">
        Say goodbye to unhealthy eating habits and hello to a healthier, happier you. 
        <span className='text-[#5AB008] font-bold'> Subscribe to FoodCription</span> now and start eating according to what your body truly needs!
      </p>
      <h2 className="text-2xl md:text-4xl font-semibold">
        <span className='text-[#5AB008]'>FoodCription</span> – Because Eating Right Should Be Easy.
      </h2>
    </div>
  );
};

export default Charge;
