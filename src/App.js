import React, { useState } from "react";
import "./App.css";
import Header from "./layouts/Header/Header";
import Dashboard from "./layouts/Dashboard/Dashboard";
import Sidebar from "./layouts/Sidebar/Sidebar";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Header open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <Dashboard />
    </div>
  );
}

export default App;
