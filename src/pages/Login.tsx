const Login = () => {
  return (
    <div className="w-[40%] p-10 rounded-lg border-3 border-blue-900">
      <h2 className="text-2xl font-medium text-center mb-10 ">
        Anmeldung zum Ticketsystem
      </h2>
      {/* login form */}
      <form className="flex flex-col gap-5 w-[50%] mx-auto my-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="">Benutzername</label>
          <input
            type="text"
            placeholder="Benutzername eingeben"
            className="border-none outline-2 outline-blue-900 rounded py-2 px-3"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Passwort</label>
          <input
            type="password"
            placeholder="passwort eingeben"
            className="border-none outline-2 outline-blue-900 rounded py-2 px-3 "
          />
        </div>
        {/* Passwort vergessen ? */}
        <p>
          <a href="/forgot-password">Passwort vergessen?</a>
        </p>
        {/* submit btn */}
        <button
          type="submit"
          className="border-2 border-blue-900 p-2 rounded cursor-pointer "
        >
          Anmelden
        </button>
      </form>
    </div>
  );
};
export default Login;
