import React, { useState } from 'react'
// import imageee from "../img/imageee.png";
// import attach from "../img/attach.png";
import './Input.css';
import { ChatContext } from '../Context/Chatcontext';
import Message from './Message';
import { arrayUnion } from 'fir ebase/firestore';
import {v4 as uuid} from "uuid"
import { Timestamp } from 'firebase/firestore';

const Input = () => {
 const [text,setText] = useState("");
 const [img,setImg] = useState( ChatContext)


  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)
  const handlesend= asyns() =>{
    if(img) {
      const storageRef = ref (Storage,uuid)

      const uploadTask = uploadBytesResumable(storageRef,----)

    }else{
      await updateDoc(doc(db,"chats",data.chatId),{
        Messagess:arrayUnion({
          id:uuid,
          text,
          senderId:currentUser.uid,
          date:Timestamp.now(),

        })
      })

    }

  }
 
  return (
    <div className='input' >
        <input type="text" placeholder='type something' onChange={e=>setText(e.target.value)} />
        <div className='send'>
            {/* <img src={attach} alt='' /> */}
            <input type='file' style={{display:"none"}} id='file'  onChange={e=>setImg(e.target.files[0])}/>
            <label htmlFor='file'>
                {/* <img src={imageee} alt='' /> */}
            </label>
            <button onClick={handlesend}>send</button>

        </div>
    </div>
  )
}

export default Input
