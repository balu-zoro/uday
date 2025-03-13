import React from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ size = "medium", variant = "primary", onClick, children }) => {
  const sizeClasses = size === "small" ? "py-1 px-2 text-sm" : size === "large" ? "py-3 px-6 text-lg" : "py-2 px-4";
  const variantClasses = variant === "secondary" ? "bg-gray-500 hover:bg-gray-600" : "bg-blue-500 hover:bg-blue-600";

  return (
    <button className={`${sizeClasses} ${variantClasses} text-white rounded`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
