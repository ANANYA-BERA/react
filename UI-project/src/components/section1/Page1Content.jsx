import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='px-15 py-8 h-[90vh] flex items-center gap-10'>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page1Content
