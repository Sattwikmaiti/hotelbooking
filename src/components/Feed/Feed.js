import React from 'react'
import './Feed.css'
import SimpleImageSlider from "react-simple-image-slider";
import p1 from './1.png'
import p2 from './2.png'
import p3 from './8.png'
import p4 from './5.png'
import p5 from './1.png'
import p6 from './1.png'
import p11 from './11.png'
import p12 from './12.png'
import p13 from './13.png'

import p14 from './14.png'
import p15 from './15.png'



const Feed = () => {
  const images = [
    { url: p11 },
    { url:p12 },
    { url: p13},
    { url: p14 },
    
    { url: p15},
   
  ];
  
  return (
    <>
    <div className="container my-4">
       <div className="row">
        <div className="col">
        <div className="feed1 img">
        
          </div>
        </div>
        <div className="col">
        <div className="containerr">
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
        <div className="containerr">
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
        <div className="containerr">
  <img src={p3} alt="Avatar" className="image"/>
  <div className="middle">
    <div className ="text">Maldives</div>
  </div>
</div>
</div>
       </div>
       <br />
       <br />
        <h1 style={{color:'white',textAlign:'center'}}>Property Delux Rooms </h1>
        <div className="imageslider">
        <div>
      <SimpleImageSlider
          className="lol"
        width={600}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'}}
        autoPlay={true}
        autoPlayDelay={2.0}
        slideDuration={1}
      />
    </div>



        </div>
        
          
    
    

     </div>
    </>
  )
}

export default Feed
