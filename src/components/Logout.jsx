import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import app from '../firebase/firebase.config';




const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
  
  const auth = getAuth(app);
  signOut(auth).then(() => {
    // Sign-out successful.
    alert("User Logged Out Successfully");
    navigate("/login"); 
  }).catch((error) => {
    // An error happened.
  });
};
  return (
    <div className='text-end m-4 w-1/12'>
      <button onClick={handleLogout} className='btn btn-error '>Logout</button>
    </div>
  )
}

export default Logout
