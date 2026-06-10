import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import CertificatesPage from "./pages/certificatesPage";
import ContactPage from "./pages/contactPage";
import ProjectsPage from "./pages/projectsPage";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/certificates' element={<CertificatesPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="relative min-h-screen bg-black text-white overflow-hidden">
                {/* Global Animated Constellation Background */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.8 }}
                    transition={{
                        duration: 1.8,
                        ease: "easeOut",
                    }}
                    className="fixed inset-0 z-0"
                    style={{
                        backgroundImage: "url('/constellation.svg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}
                />
                
                {/* Global Dark Overlay */}
                <div className="fixed inset-0 bg-black/85 z-0" />

                {/* Page Content */}
                <div className="relative z-10 min-h-screen">
                    <AnimatedRoutes />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;