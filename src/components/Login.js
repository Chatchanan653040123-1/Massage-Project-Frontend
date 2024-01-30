import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useNavigate();
    async function login() {
        try {
            const res = await axios.post("http://202.29.230.197:30120/login", {
                identifier: username,
                password: password
            })
            router("/success");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="w-screen h-screen bg-red-600 flex items-center justify-center">
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
                <button
                    className="bg-black text-red-600"
                    onClick={login}
                >
                    Click me
                </button>
            </div>
        </div>
    );
}
