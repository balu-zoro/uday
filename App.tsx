import React from "react";
import Register from "./pages/Register";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Register />
    </div>
  );
};

export default App;
