import { BrowserRouter, Route, Routes } from "react-router-dom";

// =========== Components =============
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
