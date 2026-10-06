import type React from "react";
import type { LoginFormData } from "../types";

const LoginForm = () => {
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    // login logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full h-100 max-w-md overflow-hidden rounded-4xl bg-white/95 p-8 shadow-xl outline-1 outline-gray-200"
    >
      <div className="absolute -right-16 -bottom-24 h-[200px] w-[200px] rounded-full bg-sky-900" />

      <div className="absolute -bottom-20 -left-12 h-[200px] w-[200px] rounded-full bg-sky-900" />

      {/* Login content */}
    </form>
  );
};

export default LoginForm;
