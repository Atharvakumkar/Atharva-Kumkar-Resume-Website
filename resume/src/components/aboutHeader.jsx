import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AboutHeader() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/certificates", label: "Certificates" },
    { to: "/contact", label: "Contact" },
  ];

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
            <div className="max-w-7xl mx-auto px-9 py-4 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-white tracking-tight">
                Atharva Kumkar
              </h1>

              <nav>
                <ul className="flex items-center gap-8 text-gray-100 font-medium text-sm">
                  {links.map(({ to, label }) => {
                    const isAbout = to === "/about";
                    return (
                      <li key={to}>
                        <Link
                          to={to}
                          className={`
                            relative inline-block transition-all duration-300
                            ${
                              isAbout
                                ? "text-white [text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(255,255,255,0.4)]"
                                : "hover:text-white hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(255,255,255,0.4)]"
                            }
                          `}
                        >
        {label}

        {isAbout && (
          <span
            className="
              absolute
              -bottom-1
              left-0
              w-full
              h-[2px]
              bg-white
              rounded-full
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
            </div>
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
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="font-text fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none"
          >
            <motion.header
              className="
                pointer-events-auto
                flex items-center justify-between gap-10
                bg-black/50 backdrop-blur-2xl
                border border-white/10
                shadow-[0_8px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]
                rounded-2xl
                px-9 py-5
                w-full max-w-3xl
              "
            >
              {/* Logo */}
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

              {/* Nav Links */}
              <nav className="flex-1 flex justify-end">
                <ul className="flex items-center gap-6 text-sm font-medium">
                  {links.map(({ to, label }, i) => {
                    const isActive = location.pathname === to;

                    return (
                      <motion.li
                        key={to}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.06 + i * 0.05,
                          duration: 0.3,
                        }}
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
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                              }}
                            />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </motion.header>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AboutHeader;