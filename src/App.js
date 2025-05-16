import { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import React from "react";
import CharacterSlider from "./components/CharacterSlider";

export default function App() {
  return (
    <div>
      <Navbar />
      <CharacterSlider />
    </div>
  );
}
