import React from 'react'
import "./Header.css"
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";

  
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {DateRange} from 'react-date-range'
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

import {format} from 'date-fns'
const Header = () => {
  
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);
  return (
    <div>
      
       <div className="header">
         
            <div className="headeritems">
            <FontAwesomeIcon icon={faBed} style={{padding:'0 10px 0 0'}}/>
            <span>Beds</span>
            </div>
            <div className="headeritems">
            <FontAwesomeIcon icon={ faCalendarDays} style={{padding:'0 10px 0 0'}}/>
            <span>Calender</span>
            </div>

            <div className="headeritems">
            <FontAwesomeIcon icon={faCar} style={{padding:'0 10px 0 0'}}/>
            <span>Car</span>
            </div>
            <div className="headeritems">
            <FontAwesomeIcon icon={  faPerson} style={{padding:'0 10px 0 0'}} />
            <span>Person</span>
            </div>
            <div className="headeritems">
            <FontAwesomeIcon icon={faPlane}style={{padding:'0 10px 0 0'}} />
            <span>Plane</span>
            </div>
            <div className="headeritems">
            <FontAwesomeIcon icon={faTaxi} style={{padding:'0 10px 0 0'}}/>
            <span>Taxi</span>
            </div>

            
         </div>


          <div className="desc my-4">
               <h2 style={{display:'flex',justifyContent:'center'}}> Welcome To Lotus Expresso Rooms !!
               </h2>
               <br />
               <h5 style={{display:'flex',justifyContent:'center'}}>We will serve your day , with the greatest hospitality and ambience .It will be a lifetime experience and memories to cherish ...</h5>
                <br />
                <div style={{paddingLeft:'500px'}}>
                  <button  type="button" className="btn btn-outline-info" style={{color:'black'}} ><h4 > Sign In /  Register</h4></button></div>
          </div>
      
         <div className="search container">
             <div className="searchitem">
             <span> <FontAwesomeIcon className="searchicon" icon={faBed} style={{padding:'0 10px 0 10px'}}/>
               <input size="20" style={{border:'none',height:'40px'}} type="text" placeholder="Destination" className="searchtext"/>
               </span> </div>
             <div className="searchitem">
             <FontAwesomeIcon className="searchicon" icon={faCalendarDays} style={{padding:'0 10px 0 10px'}}/>
         
               <input  onClick={() => setOpenDate(!openDate)}
                  
                  size="30" style={{border:'none',height:'40px'}} type="text" placeholder={`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}  className="searchtext"
                />
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    calendarFocus="backwards"
                    preventSnapRefocus={true}

                    className="date"
                    minDate={new Date()}
                  />)}
        
        
                </div>
                <div className="searchitem">
             <FontAwesomeIcon className="searchicon" icon={faPerson} style={{padding:'0 10px 0 10px'}}/>
  <input size="30" type="text" style={{border:'none',height:'40px'}} placeholder={`${options.adult} adults , ${options.children} children  ,${options.room} room  `}   onClick={() => setOpenOptions(!openOptions)}  />
{openOptions && (
  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}


    
 
             </div>
            
             <div className="searchitem">
             <button type="button" className="btn btn-outline-success">Search</button>
             </div>

         </div>




    </div>
  )
}


export default Header
