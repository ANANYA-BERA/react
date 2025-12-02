import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        
        <div className="top">
          <div className="logo">
             <img src={props.logo} alt='logo' />
          </div>
            <button>Save
             <img className='btn-img' src="/bookmark.png"/></button>
        </div>

        <div className="center">
          <div className="span">
          <h3>{props.companyName}</h3>
          <p>{props.date}</p>
          </div>
          <h2>{props.post}</h2>
          <div className="btn">
          <button>{props.tag1}</button>
          <button>{props.tag2}</button>
          </div>
          
        </div>
        

        <div className="bottom">
          <div className="lft">
          <h2>{props.pay}</h2>
          <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>

     </div>
    </div>
  )
}

export default Card
