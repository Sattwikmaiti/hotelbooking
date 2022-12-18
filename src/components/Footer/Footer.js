import React from 'react'
import './Footer.css'
import {faPaperPlane} from  "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavigationIcon from '@mui/icons-material/Navigation';
const Footer = () => {
  return (
    <>
    <div className="top">
    <h1>Subscribe to our Daily Newsletter for more offers and timely discount coupons @&#x20B9;999 yearly only!!!</h1>
        <br />
        <br></br>
        </div>
    <div className="foot">
    <div className="my-4 ">
        
       <form action="#">
                                    <div class="form-row">
                                        <div class="col dk-footer-form">
                                            <input size="50" type="email" class="form-control" placeholder="Email Address" style={{color:'white'}}/>
                                            <button type="submit">
                                            <FontAwesomeIcon className="searchicon" icon={faPaperPlane} style={{padding:'10px 10px 0 10px'}}/>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                
                                </div>
                                
        </div>
        <a href="#"><div className="my-2" style={{display:'flex',justifyContent:'center'}}><NavigationIcon /></div> </a>            
        <div className="connect" style={{backgroundColor:'grey',padding :'5px',display:'flex',justifyContent:'center'}}>
            
              
              <div className="ic" >
             
              <GoogleIcon className="opl" />
              <TwitterIcon className="opl"/>
              <GitHubIcon className="opl"/>
              <LinkedInIcon className="opl"/>
              <FacebookIcon className="opl"/>
             
                </div>
                

                
        </div>
        <h4 style={{display:'flex',justifyContent:'center',backgroundColor:'grey'}}>@Copyright 2022 Travelo.co.in </h4>
                  


                                
    
    </>
  )
}

export default Footer
