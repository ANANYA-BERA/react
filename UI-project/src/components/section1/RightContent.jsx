import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full w-2/3 p-7 flex flex-nowrap overflow-x-auto gap-10'>
      {props.users.map(function(elem) {
        return <RightCard img={elem.img} />
      })}
    </div>
  )
}

export default RightContent
