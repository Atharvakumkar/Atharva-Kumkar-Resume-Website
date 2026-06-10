import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import ProjectsHeader from "../components/projectsHeader";
import Footer from "../components/footer";
import FeaturedProject from "./featureProjectPage";
import SelectedProjects from "./selectedProjects";

function ProjectsPage() {
    return (
        <>
            <ProjectsHeader />

            <motion.div 
                className="relative min-h-screen text-white overflow-hidden"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            >

                {/* Content */}
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
                    {/* Hero Title */}
                    <div className="px-4 md:px-6 pt-14 md:pt-20 pb-2 text-center">
                        <h1
                            className="
                                text-3xl md:text-5xl
                                font-bold
                                mb-6
                                font-body
                                text-white
                                [text-shadow:0_0_40px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]
                            "
                        >
                            Featured Project
                        </h1>
                    </div>

                    {/* Featured Project */}
                    <FeaturedProject />

                    {/* Selected Projects */}
                    <SelectedProjects />

                    {/* GitHub CTA */}
                    <section className="px-4 md:px-6 mt-1 mb-8 md:mb-15">
                        <div className="max-w-7xl mx-auto">
                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-6 md:p-12
                                    text-center
                                    backdrop-blur-sm
                                "
                            >
                                {/* Glow */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]
                                    "
                                />

                                <div className="relative z-10">
                                    <h1
                                        className="
                                            font-body
                                            text-white
                                            text-3xl md:text-5xl
                                            font-bold
                                            [text-shadow:0_0_40px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]
                                        "
                                    >
                                        The Journey Continues
                                    </h1>

                                    <h3
                                        className="
                                            font-body
                                            text-base md:text-xl
                                            mt-8
                                            max-w-3xl
                                            mx-auto
                                            text-gray-400
                                            leading-relaxed
                                        "
                                    >
                                        My additional projects spanning
                                        infrastructure, security,
                                        backend systems, automation,
                                        and software engineering are
                                        available on my GitHub profile.
                                    </h3>

                                    <div className="flex justify-center mt-10">
                                        <a
                                            href="https://github.com/Atharvakumkar"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button
                                                className="
                                                    bg-white
                                                    text-black
                                                    py-3
                                                    px-8
                                                    rounded-xl
                                                    font-body
                                                    flex
                                                    items-center
                                                    gap-3
                                                    transition-all
                                                    duration-300
                                                    hover:scale-105
                                                    hover:[box-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff]
                                                "
                                            >
                                                <FaGithub size={20} />
                                                Explore my GitHub Profile
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </motion.div>
            </motion.div>
        </>
    );
}

export default ProjectsPage;