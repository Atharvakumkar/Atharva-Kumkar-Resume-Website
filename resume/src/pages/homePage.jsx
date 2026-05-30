import HomeHeader from "../components/homeHeader";
import Footer from "../components/footer";
import { FaEye, FaChevronDown } from "react-icons/fa";
import Expertise from "./expertiseHomePage";

function HomePage() {
    return (
        <>
            <HomeHeader />

            <div
                className="relative min-h-screen text-white"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.80), rgba(0,0,0,0.85)), url('/constellation.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center pt-32 pb-10 px-6">
                    <h1 className="font-body font-semibold text-[84px] leading-none">
                        Hi, I am Atharva
                    </h1>

                    <p className="opacity-75 text-[24px] max-w-3xl mt-2">
                        I build cloud infrastructure, backend systems, and
                        automation that scales.
                    </p>

                    <a
                        href="https://drive.google.com/file/d/1jW4EMRjzFF_CW_ssh-s-h9uUIlA4440j/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8"
                    >
                        <button className="bg-white text-black py-2 px-8 rounded-[4px] font-body flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:[box-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff]">
                            <FaEye className="text-sm" />
                            My Resume
                        </button>
                    </a>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 flex-wrap justify-center px-6">
                    <button className="border border-white bg-black text-white py-2 px-6 rounded-[4px] transition-all duration-300 hover:bg-white hover:text-black hover:scale-110">
                        My Expertise
                    </button>

                    <button className="border border-white bg-black text-white py-2 px-6 rounded-[4px] transition-all duration-300 hover:bg-white hover:text-black hover:scale-110">
                        My Projects
                    </button>

                    <button className="border border-white bg-black text-white py-2 px-6 rounded-[4px] transition-all duration-300 hover:bg-white hover:text-black hover:scale-110">
                        My Experience
                    </button>
                </div>

                {/* Scroll Down Arrow */}
                <div className="flex flex-col items-center mt-10">
                    <a
                        href="#expertise"
                        className="group w-10 h-10 border border-white bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black"
                    >
                        <FaChevronDown className="text-lg text-black transition-colors duration-300 group-hover:text-white" />
                    </a>
                </div>

                {/* Expertise Section */}
                <div
                    id="expertise"
                    className="min-h-[80vh] flex flex-col items-center pt-10 pb-15 px-6"
                >
                    <h1 className="font-body font-semibold text-[56px] leading-none">
                        My Expertise
                    </h1>

                    <Expertise />
                </div>

                <Footer />
            </div>
        </>
    );
}

export default HomePage;