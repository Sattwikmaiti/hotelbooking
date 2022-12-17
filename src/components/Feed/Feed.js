import React from 'react'
import './Feed.css'
import p1 from './1.png'
import p2 from './2.png'
import p3 from './8.png'
import p4 from './5.png'
import p5 from './1.png'
import p6 from './1.png'


const Feed = () => {
  return (
    <>
    <div className="container my-4">
       <div className="row">
        <div className="col">
        <div className="feed1 img">
        
          </div>
        </div>
        <div className="col">
        <div class="containerr">
  <img src={p2} alt="Avatar" className="image"/>
  <div className="middle">
    <div className ="text">France</div>
  </div>
</div>
</div>
        <div className="col">
        <div className="feed1 img1">
             
             </div>

        </div>
        
       </div>
       <div className="row">
       <div className="col">
        <div class="containerr">
  <img src={p4} alt="Avatar" className="image"/>
  <div className="middle">
    <div className ="text">Australia</div>
  </div>
</div>
</div>
        <div className="col">
        <div className="feed1 img2">
             
             </div>
        </div>
        <div className="col">
        <div className="feed1 img6">
             
             </div>
             
        </div>
        <div className="col">
        <div class="containerr">
  <img src={p3} alt="Avatar" className="image"/>
  <div className="middle">
    <div className ="text">Maldives</div>
  </div>
</div>
</div>
       </div>
        
          
    
    

     </div>
    </>
  )
}

export default Feed
