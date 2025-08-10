import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  FaUser,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
  isAnchor?: boolean;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav = ({ navItems }: FloatingNavProps) => {
  const { scrollYProgress } = useScroll();
  const [, setVisible] = useState(false);
  const navigate = useNavigate();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      setVisible(scrollYProgress.get() < 0.05 || direction < 0);
    }
  });

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
    isAnchor: boolean = false
  ) => {
    e.preventDefault();

    if (isAnchor) {
      // Handle anchor links
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Handle React Router navigation
      navigate(link);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        transition={{ duration: 0.6 }}
        className="px-10 inset-x-0 top-0 z-[5000] mx-auto flex flex-col sm:flex-row items-center justify-center space-x-16 rounded-full border border-transparent bg-[#0a0a0a] dark:bg-[#0a0a0a] py-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2]"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(3px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            onClick={(e) => handleNavClick(e, navItem.link, navItem.isAnchor)}
            className="flex flex-col sm:flex-row cursor-pointer items-center sm:justify-between text-teal-600 hover:text-teal-500 hover:opacity-[0.9] dark:text-teal-500 dark:hover:text-teal-500"
          >
            {navItem.icon && <span className="mr-2">{navItem.icon}</span>}
            <span className="text-md">{navItem.name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export const FloatingNavBar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: (
        <FaBriefcase className="h-5 w-5 text-teal-600 dark:text-teal-500 dark:hover:text-teal-500" />
      ),
      isAnchor: false,
    },
    {
      name: "About",
      link: "/about",
      icon: (
        <FaUser className="h-5 w-5 text-teal-600 dark:text-teal-500 dark:hover:text-teal-500" />
      ),
      isAnchor: false,
    },
    {
      name: "Projects",
      link: "#projects-section",
      icon: (
        <FaProjectDiagram className="h-5 w-5 text-teal-600 dark:text-teal-500 dark:hover:text-teal-500" />
      ),
      isAnchor: true,
    },
    {
      name: "Contact",
      link: "#contact-section",
      icon: (
        <FaEnvelope className="h-5 w-5 text-teal-600 dark:text-teal-500 dark:hover:text-teal-500" />
      ),
      isAnchor: true,
    },
  ];

  return (
    <div className="relative mx-auto">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default FloatingNavBar;
