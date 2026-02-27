"use client";

import { useState } from "react";

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = async () => {

    if(!email || !password){
      alert("Enter email and password");
      return;
    }

    const res = await fetch("http://localhost:3000/auth/login",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({
        email,
        password
      })

    });

    if(!res.ok){
      alert("Login failed");
      return;
    }

    const data = await res.json();

    localStorage.setItem("token",data.access_token);

    window.location.href="/dashboard";

  };

  return(

    <div>

      <h1>Login</h1>

      <input
      placeholder="email"
      onChange={(e)=>setEmail(e.target.value)}
      />

      <input
      type="password"
      placeholder="password"
      onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={login}>
      Login
      </button>

    </div>

  );

}