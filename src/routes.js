import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Characters from "./views/Characters";
import Details from "./views/Details";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesConfig;