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

import p20 from './20.png'
import p21 from './21.png'
import p22 from './22.png'
import p23 from './23.png'
import p24 from './24.png'
import p25 from './25.png'

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
<br />
<br />
<br />
      <div className="trips">
      <h1 style={{color:'white',textAlign:'center'}}>Trips and Tours  </h1>
         <div className="row">
           <div className="col">
           <div class="card bg-dark" style={{width:'20rem',opacity:'0.8'}}>
  <img class="card-img-top" src={p20} style={{height:'200px'}}alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" style={{color:'white'}}>Thailand</h5>
    <p class="card-text" style={{color:'white'}}>A land of heavens , where you can take a break from daily hustle and enjoy the view.</p>
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style={{backgroundColor:'black',color:'white'}}>Starting from &#x20B9;50,000 per person (4D,5N)</li>
  </ul>
  <a href="#" class="btn btn-primary">View Details</a>
</div>

           </div>
           <div className="col">
           <div class="card bg-dark" style={{width:'20rem',opacity:'0.8'}}>
  <img class="card-img-top" src={p21}style={{height:'200px'}} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" style={{color:'white'}}>Malaysia</h5>
    <p class="card-text" style={{color:'white'}}>An ospicious place of free minds and complete meditaiton where you can enjoy .</p>
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style={{backgroundColor:'black',color:'white'}}>Starting from &#x20B9;55,000 per person (3D,4N)</li>
  </ul>
  <a href="#" class="btn btn-primary">View Details</a>
</div>

           </div>
           <div className="col">
           <div class="card bg-dark" style={{width:'20rem',opacity:'0.8'}}>
  <img class="card-img-top" src={p22} style={{height:'200px'}}alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" style={{color:'white'}}>Venice</h5>
    <p class="card-text" style={{color:'white'}}>The place of gondola ,where you can feel the smell of streets and head start your life</p>
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style={{backgroundColor:'black',color:'white'}}>Starting from &#x20B9;50,000 per person (4D,5N)</li>
  </ul>
  <a href="#" class="btn btn-primary">View Details</a>
</div>

           </div>
         </div>
         <div className="row">
         <div className="col">
           <div class="card bg-dark" style={{width:'20rem',opacity:'0.8'}}>
  <img class="card-img-top" src={p12} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" style={{color:'white'}}>Thailand</h5>
    <p class="card-text" style={{color:'white'}}>A land of heavens , where you can take a break from daily hustle and enjoy the view.</p>
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style={{backgroundColor:'black',color:'white'}}>Starting from &#x20B9;50,000 per person (4D,5N)</li>
  </ul>
  <a href="#" class="btn btn-primary">View Details</a>
</div>

           </div>
           <div className="col">
           <div class="card bg-dark" style={{width:'20rem',opacity:'0.8'}}>
  <img class="card-img-top" src={p12} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" style={{color:'white'}}>Thailand</h5>
    <p class="card-text" style={{color:'white'}}>A land of heavens , where you can take a break from daily hustle and enjoy the view.</p>
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style={{backgroundColor:'black',color:'white'}}>Starting from &#x20B9;50,000 per person (4D,5N)</li>
  </ul>
  <a href="#" class="btn btn-primary">View Details</a>
</div>

           </div>
           <div className="col">
           <div class="card bg-dark" style={{width:'20rem',opacity:'0.8'}}>
  <img class="card-img-top" src={p12} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" style={{color:'white'}}>Thailand</h5>
    <p class="card-text" style={{color:'white'}}>A land of heavens , where you can take a break from daily hustle and enjoy the view.</p>
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style={{backgroundColor:'black',color:'white'}}>Starting from &#x20B9;50,000 per person (4D,5N)</li>
  </ul>
  <a href="#" class="btn btn-primary">View Details</a>
</div>

           </div>
         
         </div>
      </div>
        
          
    
    

     </div>
    </>
  )
}

export default Feed
