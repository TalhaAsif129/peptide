// src/component/pages/AuthPages/SignInPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sign in with:", { email, password });
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");
  };

  return (
    <div className="bg-[#f0f4f3] min-h-screen font-sans flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[480px] bg-white border border-[#e2e8e6] rounded-2xl px-6 md:px-10 py-8 md:py-10">

        {/* ===== Top Icon ===== */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-[#e8f1ef] flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0d5b60"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </div>
        </div>

        {/* ===== Heading ===== */}
        <h1 className="text-[#0f2027] font-extrabold text-2xl md:text-[26px] text-center leading-tight tracking-tight mb-2">
          Sign in to your tracker
        </h1>

        {/* ===== Subheading ===== */}
        <p className="text-[#6a7a75] text-[14px] text-center leading-relaxed mb-8">
          Pick up your protocols and dose history right where you left off.
        </p>

        {/* ===== Form ===== */}
        <form onSubmit={handleSignIn}>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-[14px] font-semibold text-[#0f2027] mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-[#d5d5d5] rounded-lg text-[15px] text-[#0f2027] placeholder-[#9aa8a3] outline-none focus:border-[#0d5b60] transition-colors"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-[14px] font-semibold text-[#0f2027] mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full px-4 py-3 pr-12 border border-[#d5d5d5] rounded-lg text-[15px] text-[#0f2027] placeholder-[#9aa8a3] outline-none focus:border-[#0d5b60] transition-colors"
              />
              {/* Eye toggle */}
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#6a7a75] hover:text-[#0d5b60] transition-colors"
              >
                {showPassword ? (
                  // Eye-off icon
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  // Eye icon
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <Link
              to="/forgot-password"
              className="text-[14px] font-semibold text-[#0d5b60] underline hover:text-[#0a4a4e] transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#0d5b60] hover:bg-[#0a4a4e] text-white text-[15px] font-bold py-3.5 rounded-full transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* ===== OR Divider ===== */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[#e2e8e6]" />
          <span className="text-[12px] font-medium text-[#6a7a75] uppercase tracking-widest">
            Or
          </span>
          <div className="flex-1 h-px bg-[#e2e8e6]" />
        </div>

        {/* ===== Continue with Google ===== */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white border border-[#d5d5d5] hover:border-[#0d5b60] hover:bg-[#f8fbfa] text-[#0f2027] text-[15px] font-semibold py-3.5 rounded-full transition-colors"
        >
          {/* Google G Icon */}
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        {/* ===== Terms Text ===== */}
        <p className="text-[#6a7a75] text-[12px] leading-relaxed text-center mt-5 mb-6">
          By continuing with Google, you agree to our{" "}
          <Link to="/terms" className="text-[#0f2027] underline hover:text-[#0d5b60]">
            Terms
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-[#0f2027] underline hover:text-[#0d5b60]">
            Privacy Policy
          </Link>
          , including emails with tips and partner offers (unsubscribe anytime).
        </p>

        {/* ===== Bottom Links ===== */}
        <div className="text-center space-y-2">
          <p className="text-[14px] text-[#0f2027]">
            New here?{" "}
            <Link
              to="/signup"
              className="text-[#0d5b60] font-semibold underline hover:text-[#0a4a4e] transition-colors"
            >
              Create an account
            </Link>
          </p>
          <p className="text-[14px] text-[#0f2027]">
            Clinic owner?{" "}
            <Link
              to="/clinic-signin"
              className="text-[#0d5b60] font-semibold underline hover:text-[#0a4a4e] transition-colors"
            >
              Sign in to your dashboard
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}