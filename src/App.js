import React, { useState } from "react";
import Home from "./Pages/Home";
import Navbar from "./Layouts/Navbar";
import { queryClient } from "./Config/Config";
import { QueryClientProvider } from "react-query";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  // image class and pagination
  const [category, setCategory] = useState("nature");

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar category={category} setCategory={setCategory} />
      <Home category={category} page={1} />
    </QueryClientProvider>
  );
}
