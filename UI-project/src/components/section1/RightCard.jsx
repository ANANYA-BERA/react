import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-50 rounded-3xl shrink-0 overflow-hidden relative bg-blue-200'>
      {/* <img className='h-full w-full object-cover' src={props.img} alt='image'></img> */}
      <RightCardContent />
    </div>
  )
}

export default RightCard
