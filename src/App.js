import React, { useState } from "react";
import "./App.css";
import Leaderboard from "./components/InternComponent/Leaderboard";

function App() {
  return (
    <div className="app">
      <h1>Leaderboard</h1>
      <Leaderboard />
    </div>
  );
}

export default App;
