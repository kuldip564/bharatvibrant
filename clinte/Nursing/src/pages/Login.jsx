import { Suspense, useContext, useState } from "react";
import { AuthContext } from "../App";

const BASE_URL = "http://localhost:2000/user"; // Backend URL

export default function AuthForm() {
  const {setLoginc} = useContext(AuthContext)
  
  const [success,setSuccess] = useState(false)
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  setLoginc(success)
  const resetMessages = () => {
    setError("");
    setSuccessMsg("");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    resetMessages();

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }
      setSuccess(data.success)

      setSuccessMsg(data.message || "Login successful!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setFullName("");
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    resetMessages();

    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: fullName, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccessMsg("Registration successful!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setFullName("");
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-blue-200 p-6">
      {success? "done":
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 relative font-sans">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-10 text-center tracking-wide">
          {isLogin ? "Login to Bharat Vibrant" : "Register at Bharat Vibrant"}
        </h2>

        {error && (
          <p className="text-red-600 text-center font-semibold mb-4">{error}</p>
        )}

        {successMsg && (
          <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg mb-6 text-center font-semibold shadow-md">
            {successMsg}
          </div>
        )}

        <form
          onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}
          className="space-y-8"
        >
          {!isLogin && (
            <div>
              <label htmlFor="fullName" className="block text-teal-700 font-semibold mb-3 text-lg">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-teal-300 rounded-xl px-5 py-4 text-gray-900 placeholder-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-300 transition"
                required={!isLogin}
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-teal-700 font-semibold mb-3 text-lg">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-teal-300 rounded-xl px-5 py-4 text-gray-900 placeholder-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-300 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-teal-700 font-semibold mb-3 text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-teal-300 rounded-xl px-5 py-4 text-gray-900 placeholder-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-300 transition"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-teal-700 font-semibold mb-3 text-lg">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-teal-300 rounded-xl px-5 py-4 text-gray-900 placeholder-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-300 transition"
                required={!isLogin}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-teal-700 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="mt-10 text-center text-teal-700 font-semibold">
          {isLogin ? "Don’t have an account? " : "Already have an account? "}
          <button
            onClick={() => {
              resetMessages();
              setIsLogin(!isLogin);
            }}
            className="underline hover:text-teal-500 cursor-pointer focus:outline-none"
          >
            {isLogin ? "Register here" : "Login here"}
          </button>
        </p>
      </div>
      }
    </div>
  );
}
