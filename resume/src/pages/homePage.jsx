import Header from "../components/header";
import Footer from "../components/footer";
import { FaEye, FaChevronDown } from "react-icons/fa";
import Expertise from "./expertiseHomePage";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function HomePage() {
    return (
        <>
            <Header />

            <div className="relative min-h-screen text-white overflow-hidden">
                {/* Animated Constellation Background */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.8 }}
                    transition={{
                        duration: 1.8,
                        ease: "easeOut",
                    }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/constellation.svg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/85" />

                {/* Content - Everything fades in together */}
                <motion.div
                    className="relative z-10"
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    {/* Hero Section */}
                    <div className="flex flex-col items-center text-center pt-32 pb-10 px-6">
                        <h1 className="
        text-[84px]
        font-semibold
        font-body
        font-body
        leading-none
        text-white
        [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
                            Hi, I am Atharva
                        </h1>

                        <p className="text-[24px] max-w-3xl mt-2 opacity-75">
                            I build cloud infrastructure, backend systems, and
                            automation that scales.
                        </p>

                        <div className="mt-8">
                            <a
                                href="https://drive.google.com/file/d/1jW4EMRjzFF_CW_ssh-s-h9uUIlA4440j/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-white text-black py-2 px-8 rounded-[4px] font-body flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:[box-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff]">
                                    <FaEye className="text-sm" />
                                    My Resume
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    {/* Social Links */}
<div className="flex gap-4 flex-wrap justify-center px-6">
    <a
        href="https://github.com/atharvakumkar"
        target="_blank"
        rel="noopener noreferrer"
    >
        <button className="border border-white bg-black text-white py-2 px-6 rounded-[4px] flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110">
            <FaGithub className="text-lg" />
            GitHub
        </button>
    </a>

    <a
        href="https://www.linkedin.com/in/atharvakumkar"
        target="_blank"
        rel="noopener noreferrer"
    >
        <button className="border border-white bg-black text-white py-2 px-6 rounded-[4px] flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110">
            <FaLinkedin className="text-lg" />
            LinkedIn
        </button>
    </a>

    <a
        href="https://x.com/Atharvakumkar08"
        target="_blank"
        rel="noopener noreferrer"
    >
        <button className="border border-white bg-black text-white py-2 px-6 rounded-[4px] flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110">
            <FaXTwitter className="text-lg" />
            X
        </button>
    </a>
</div>

                    {/* Scroll Down Arrow */}
                    <div className="flex flex-col items-center mt-30">
                        <button
                            onClick={() => {
                                document
                                    .getElementById("expertise")
                                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                            aria-label="Scroll to expertise section"
                            className="group w-10 h-10 border border-white bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black animate-bounce"
                        >
                            <FaChevronDown className="text-lg text-black transition-colors duration-300 group-hover:text-white" />
                        </button>
                    </div>

                    {/* Expertise Section */}
                    <div
                        id="expertise"
                        className="min-h-[80vh] flex flex-col items-center pt-20 pb-15 px-6"
                    >
                        <h1 className="
        text-[56px]
        font-body
        font-semibold
        font-body
        leading-none
        text-white
        [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
                            My Expertise
                        </h1>

                        <Expertise />
                    </div>

                    <Footer />
                </motion.div>
            </div>
        </>
    );
}

export default HomePage;