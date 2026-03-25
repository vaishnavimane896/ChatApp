import { onAuthStateChanged } from "firebase/auth"
import { createContext, useEffect, useReducer, useState } from "react"
import { auth } from "../Firebase"
import { onAuthStateChanged } from "firebase/auth"

export const ChatContext = createContext()
export const ChatContextprovider =({children}) =>{}
 export  const AuthContextProvider = ({children}) =>{
   const INITIAL STATE ={
    chatId :"null",
    user :{}
   }
    
   const  chatReducer =(state,action) =>{
    switch(action.type){
        case "CHANGE_USER";
       return{
user:action.playload,
chatId:
currentUser.uid>action.playload.uid ? currentUser.uid+action.playload.uid:action,playload.uid+currentUser.uid,
        }

        default:
            return state


    }
   
const [state,dispatch] = useReducer(chatReducer,INITIAL_sTATE);


     return(
        <ChatContext.Provider value={{data:state,dispatch}}>
            {children}
        </ChatContext.Provider>
     );
 }