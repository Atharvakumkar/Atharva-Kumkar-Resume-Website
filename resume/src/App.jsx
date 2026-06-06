import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/header";
import HomeHeader from "./components/homeHeader";

import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import CertificatesPage from "./pages/certificatesPage";
import ContactPage from "./pages/contactPage";
import ProjectsPage from "./pages/projectsPage";

function App() {
    return(
        <BrowserRouter>
            <ScrollToTop />
            <div className="min-h screen bg-black text-white">
                <Routes>
                    <Route path ='/' element={<HomePage />} />
                    <Route path ='/about' element={<AboutPage />} />
                    <Route path ='/projects' element={<ProjectsPage />} />
                    <Route path ='/certificates' element={<CertificatesPage />} />
                    <Route path ='/contact' element={<ContactPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;