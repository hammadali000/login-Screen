import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import image from "../assets/image.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address";
    if (password.length < 6) next.password = "Password must be at least 6 characters";
    setErrors(next);
    if (Object.keys(next).length) return;

    console.log("Login with:", { email, password });
  };

  const input =
    "h-[46px] w-full rounded-xl border border-white/30 bg-white pl-[49px] text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-300";

  return (
    <div
      className="relative min-h-[max(100vh,924px)] w-full font-sans"
      style={{ background: "linear-gradient(to bottom, #0e6e66, #021312)" }}
    >
      {/* left */}
      <img
        src={image}
        alt=""
        className="absolute left-[109px] top-[135px] h-[600px] w-[600px] object-contain"
      />

      {/* Right */}
      <div className="absolute left-[822px] top-[96px] flex h-[713px] w-[448px] max-w-[448px] flex-col items-center gap-5">
        <div className="flex h-[669px] w-[448px] flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-8">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col">
            <h1 className="text-center text-2xl font-bold text-white">Welcome Back 👋</h1>
            <p className="mt-1 text-center text-xs text-teal-100/80">
              Login to continue your application
            </p>

            {/* Email */}
            <label htmlFor="email" className="mt-8 mb-1.5 text-sm font-medium text-white">
              Email
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-[17px] top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`${input} pr-[17px]`}
              />
            </div>
            {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}

            {/* Password */}
            <label htmlFor="password" className="mt-5 mb-1.5 text-sm font-medium text-white">
              Password
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-[17px] top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={`${input} pr-[49px]`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-[17px] top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-300">{errors.password}</p>}

            <a href="#" className="mt-3 self-end text-sm font-medium text-white hover:underline">
              Forgot Password?
            </a>

            <button
              type="submit"
              className="mt-4 h-[46px] rounded-xl bg-white text-base font-semibold text-gray-900 hover:bg-teal-50"
            >
              Login
            </button>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/25" />
              <span className="text-xs text-teal-100/80">Or continue with</span>
              <div className="h-px flex-1 bg-white/25" />
            </div>

            {/* Google */}
            <button
              type="button"
              className="flex h-[46px] items-center justify-center gap-2 rounded-xl border border-white/30 text-base font-semibold text-white hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.23c1.89-1.74 2.99-4.3 2.99-7.34Z" />
                <path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.61-2.43l-3.23-2.5c-.9.6-2.04.95-3.38.95-2.6 0-4.8-1.76-5.59-4.12H3.07v2.58A10 10 0 0 0 12 22Z" />
                <path fill="#FBBC05" d="M6.41 13.9a6 6 0 0 1 0-3.8V7.52H3.07a10 10 0 0 0 0 8.96l3.34-2.58Z" />
                <path fill="#EA4335" d="M12 5.98c1.47 0 2.79.5 3.82 1.5l2.86-2.86C16.95 3.02 14.7 2 12 2A10 10 0 0 0 3.07 7.52l3.34 2.58C7.2 7.74 9.4 5.98 12 5.98Z" />
              </svg>
              Google
            </button>

            <p className="mt-6 text-center text-xs text-teal-100/80">
              Don't have an account?{" "}
              <Link to="/Signup" className="font-bold text-white hover:underline">
                Signup
              </Link>
            </p>
          </form>
        </div>

        <p className="text-xs leading-6 text-white">
          © 2024 Your Education Platform. All rights reserved.
        </p>
      </div>
    </div>
  );
}