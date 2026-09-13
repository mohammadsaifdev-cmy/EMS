import React from "react";
import { useState } from "react";

const Login = ({handleLogin}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const subHandelar = (e) =>{
        e.preventDefault();
        handleLogin(email, password)
        setEmail("");
        setPassword("");
    }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-gray-700 rounded-xl">
        <form onSubmit={(e)=>{subHandelar(e)}} className="flex flex-col items-center justify-center p-20">
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            className="text-white text-lg outline-none placeholder:text-gray-500 bg-transparent border-2 border-emerald-500 rounded-full py-3 px-5"
            type="email"
            placeholder="Enter Email"
          />

          <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            className="text-white text-lg placeholder:text-gray-500 outline-none mt-5 bg-transparent border-2 border-emerald-500 rounded-full py-3 px-5"
            type="password"
            placeholder="Enter Password"
          />

          <button
            className="mt-5 text-white bg-emerald-500 rounded-full py-3 px-10 hover:bg-emerald-600"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
