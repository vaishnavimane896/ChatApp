import React, { useState } from 'react'
import './Search.css';
import { collection, query, where ,getDocs} from "firebase/firestore";
import {db} from "../Firebase"

const Search = () => {
  const [username,setUsername] = useState("");
  const [user,setUser] = useState(null)
   const [err,setErr] = useState(false)

   const handleSearch = async() =>{
    const q = query(collection(db,"users"),where("displayName","==",username)
  )
  try{
     const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  setUser(doc.data())
 
});

  }catch(err){
    setErr(true)
  }
 

   }

   const handleKey = e =>{
    e.code==="Enter" && handleSearch()
   }
   const handleSelect =() =>{
    
   }
  return (
    <div className=''>
      <div className="searchform">
        <input type="text" placeholder='find the user' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} />
      </div>
      {err && <span>user not found</span>}
     {user &&  <div className="userchat" onClick={handleSelect}>
        <img src={user.phurl} alt='' />
        <div className="userchatinfo">
          <span>{user.displayName}</span>
        </div>

       
      </div>}
    </div>
  )
}

export default Search
