
import React, { useState } from "react";

function AccountPanel({ close }) {
  const [page, setPage] = useState("login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
    setRememberMe(false);
    setAcceptedTerms(false);
    setMessage("");
    setMessageType("");
  };

  const switchPage = (newPage) => {
    clearForm();
    setPage(newPage);
  };

  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
  };

  const getUsers = () => {
    try {
      return JSON.parse(localStorage.getItem("soleMateUsers")) || [];
    } catch {
      return [];
    }
  };

  const validEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  };

  const validPhone = (value) => {
    return /^(\+92|0)?3[0-9]{9}$/.test(value.replace(/[\s-]/g, ""));
  };

  const validName = (value) => {
    return /^[A-Za-z][A-Za-z .'-]{2,49}$/.test(value.trim());
  };

  const passwordChecks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password)
  };

  const strongPassword = Object.values(passwordChecks).every(Boolean);

  const handleRegister = (e) => {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPhone = phone.replace(/[\s-]/g, "");

    if (!validName(cleanName)) {
      showMessage(
        "Enter a valid name using at least 3 letters. Numbers are not allowed.",
        "error"
      );
      return;
    }

    if (!validEmail(cleanEmail)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    if (!validPhone(cleanPhone)) {
      showMessage(
        "Enter a valid Pakistani mobile number, such as 03001234567 or +923001234567.",
        "error"
      );
      return;
    }

    if (!strongPassword) {
      showMessage("Your password does not meet all the requirements.", "error");
      return;
    }

    if (password !== confirmPassword) {
      showMessage("Passwords do not match.", "error");
      return;
    }

    if (!acceptedTerms) {
      showMessage("Please accept the terms and conditions.", "error");
      return;
    }

    const users = getUsers();

    const alreadyRegistered = users.some(
      (user) => user.email === cleanEmail
    );

    if (alreadyRegistered) {
      showMessage(
        "This email is already registered. Please log in instead.",
        "error"
      );
      return;
    }

    const newUser = {
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      password: password
    };

    try {
      localStorage.setItem(
        "soleMateUsers",
        JSON.stringify([...users, newUser])
      );

      showMessage(
        "Registration successful! You can now log in with your new account.",
        "success"
      );

      setTimeout(() => {
        clearForm();
        setPage("login");
        setEmail(cleanEmail);
      }, 1200);
    } catch {
      showMessage("Could not save your account in this browser.", "error");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const cleanEmail = email.trim().toLowerCase();

    if (!validEmail(cleanEmail)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    if (!password) {
      showMessage("Please enter your password.", "error");
      return;
    }

    const users = getUsers();

    const foundUser = users.find(
      (user) =>
        user.email === cleanEmail &&
        user.password === password
    );

    if (!foundUser) {
      showMessage(
        "Account not found or password is incorrect. Please register first if you are a new customer.",
        "error"
      );
      return;
    }

    try {
      const loginDetails = {
        name: foundUser.name,
        email: foundUser.email
      };

      if (rememberMe) {
        localStorage.setItem(
          "soleMateLoggedInUser",
          JSON.stringify(loginDetails)
        );
      } else {
        sessionStorage.setItem(
          "soleMateLoggedInUser",
          JSON.stringify(loginDetails)
        );
      }

      showMessage(
        `Welcome back, ${foundUser.name}! You are logged in.`,
        "success"
      );
    } catch {
      showMessage("Unable to complete login in this browser.", "error");
    }
  };

  return (
    <div className="modal-overlay account-overlay">
      <div className="account-panel">

        <button
          className="account-close"
          onClick={close}
          type="button"
          aria-label="Close account panel"
        >
          ×
        </button>

        <div className="account-brand">
          <div className="account-logo">S</div>
          <h2>Sole<span>Mate</span></h2>
          <p>STEP INTO STYLE</p>
        </div>

        <div className="account-tabs">
          <button
            type="button"
            className={page === "login" ? "account-tab active" : "account-tab"}
            onClick={() => switchPage("login")}
          >
            LOGIN
          </button>

          <button
            type="button"
            className={page === "register" ? "account-tab active" : "account-tab"}
            onClick={() => switchPage("register")}
          >
            REGISTER
          </button>
        </div>

        {message && (
          <div className={`account-message ${messageType}`}>
            {message}
          </div>
        )}

        {page === "login" ? (
          <form onSubmit={handleLogin} className="account-form">

            <h3>Welcome Back!</h3>
            <p className="account-subtitle">
              Log in to continue shopping with SoleMate.
            </p>

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="login-options">
              <label className="remember-option">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
            </div>

            <button className="account-submit" type="submit">
              LOGIN TO ACCOUNT
            </button>

            <button
              className="clear-form"
              type="button"
              onClick={clearForm}
            >
              CLEAR FORM
            </button>

            <p className="switch-account">
              Don't have an account?{" "}
              <button type="button" onClick={() => switchPage("register")}>
                Create one
              </button>
            </p>

          </form>
        ) : (
          <form onSubmit={handleRegister} className="account-form">

            <h3>Create Your Account</h3>
            <p className="account-subtitle">
              Join SoleMate and find your perfect style.
            </p>

            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              minLength="3"
              maxLength="50"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Mobile Number</label>
            <input
              type="tel"
              placeholder="03001234567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="password-rules">
              <p>Password must contain:</p>

              <span className={passwordChecks.length ? "rule-valid" : ""}>
                {passwordChecks.length ? "✓" : "○"} At least 8 characters
              </span>

              <span className={passwordChecks.uppercase ? "rule-valid" : ""}>
                {passwordChecks.uppercase ? "✓" : "○"} One uppercase letter
              </span>

              <span className={passwordChecks.lowercase ? "rule-valid" : ""}>
                {passwordChecks.lowercase ? "✓" : "○"} One lowercase letter
              </span>

              <span className={passwordChecks.number ? "rule-valid" : ""}>
                {passwordChecks.number ? "✓" : "○"} One number
              </span>

              <span className={passwordChecks.special ? "rule-valid" : ""}>
                {passwordChecks.special ? "✓" : "○"} One special character
              </span>
            </div>

            <label>Confirm Password</label>
            <div className="password-field">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter your password again"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>

            {confirmPassword && (
              <p className={
                password === confirmPassword
                  ? "match-message"
                  : "mismatch-message"
              }>
                {password === confirmPassword
                  ? "✓ Passwords match"
                  : "✗ Passwords do not match"}
              </p>
            )}

            <label className="terms-option">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              I agree to the terms and conditions.
            </label>

            <button className="account-submit" type="submit">
              CREATE ACCOUNT
            </button>

            <button
              className="clear-form"
              type="button"
              onClick={clearForm}
            >
              CLEAR FORM
            </button>

            <p className="switch-account">
              Already have an account?{" "}
              <button type="button" onClick={() => switchPage("login")}>
                Log in
              </button>
            </p>

          </form>
        )}

      </div>
    </div>
  );
}

export default AccountPanel;
