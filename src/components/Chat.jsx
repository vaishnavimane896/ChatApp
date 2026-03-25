import React, { useContext } from 'react';
// import vediocall from "..public/img/vediocall.png"
// import addfrd from "..public/img/addfrd.png"
// import more from "..public/img/more.png"
import './Chat.css';
import Mesagess from './Mesagess';
import Input from './Input';
import { ChatContext } from '../Context/Chatcontext';

const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>{data.user?.displayName}</span>
        <div className="chaticons"></div>
      </div>
      <Mesagess />
      <Input />
    </div>
  )
}

export default Chat
