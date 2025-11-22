import React from 'react'
import './index.css'
const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        
        <div className="top">
          <div className="logo">
             <img src="/amazon_logo.jpg" alt="external-link" />
          </div>
            <button>Save
             <img className='btn-img' src="/bookmark.png"/></button>
        </div>

        <div className="center">
          <div className="span">
          <h3>Amazon</h3>
          <p>5 days ago</p>
          </div>
          <h2>Graphic Designer</h2>
          <div className="btn">
          <button>Full-Time</button>
          <button>Flexible Schedule</button>
          </div>
          
        </div>
        

        <div className="bottom">
          <div className="lft">
          <h2>$100/hr</h2>
          <p>Delhi, India</p>
          </div>
          <button>Apply Now</button>
        </div>

     </div> 
    </div>
  )
}

export default App
