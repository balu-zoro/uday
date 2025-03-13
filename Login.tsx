import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Used for navigation after login

  const handleLogin = () => {
    // Example authentication check (Replace with API call)
    if (email === "admin@example.com" && password === "password") {
      localStorage.setItem("token", "your-jwt-token"); // Store token
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
