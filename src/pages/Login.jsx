import React from 'react'
import { useState } from 'react';
import Add from "../img/gallary.png";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate,Link } from 'react-router-dom';
import { auth } from '../Firebase';


const Login = () => {

const [err,setErr]  = useState(false)
   const navigate = useNavigate() 

  const handleSubmit = async (e)=>{
    e.preventDefault()
   
    const email = e.target[0].value;
    const password = e.target[1 ].value;
    

    try{
      signInWithEmailAndPassword(auth, email, password)
      navigate("/")
   
     const res =  await createUserWithEmailAndPassword(auth, email, password);
    }catch(err){
      setErr(true);

    }

    await setDoc(doc(db,"users",res.user.uid),{
      uid:res.user.uid,
      displayName,
      email,
    })

    await setDoc(doc(db,"userchat",res.user.uid) , {})
    navigate ("/")


  }




  return (
    <div  className='fromcontainer'>

        <div className='fromwrapper'>
            <span className='logo' >ChatApp</span>
            
            <form onSubmit={handleSubmit}>
                
                 <input type='email' placeholder='email here' />
                  <input type='password' placeholder='password' />
                  
                   <button>Sign in</button>
                   {err && <span>Something went wrong</span>}
            </form>
            <p>Lorem ipsum dolor sit amet. <Link to ="register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login