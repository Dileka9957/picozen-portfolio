import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.webp";
import {
  FaBriefcase,
  FaEnvelope,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FloatingNavBar from "./Navbar";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check for user's preferred color scheme
  useEffect(() => {
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
    document.documentElement.classList.toggle("dark", newMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="relative">
          <img
            src={logo}
            alt="PICOZEN Logo"
            className="object-contain w-20 h-20"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <FloatingNavBar />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-0 rounded-2xl transition-colors hover:bg-teal-600 dark:hover:bg-gray-700"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <FiSun className="w-6 h-6 m-2 p-0 text-yellow-300 " />
            ) : (
              <FiMoon className="w-6 h-6 m-2 p-0 text-teal-600 hover:text-white" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full transition-colors hover:bg-teal-600  dark:hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6 text-teal-600 hover:text-white" />
            ) : (
              <FiMenu className="w-6 h-6 text-teal-600 hover:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
          <MobileNavBar />
        </div>
      )}
    </nav>
  );
};

const MobileNavBar = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("");

  const handleNavClick = (link: string, isAnchor: boolean = false) => {
    setActiveItem(link);
    if (isAnchor) {
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate(link);
    }
  };

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaBriefcase className="h-5 w-5" />,
      isAnchor: false,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaUser className="h-5 w-5" />,
      isAnchor: false,
    },
    {
      name: "Projects",
      link: "#projects-section",
      icon: <FaProjectDiagram className="h-5 w-5" />,
      isAnchor: true,
    },
    {
      name: "Contact",
      link: "#contact-section",
      icon: <FaEnvelope className="h-5 w-5" />,
      isAnchor: true,
    },
  ];

  return (
    <div className="flex flex-col space-y-4">
      {navItems.map((item) => (
        <button
          key={item.link}
          onClick={() => handleNavClick(item.link, item.isAnchor)}
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            activeItem === item.link
              ? "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300"
              : "hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          <span className="mr-3">{item.icon}</span>
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Header;
