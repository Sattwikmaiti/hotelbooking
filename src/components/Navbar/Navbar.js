import React from 'react'
import "./Navbar.css"
import p1 from '../../images/1.png'

const Navbar = () => {
  return (
    <div>
       <div className="containern">
          <div className="logo">
          <span >
          <img src={ p1}  style={{height:'30px'}} /> 
          </span>
          
          <span style={{padding:'10px',color:'burlywood',fontWeight:'bolder',fontSize:'20px'}}>Lotus Expresso Rooms</span>
           
        
           

          
          

         <div className="bbtn">
  <button className="btn btn-outline-secondary mx-4" type="button">Sign In</button>
  <button className="btn btn-outline-success" type="button">Register</button>
</div>
       </div>
       </div>
      
    </div>
  )
}

export default Navbar
