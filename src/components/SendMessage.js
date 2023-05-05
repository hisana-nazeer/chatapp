import React from 'react'
import { useState } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { db, auth } from '../firebase'

function SendMessage({scroll}) {
    const [msg, setMsg] = useState('')
   
    async function sendMessage(e){ //calling the event e
    e.preventDefault()
    
  
    const {uid, photoURL} = auth.currentUser
// getting data from current user(userid and photo of currentuser)
    
   await db.collection('messages').add({
    text:msg,
    photoURL,
    uid,
    createdAt : firebase.firestore.FieldValue.serverTimestamp()

   })
   setMsg('')
   scroll.current.scrollIntoView ({ behaviour: 'smooth'})
}






    
  return (
    <div>
      <form onSubmit={sendMessage}>
      <div className="sendMsg">
        <input value={msg} type='text' onChange={e => setMsg(e.target.value)} placeholder='message here' />
{/* this binds the user enterd value to the 'msg' state */}
       
<button className='send-button' type= "submit">        Send</button> 
       </div>
        </form> 
    </div>
  )
}

export default SendMessage
