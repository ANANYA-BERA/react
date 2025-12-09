import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
const App = () => {
  const users = [
    {
      Img:'https://i.pinimg.com/736x/fa/59/06/fa59062a5e1ada785fb03233ca650039.jpg',
      intro:'',
      tag:'Satisfied' 
    },
    {
      Img:'https://i.pinimg.com/736x/61/b9/94/61b994e93fe4c60a9d699b290e46c658.jpg',
      intro:'',
      tag:'Underserved'
    },
    {
      Img:'https://i.pinimg.com/736x/05/57/91/0557915cfaff67a373b266f07032f48a.jpg',
      intro:'',
      tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
