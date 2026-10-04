import { BrowserRouter, Route, Routes } from "react-router-dom";

// =========== Pages =============

import Dashboard from "./pages/Dashboard";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
