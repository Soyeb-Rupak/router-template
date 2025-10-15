import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);
const auth = getAuth(app);
const navigate = useNavigate();

console.log(email, password);
const handleLogin = (e) => {
  e.preventDefault();
  // Handle login logic here

  
  console.log(auth);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

navigate("/Products");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError('Invalid email or password');

  });

};

  return (
    <div className="hero bg-base-200 mt-20 container mx-auto w-3/4">
      <div className="hero-content flex-col lg:flex-row-reverse p-20 gap-20">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log-In now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
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
                {error && <p className="text-red-500">{error}</p>}
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
             <p>Don't have an account? Please <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link> </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
