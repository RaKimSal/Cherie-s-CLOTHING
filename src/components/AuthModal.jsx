import { useState } from "react";
import { useAuth } from "../context/useAuth";

import "./AuthModal.css";

const AuthModal = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    signup,
    login,
  } = useAuth();

  const [activeTab, setActiveTab] = useState("login");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  if (!isAuthModalOpen) {
    return null;
  }

  const handleLoginChange = (event) => {
    const { name, value } = event.target;

    setLoginForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;

    setSignupForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (!loginForm.email || !loginForm.password) {
      setMessage("Please enter your email and password.");
      return;
    }

    const result = login({
      email: loginForm.email,
      password: loginForm.password,
    });

    if (!result.success) {
      setMessage(result.message);
    }
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    if (
      !signupForm.name ||
      !signupForm.email ||
      !signupForm.password ||
      !signupForm.confirmPassword
    ) {
      setMessage("Please complete all fields.");
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const result = signup({
      name: signupForm.name,
      email: signupForm.email,
      password: signupForm.password,
    });

    if (!result.success) {
      setMessage(result.message);
      return;
    }

    setMessage("");
    setSuccessMessage(result.message);

    setTimeout(() => {
      setSuccessMessage("");
      closeAuthModal();
    }, 1600);
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button
          type="button"
          className="auth-modal-close"
          onClick={closeAuthModal}
          aria-label="Close login modal"
        >
          ×
        </button>

        <div className="auth-modal-header">
          <p className="auth-modal-eyebrow">
            Welcome to Chérie’s
          </p>

          <h2 className="auth-modal-title">
            Your Style, Saved
          </h2>

          <p className="auth-modal-description">
            Login or create an account to save your favorites,
            order history, and cart across visits.
          </p>
        </div>

        <div className="auth-modal-tabs">
          <button
            type="button"
            className={activeTab === "login" ? "active-auth-tab" : ""}
            onClick={() => {
              setActiveTab("login");
              setMessage("");
            }}
          >
            Login
          </button>

          <button
            type="button"
            className={activeTab === "signup" ? "active-auth-tab" : ""}
            onClick={() => {
              setActiveTab("signup");
              setMessage("");
            }}
          >
            Sign Up
          </button>
        </div>

        {message && (
          <div className="auth-modal-message">
            {message}
          </div>
        )}

        {successMessage && (
          <div className="auth-success-popup">
            ✓ {successMessage}
          </div>
        )}

        {activeTab === "login" ? (
          <form
            className="auth-form"
            onSubmit={handleLoginSubmit}
          >
            <label>
              Email
              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={handleLoginChange}
                placeholder="Enter your email"
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                placeholder="Enter your password"
              />
            </label>

            <button
              type="submit"
              className="auth-submit-btn"
            >
              Login
            </button>
          </form>
        ) : (
          <form
            className="auth-form"
            onSubmit={handleSignupSubmit}
          >
            <label>
              Name
              <input
                type="text"
                name="name"
                value={signupForm.name}
                onChange={handleSignupChange}
                placeholder="Enter your name"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={signupForm.email}
                onChange={handleSignupChange}
                placeholder="Enter your email"
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                value={signupForm.password}
                onChange={handleSignupChange}
                placeholder="Create a password"
              />
            </label>

            <label>
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                value={signupForm.confirmPassword}
                onChange={handleSignupChange}
                placeholder="Confirm your password"
              />
            </label>

            <button
              type="submit"
              className="auth-submit-btn"
            >
              Create Account
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;