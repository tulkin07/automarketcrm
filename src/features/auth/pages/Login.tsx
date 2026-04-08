"use client";

import React, { useState } from "react";
import { useSession } from "../../../context/SessionContext";
import { useUser } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setIsAuth } = useSession();
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || !password) {
      setError("Fill all fields");
      return;
    }

    setError("");
    setLoading(true);

    // ⏳ fake API
    setTimeout(() => {
      // 🔐 oddiy tekshiruv (test uchun)
      if (phone === "+998901234567" && password === "12345") {
        const userData = {
          id: 1,
          phone,
          fullName: "Ali Aliyev",
          region: "Tashkent",
          city: "Tashkent",
          role: "hr",
          active: true,
        };

        localStorage.setItem("token", "fake_token");
        localStorage.setItem("user", JSON.stringify(userData));

        setUser(userData);
        setIsAuth(true);

        navigate("/");
      } else {
        setError("Invalid phone or password");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-100">
      <form
        onSubmit={handleLogin}
        className="bg-white py-8 px-6 shadow-md rounded-2xl w-[350px] flex flex-col gap-5"
      >
        <h1 className="text-2xl font-semibold text-center">Login</h1>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-500">Phone number</label>
          <input
            type="text"
            placeholder="+998..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-500">Password</label>
          <input
            type="password"
            placeholder="••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition flex items-center justify-center"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}