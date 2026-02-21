import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../styles/AuthPages.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(formData.email, formData.password);
    setLoading(false);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error || "Login failed. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-wrapper">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your Évora account</p>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="form-button" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <div className="forgot-password">
              <a href="#/">Forgot your password?</a>
            </div>
          </form>

          <div className="auth-divider">OR</div>

          <div className="social-login">
            <button className="social-btn google">Continue with Google</button>
            <button className="social-btn facebook">
              Continue with Facebook
            </button>
          </div>
        </div>

        <div className="auth-image">
          <div className="auth-image-placeholder">
            <div className="retro-text">évora</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
