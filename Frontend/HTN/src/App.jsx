import { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

function App() {
  return (
    <div>
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
