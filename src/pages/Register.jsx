import React, { useState } from 'react'
import './Register.css';
// import Add from "../img/gallary.png";
import{createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from '../Firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Register = () => {
   const [err,setErr]  = useState(false)
   const navigate = useNavigate() 

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file= e.target[3].files[0];

    try{
   
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
             <span className='title' >Register</span>

            <form onSubmit={handleSubmit}>
                <input type='text'  placeholder='display name'/>
                 <input type='email' placeholder='email here' />
                  <input type='password' placeholder='password' />
                   <input style={{display:'none'}} type='file' id="file" />
                   <label htmlFor='file'>
                    {/* <img src ={Add} alt=''></img> */}
                    <span>Add an avtar</span>
                   </label>
                   <button>Sign up</button>
                   {err && <span>Something went wrong</span>}
            </form>
            <p>Lorem ipsum dolor sit amet. login</p>
        </div>
    </div>
  )
}

export default Register