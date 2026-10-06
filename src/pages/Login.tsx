import LoginForm from "../features/auth/components/LoginForm";

export const Login = () => {
  return (
    <main className="w-full h-screen bg-sky-700">
      <LoginForm />
    </main>
  );
};

/**
 * ==== Login Structure ======
 *
 * LoginPage -- page
 *    |
 * Loginform -- component
 *    |
 * LoginFormData --- type
 *    |
 * handlaeSubmit()
 *    |
 * useLogin() -- context
 *    |
 * authapi
 *    |
 * Django API
 *
 * */
