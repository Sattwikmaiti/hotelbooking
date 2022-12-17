import React from 'react'
import './Feed.css'
import p1 from './1.png'
import p2 from './1.png'
import p3 from './1.png'
import p4 from './1.png'
import p5 from './1.png'
import p6 from './1.png'

const images =[
{p1},{p2},{p3},{p4},{p5},{p6}

]
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
  <img src={p1} alt="Avatar" className="image"/>
  <div className="middle">
    <div className ="text">Italy</div>
  </div>
</div>
</div>
        <div className="col">
        <div className="feed img">
             
             </div>

        </div>
        
       </div>
       <div className="row">
        <div className="col">
        <div className="feed img">
             
             </div>
        </div>
        <div className="col">
        <div className="feed img">
             
             </div>
        </div>
        <div className="col">
        <div className="feed img">
             
             </div>
             
        </div>
        <div className="col">
        <div className="feed img">
             
             </div>
        </div>
       </div>
        
          
    
    

     </div>
    </>
  )
}

export default Feed
