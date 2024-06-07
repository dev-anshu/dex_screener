"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/dashboard",
        redirect: false,
      });
      if (res?.error) {
        setError(res.error);
        return;
      }
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (setter: any) => (e: any) => {
    setter(e.target.value);
    setError(""); 
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
      <div className="bg-[#1f2937] shadow-lg p-5 rounded-lg text-white max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={handleInputChange(setEmail)}
            type="text"
            placeholder="Email"
            className="bg-gray-700 text-white rounded-lg px-3 py-2"
          />
          <input
            onChange={handleInputChange(setPassword)}
            type="password"
            placeholder="Password"
            className="bg-gray-700 text-white rounded-lg px-3 py-2"
          />
          <Button className="bg-gray-600 hover:bg-gray-700 text-white font-bold cursor-pointer px-6 py-2 rounded-lg">
            Login
          </Button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}