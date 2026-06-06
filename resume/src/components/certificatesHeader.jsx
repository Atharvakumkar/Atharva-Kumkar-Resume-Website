import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CertificatesHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/certificates", label: "Certificates" },
    { to: "/contact", label: "Contact" },
  ];

  const HamburgerIcon = ({ open, className = "" }) => (
    <button
      onClick={() => setMenuOpen((v) => !v)}
      className={`relative w-8 h-8 flex flex-col justify-center items-center gap-[5px] focus:outline-none ${className}`}
      aria-label="Toggle menu"
    >
      <motion.span
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="block w-5 h-[2px] bg-white rounded-full origin-center"
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block w-5 h-[2px] bg-white rounded-full origin-center"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="block w-5 h-[2px] bg-white rounded-full origin-center"
      />
    </button>
  );

  return (
    <>
      {/* Static Header */}
      <AnimatePresence>
        {!scrolled && (
          <motion.header
            key="static-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="font-text bg-black sticky top-0 z-50 w-full"
          >
            <div className="max-w-7xl mx-auto px-5 md:px-9 py-4 flex items-center justify-between">
              <h1 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                Atharva Kumkar
              </h1>

              {/* Desktop Nav */}
              <nav className="hidden md:block">
                <ul className="flex items-center gap-8 text-gray-100 font-medium text-sm">
                  {links.map(({ to, label }) => {
                    const isCertificates = to === "/certificates";
                    return (
                      <li key={to}>
                        <Link
                          to={to}
                          className={`
                            relative inline-block transition-all duration-300
                            ${
                              isCertificates
                                ? "text-white [text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(255,255,255,0.4)]"
                                : "hover:text-white hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(255,255,255,0.4)]"
                            }
                          `}
                        >
                          {label}
                          {isCertificates && (
                            <span
                              className="
                                absolute -bottom-1 left-0 w-full h-[2px]
                                bg-white rounded-full
                                shadow-[0_0_10px_rgba(255,255,255,0.9)]
                              "
                            />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Mobile Hamburger */}
              <div className="md:hidden">
                <HamburgerIcon open={menuOpen} />
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.nav
                  key="mobile-menu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
                >
                  <ul className="flex flex-col px-5 py-3">
                    {links.map(({ to, label }, i) => {
                      const isCertificates = to === "/certificates";
                      return (
                        <motion.li
                          key={to}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, duration: 0.25 }}
                        >
                          <Link
                            to={to}
                            onClick={() => setMenuOpen(false)}
                            className={`
                              block py-3 text-base font-medium border-b border-white/5 last:border-0 transition-all duration-300
                              ${isCertificates
                                ? "text-white [text-shadow:0_0_8px_rgba(255,255,255,0.6)]"
                                : "text-gray-300 hover:text-white hover:pl-2"
                              }
                            `}
                          >
                            {label}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Floating Header */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="floating-header"
            initial={{ opacity: 0, y: -48, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -48, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-text fixed top-0 left-0 right-0 z-50 flex flex-col items-center py-3 md:py-6 pointer-events-none px-4 md:px-0"
          >
            <motion.header
              className="
                pointer-events-auto
                flex items-center justify-between gap-4 md:gap-10
                bg-black/50 backdrop-blur-2xl
                border border-white/10
                shadow-[0_8px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]
                rounded-2xl
                px-5 md:px-9 py-3 md:py-5
                w-full max-w-3xl
              "
            >
              <motion.div
                className="flex items-center gap-2 shrink-0"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08, duration: 0.3 }}
              >
                <span className="text-sm font-semibold text-white tracking-tight whitespace-nowrap">
                  Atharva Kumkar
                </span>
              </motion.div>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex flex-1 justify-end">
                <ul className="flex items-center gap-6 text-sm font-medium">
                  {links.map(({ to, label }, i) => {
                    const isActive = location.pathname === to;
                    return (
                      <motion.li
                        key={to}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.06 + i * 0.05, duration: 0.3 }}
                      >
                        <Link
                          to={to}
                          className={`
                            relative inline-block transition-all duration-300
                            ${
                              isActive
                                ? "text-white font-semibold"
                                : "text-gray-400 hover:text-white hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(255,255,255,0.4)]"
                            }
                          `}
                        >
                          {label}
                          {isActive && (
                            <motion.span
                              layoutId="active-underline"
                              className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-white rounded-full"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Mobile Hamburger (floating) */}
              <div className="md:hidden">
                <HamburgerIcon open={menuOpen} />
              </div>
            </motion.header>

            {/* Floating Mobile Dropdown */}
            <AnimatePresence>
              {menuOpen && (
                <motion.nav
                  key="floating-mobile-menu"
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="pointer-events-auto w-full max-w-3xl mt-2 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] overflow-hidden"
                >
                  <ul className="flex flex-col px-5 py-3">
                    {links.map(({ to, label }, i) => {
                      const isActive = location.pathname === to;
                      return (
                        <motion.li
                          key={to}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, duration: 0.25 }}
                        >
                          <Link
                            to={to}
                            onClick={() => setMenuOpen(false)}
                            className={`
                              block py-3 text-sm font-medium border-b border-white/5 last:border-0 transition-all duration-300
                              ${isActive
                                ? "text-white [text-shadow:0_0_8px_rgba(255,255,255,0.6)]"
                                : "text-gray-400 hover:text-white hover:pl-2"
                              }
                            `}
                          >
                            {label}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.nav>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CertificatesHeader;