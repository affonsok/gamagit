import React from "react";
import { BrowserRouter , Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";

<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="/Repositories" element={<Repositories />}>
      </Route>
    </Routes>
</BrowserRouter>