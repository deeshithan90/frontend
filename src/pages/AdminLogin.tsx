import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminLogin() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://backend-2-ca7m.onrender.com/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      const data: { success: boolean; message?: string } = await res.json();

      if (data.success) {
        toast.success("Login Successful ✅");
        localStorage.setItem("adminLoggedIns", "true");
        navigate("/admin/dashboard");
      } else {
        toast.error(data.message || "Login failed ❌");
      }
    } catch (error) {
      toast.error("Server error ❌");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 mt-40">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-[350px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-4 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-own text-white p-3 rounded">Login</button>
      </form>
    </div>
  );
}