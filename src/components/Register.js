import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const router = useNavigate();
    async function register() {
        try {
            await axios.post("http://202.29.230.197:30120/register", {
                username: username,
                password: password,
                email: email
            }).then((res) => {
                if(res.status===200){
                console.log(res.data)
                router("/success");}
                else{
                    console.log("error")
                }
            })
        } catch (err) {
            console.log("hee");
        }
    }
    return (
       
            <div>
                <input
                    className="m-3 rounded"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="m-3 rounded"
                    type="password"  // Change to password type for better security
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className="m-3 rounded"
                    type="email"  // Change to password type for better security
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className="bg-black text-red-600"
                    onClick={register}
                >
                    Click me 
                </button>
                <button className="bg-black text-red-600"
                onClick={() => router("/login")}
                >
                    login
                </button>
            </div>
   
    );
}