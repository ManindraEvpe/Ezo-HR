import * as React from "react";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ThemeSwitch from "../common/theme-switch";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navItems = [
  {
    title: "Solutions",
    id: "solutions",
    isHash: true,
  },
  {
    title: "Certifications",
    id: "certifications",
    isHash: true,
  },
  {
    title: "Products",
    id: "products",
    isHash: true,
  },
  {
    title: "Pricing",
    id: "pricing",
    isHash: true,
  },
  {
    title: "Contact Us",
    id: "/contact-us",
    isHash: false,
  },
  {
    title: "Careers",
    id: "/careers",
    isHash: false,
  },
];

const Navbar1 = ({ scrollProgress }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e, item) => {
    if (item.isHash) {
      e.preventDefault();

      // If we're not on the home page, navigate there first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        // We're already on the home page, just scroll
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  const navbarWidth = `${100 - scrollProgress * 30}%`;
  const padding = 1.5 - scrollProgress * 0.75;

  return (
    <motion.div
      className="flex justify-center w-full px-4"
      style={{
        paddingTop: `${padding}rem`,
        paddingBottom: `${padding}rem`,
      }}
    >
      <motion.div
        className="flex items-center justify-between px-6 py-3 rounded-full relative z-10 transition-all duration-200"
        style={{
          width: navbarWidth,
          maxWidth: "1200px",
          background: `rgba(255, 255, 255, ${0.7 + scrollProgress * 0.2})`,
          backdropFilter: `blur(${10 + scrollProgress * 5}px)`,
          WebkitBackdropFilter: `blur(${10 + scrollProgress * 5}px)`,
          boxShadow: `0 ${4 + scrollProgress * 6}px ${
            20 + scrollProgress * 10
          }px rgba(0, 0, 0, ${0.1 + scrollProgress * 0.05})`,
          border: `1px solid rgba(255, 255, 255, ${
            0.3 + scrollProgress * 0.2
          })`,
        }}
      >
        <Link
          className="flex-center"
          to={"/"}
          onClick={(e) =>
            handleNavClick(e, {
              title: "",
              id: "hero-section",
              isHash: true,
            })
          }
        >
          <img src="/logo-png.png" className="h-9" alt="EzoHR" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.isHash ? (
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-sm text-gray-900 hover:text-gray-600 transition-colors font-medium cursor-pointer"
                >
                  {item?.title}
                </a>
              ) : (
                <Link
                  to={item.id}
                  className="text-sm text-gray-900 hover:text-gray-600 transition-colors font-medium"
                >
                  {item?.title}
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="hidden md:flex items-center gap-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            to="https://web.ezohr.com/login"
            className="inline-flex items-center justify-center px-5 py-2 text-sm text-white rounded-full transition-colors bg-primary"
          >
            Get Started
          </Link>
          <ThemeSwitch />
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="h-6 w-6 text-gray-900" />
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 pt-24 px-6 md:hidden"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-gray-900" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item?.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  {item.isHash ? (
                    <a
                      href={`#${item.id}`}
                      className="text-base text-gray-900 font-medium cursor-pointer"
                      onClick={(e) => {
                        handleNavClick(e, item);
                        toggleMenu();
                      }}
                    >
                      {item?.title}
                    </a>
                  ) : (
                    <Link
                      to={item.id}
                      className="text-base text-gray-900 font-medium"
                      onClick={toggleMenu}
                    >
                      {item?.title}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <Link
                  to="https://ezohr.com/login"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-black rounded-full hover:bg-gray-800 transition-colors "
                  onClick={toggleMenu}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export { Navbar1 };
