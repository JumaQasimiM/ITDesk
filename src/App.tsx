import { BrowserRouter, Route, Routes } from "react-router-dom";

// =========== Components =============
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./features/dashboard/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
