import React from 'react';
// import vediocall from "..public/img/vediocall.png"
// import addfrd from "..public/img/addfrd.png"
// import more from "..public/img/more.png"
import './Chat.css';
import Mesagess from './Mesagess';
import Input from './Input';


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>jane</span>
        <div className="chaticons">
          {/* <img src={vediocall} alt="" />
           <img src={addfrd} alt="" />
            <img src={more} alt="" /> */}
        </div>
        <Mesagess />
        <Input />
      </div>


      
    </div>
  )
}

export default Chat
