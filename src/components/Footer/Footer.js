import React from 'react'
import './Footer.css'
import {faPaperPlane} from  "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <div className="foot">
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
  )
}

export default Footer
