import React, { useEffect, useState } from 'react'
import Message from './Message'
import './Messagess.css';
import { onSnapshot } from 'firebase/firestore';


const Mesagess = () => {
  const [messages,SetMessages] = useState ([])
   const {data} = useContext(ChatContext);


   useEffect (()=>{
 const unsub = onSnapshot(doc(db,"chats",data.chatid),(doc)=>{
  doc.exists()&& SetMessages(doc.data()messages)
 })
 return() =>{
  unsub ()
 }
   },[data.chatid])
   console.log("messages")
  return (
    <div className='messages'>
      {messages.map(m=>(

      <Message  message ={m} key {m.id}/>
      ))}
       
         


    </div>
  )
}

export default Mesagess
