import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/login.scss";
import loginImg from "../assets/image1.png";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://6902ce47b208b24affe74ce7.mockapi.io/api/v2/users"
      );
      const users = await response.json();

      const foundUser = users.find(
        (user: any) => user.email === email && user.password === password
      );

      if (foundUser) {
        // store user details
        localStorage.setItem("user", JSON.stringify(foundUser));
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      setError("Login failed. Please try again later.");
    }
  };

  return (
    <div className="login-page">
      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="logo-container">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 1.00016C0 0.447786 0.443238 0 0.99 0H3.96C4.50676 0 4.95 0.447786 4.95 1.00016V19.003C4.95 19.5554 5.39324 20.0032 5.94 20.0032H18.81C19.3568 20.0032 19.8 19.5554 19.8 19.003V16.0025C19.8 15.4502 19.3568 15.0024 18.81 15.0024H12.87C11.2297 15.0024 9.9 13.659 9.9 12.0019V3.00047C9.9 1.34336 11.2297 0 12.87 0H21.78C23.4203 0 24.75 1.34336 24.75 3.00047V22.0035C24.75 23.6606 23.4203 25.0039 21.78 25.0039H2.97C1.32971 25.0039 0 23.6606 0 22.0035V1.00016ZM19.8 6.00095C19.8 5.44857 19.3568 5.00079 18.81 5.00079H14.85V9.00142C14.85 9.55379 15.2932 10.0016 15.84 10.0016H19.8V6.00095Z"
              fill="url(#paint0_linear_6819_58336)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6819_58336"
                x1="-1.87183e-06"
                y1="37.2559"
                x2="26.2531"
                y2="-5.88907"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#213F7D" />
                <stop offset="1" stopColor="#39CDCC" />
              </linearGradient>
            </defs>
          </svg>
          <h1 className="logo-text">lendsqr</h1>
        </div>

        <img src={loginImg} alt="Illustration" className="illustration" />
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <h2 className="welcome">Welcome!</h2>
        <p className="subtitle">Enter details to login.</p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </span>
          </div>

          {error && <p className="error">{error}</p>}

          <p className="forgot">FORGOT PASSWORD?</p>

          <button type="submit" className="login-btn">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}