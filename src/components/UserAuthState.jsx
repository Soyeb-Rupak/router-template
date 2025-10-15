import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';

const UserAuthState = () => {
    const [user, setUser] = useState(null);
const auth = getAuth(app);

useEffect(()=>{

const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    setUser(currentUser);
    console.log(currentUser);
  } else {
    setUser(null);
  }
});

return () => unsubscribe();

},[auth])




  return (
    <div className='w-full'>
        <marquee behavior="" direction="">{user? `Welcome ${user.email} !`: "Please Log In"}</marquee>




    </div>
  )
}

export default UserAuthState