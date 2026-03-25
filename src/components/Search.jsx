import React, { useContext, useState } from 'react'
import './Search.css';
import { collection, query, where ,getDocs, setDoc, updateDoc, serverTimestamp} from "firebase/firestore";
import {db} from "../Firebase"
import { AuthContext } from '../context/AuthContext';

const Search = () => {
  const [username,setUsername] = useState("");
  const [user,setUser] = useState(null)
   const [err,setErr] = useState(false)

   const {currentUser} = useContext(AuthContext)

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
   const handleSelect = async () =>{
    const combinedId= currentUser.uid>user.uid ? currentUser.uid+user.uid:user.uid+currentUser.uid;
    try{
    const res = await getDoc (doc(db,"chats", combinedId))
    if(!res.exists()){
      await setDoc(doc,(db,"chats",combinedId),{messages:[]});
      


      await  updateDoc(doc(db,"userchats",currentUser.uid),{
         [combinedId+".userInfo"]:{
          uid:user.uid,
          displayName:user.displayName,
          
         }
         [combinedId+".date"]:serverTimestamp()
      })
      await  updateDoc(doc(db,"userchats",user.uid),{
         [combinedId+".userInfo"]:{
          uid:currentUser.uid,
          displayName:currentUser.displayName,
          
         }
         [combinedId+".date"]:serverTimestamp()
      })
    }
    }catch(err) {}
    setUser(null)
    setUsername("")
    
   }
  return (
    <div className=''>
      <div className="searchform">
        <input type="text" placeholder='find the user' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} 
         value={username}
        />
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
