"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const res = await fetch("https://freeapi.app/api/v1/users/register", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      const res = await fetch("https://api.freeapi.app/api/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok && data.data?.token) {
        //....................Saving token to cookies.
        //   ................
        Cookies.set("token", data.data.token, { expires: 7 });
        console.log(" Token from API:", data.data.token);
        console.log("Token from Cookies:", Cookies.get("token"));

        toast.success("Registration successful!");
        setTimeout(() => router.push("/login"), 1000);
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Register
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="username"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              // onChange={handleChange}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {loading ? (
                <TailSpin height={24} width={24} color="#fff" />
              ) : (
                "Register"
              )}
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>

          <ToastContainer position="top-center" autoClose={2500} />
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2500} />
    </div>
  );
}
