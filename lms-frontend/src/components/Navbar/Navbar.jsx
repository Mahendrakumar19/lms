import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import "./Navbar.css";
//import MyButton from "../../public/Button/MyButton";
import MyButton from "../../../public/Button/MyButton";
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
        <a href="/">Home</a>
        <a href="/">Dashboard</a>
        <a href="/courses">Courses</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <MyButton
          onClick={() => {
            window.location.href =
              "http://13.203.101.114/moodle/login/index.php";
          }}
        >
          Login
        </MyButton>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
