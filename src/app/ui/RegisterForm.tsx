"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const router = useRouter();
    
    useEffect(() => {
      setAddress("0xiuiuh78y8hu787uihiu");
    },[])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          const res = await fetch("api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
              address 
            }),
          });
    
          if (res.ok) {
            router.push('/signin');
    
          } else {
            console.log("User registration failed.");
          }
        } catch (error) {
          console.log("Error during registration: ", error);
        }
      };

      return (
        <div className="bg-blue-500 shadow-lg p-5 rounded-lg text-black">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">


            <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="bg-white text-black rounded-lg px-3 py-2"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
            className="bg-white text-black rounded-lg px-3 py-2"
          />
            <Button className="bg-blue-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </Button>
            </form>
        </div>
    )
}