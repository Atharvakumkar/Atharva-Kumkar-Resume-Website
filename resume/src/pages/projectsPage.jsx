import { motion } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/footer";
import FeaturedProject from "./featureProjectPage";

function ProjectsPage() {
    return (
        <>
            <Header />

            <div className="relative text-white min-h-screen">
                {/* Constellation Background */}
                <div
                    className="fixed inset-0 -z-10"
                    style={{
                        backgroundImage: "url('/constellation.svg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.05,
                    }}
                />

                {/* Dark Overlay */}
                <div className="fixed inset-0 -z-10 bg-black/90" />

                {/* Page Content */}
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Hero Title */}
                    <div className="px-6 pt-20 pb-2 text-center">
                        <h1
                            className="
                                text-5xl
                                font-bold
                                mb-6
                                font-body
                                text-white
                                [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]
                            "
                        >
                            Featured Project
                        </h1>
                    </div>

                    <FeaturedProject />

                    <Footer />
                </motion.div>
            </div>
        </>
    );
}

export default ProjectsPage;