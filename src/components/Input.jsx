import React from 'react'
// import imageee from "../img/imageee.png";
// import attach from "../img/attach.png";
import './Input.css';

const Input = () => {
  return (
    <div className='input' >
        <input type="text" placeholder='type something' />
        <div className='send'>
            {/* <img src={attach} alt='' /> */}
            <input type='file' style={{display:none}} id='file' />
            <label htmlFor='file'>
                {/* <img src={imageee} alt='' /> */}
            </label>
            <button>send</button>

        </div>
    </div>
  )
}

export default Input