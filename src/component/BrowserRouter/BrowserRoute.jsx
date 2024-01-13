import React from 'react';
import { Routes, Route } from "react-router-dom";



function Router() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
  export default Router;
