import React, { useContext } from 'react'
import './Message.css';
import { AuthContext } from '../context/AuthContext';


const Message = () => {

 const {currentUser} = useContext(AuthContext)
 const {data} = useContext(ChatContext)


  return (
    // <div className='message'>
    // <div className="messageinfo">
    //   <img src=''  alt=''/>
    //   <span>just now</span>
    //   </div>
    //   <div className="massagecontact">
    //     <p>Lorem ipsum dolor sit amet consectetur.</p>
    //     <img src='https://tse3.mm.bing.net/th/id/OIP._sn4XnMdbGvYHL6TUflk3QHaLH?pid=Api&h=220&P=0' alt='' />
    // </div>

    </div>
  )
}

export default Message
