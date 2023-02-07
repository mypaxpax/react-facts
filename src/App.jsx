import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  function toggleMode() {
    setdarkMode((prevDark) => !prevDark);
    console.log("Clicked");
  }

  const [darkMode, setdarkMode] = React.useState(true);

  return (
    <div className="container">
      <Navbar toggleDarkMode={toggleMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}
