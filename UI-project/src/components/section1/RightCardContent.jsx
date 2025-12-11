import React from 'react'

const RightCardContent = () => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between leading-tight'>
        <h2 className='bg-white rounded-full h-8 w-8 text-xm font-bold flex justify-center items-center'>1.</h2>
        <div>
            <p className='text-white text-xm mb-8 font-medium leading-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi distinctio consequuntur, voluptatum debitis minus explicabo!</p>
            <div>
                <button className='bg-blue-500 text-white px-6 py-2 rounded-full'>Satisfied</button>
                <button className='bg-blue-500 text-white font-semibold px-3 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
