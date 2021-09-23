import React from "react";

function ErrorMessage({ message }) {
  if (!message) return null;

  return <div className="text-red-800 bg-red-300 p-2 m-4">{message}</div>;
}

export default ErrorMessage;
