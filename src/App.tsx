import { BrowserRouter, Route, Routes } from "react-router-dom";

// =========== Pages =============

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
