import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import "./Navbar.css";

import MyButton from "../MyButton/MyButton";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav className="navbar">
      <div className="logo">MyLMS</div>
      <div className="links">
        {/* <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a> */}
        <a href="/"></a>
        {/* <a href="/about">About</a>
        <a href="/contact">Contact</a> */}
         <MyButton
                  link="http://13.203.101.114/moodle/login/index.php"
                  className="course-button"
                >
                  Login
                </MyButton>
      </div>
    </nav>
  );
};

export default Navbar;
