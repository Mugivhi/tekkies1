import "./App.css";
import React, { Component } from 'react';
// import { FaAngleLeft } from "react-icons/fa";
// import { FaAngleRight } from "react-icons/fa";
import pic  from './components/purple.png';
import pic2 from './components/orange.png';
import pic3 from './components/white.png';
function AddItem(){
    return(
        <div className='first'>
            <div className='viewed'>
               <h3>PEOPLE ALSO VIEWED</h3>
               {/* <div className='arrow'>
                <FaAngleLeft />
                <p>1 of 3</p>
                <FaAngleRight />
            </div> */}
            <div className='pictures'>
                <img src={pic}></img>
                <img src={pic2}></img>
                <img src={pic3}></img>
            </div>
            </div>
        </div>
    )
}


export default AddItem;