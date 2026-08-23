import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   navigation
  const navigate = useNavigate();

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Check empty fields
    if (!username || !password) {
      console.error("Bitte Benutzername und Passwort eingeben!");
      return;
    }

    // Check username
    if (username.length < 5) {
      console.error("Benutzername muss mindestens 5 Zeichen lang sein!");
      return;
    }

    // Check password
    if (password.length < 6) {
      console.error("Passwort muss mindestens 6 Zeichen lang sein!");
      return;
    }

    // username = juma1
    // password = qasimi

    if (username === "juma1" && password === "qasimi") {
      navigate("/dashboard");
    }

    setUsername("");
    setPassword("");
  };

  //   input style
  const InputStyle = "border-none outline-2 outline-blue-900 rounded py-2 px-3";
  return (
    <div className="w-full p-5 m-6 md:w-[60%] lg:w-[40%] md:p-10 rounded-lg border-3 border-blue-900">
      <h2 className="text-xl md:text-2xl font-medium text-center mb-10">
        Anmeldung zum Ticketsystem
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 lg:w-[50%] mx-auto my-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Benutzername</label>

          <input
            id="username"
            type="text"
            value={username}
            onChange={handleUserNameChange}
            placeholder="Benutzername eingeben"
            className={InputStyle}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Passwort</label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Passwort eingeben"
            className={InputStyle}
          />
        </div>

        <p>
          <a href="/forgot-password">Passwort vergessen?</a>
        </p>

        <button
          type="submit"
          className="border-2 border-blue-900 p-2 rounded cursor-pointer"
        >
          Anmelden
        </button>
      </form>
    </div>
  );
};

export default Login;
