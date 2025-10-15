import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Link, Navigate, useNavigate } from "react-router";

const Signup = () => {

const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const auth = getAuth(app);


console.log(email, password);
  console.log(auth);

const handleSubmit = (e) => {
  e.preventDefault();
 

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    alert("User Sign-up Successful");
    navigate("/login");
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
      console.log("Error Code:", error.code);
  console.log("Error Message:", error.message);
  alert(error.message);
    // ..
  });
}




  return (
    <div className="hero bg-base-200 mt-20 container mx-auto w-3/4">
      <div className="hero-content flex-col lg:flex-row-reverse p-20 gap-20">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign-up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Signup</button>
              </fieldset>
            </form>
            <p>Already Have an account? Please <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
