// home
//  about
// contant
// login
// register

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
const publicRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
