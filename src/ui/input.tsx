import * as React from "react"

// Remove the empty interface and directly extend InputHTMLAttributes
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // You can add additional props here if needed
}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};