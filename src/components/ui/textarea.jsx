import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 ${className}`}
      {...props}
    />
  );
}
