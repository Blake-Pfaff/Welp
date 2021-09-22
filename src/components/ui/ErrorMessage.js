import React from "react";

function ErrorMessage({ message }) {
  if (!message) return null;

  return <div className="text-red-800">{message}</div>;
}

export default ErrorMessage;
