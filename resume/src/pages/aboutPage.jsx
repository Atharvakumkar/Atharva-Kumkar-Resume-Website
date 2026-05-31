import { motion } from "framer-motion";
import AboutHeader from "../components/aboutHeader";
import Footer from "../components/footer";
import BuildAbout from "./buildAboutPage";
import ExploringAbout from "./exploringAboutPage";

function AboutPage() {
    return (
        <>
            <AboutHeader />

            {/* Global Background */}
            <div className="relative text-white">
                {/* Animated Constellation Background */}
                <motion.div
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: 0.05 }}
                    transition={{
                        duration: 1.8,
                        ease: "easeOut",
                    }}
                    className="fixed inset-0 -z-0"
                    style={{
                        backgroundImage: "url('/constellation.svg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                {/* Dark Overlay */}
                <div className="fixed inset-0 bg-black/85 -z-10" />

                {/* Page Content */}
                <div className="relative z-10 text-white">
                    {/* Hero / Introduction Section */}
                    <motion.div
                        className="px-6 pt-30"
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
                        <div className="pt-10 pb-30 px-10">
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
                                How I Think About Engineering
                            </h1>

                            <p className="text-lg text-gray-300 leading-relaxed font-body">
                                Engineering, to me, is about understanding
                                complex systems and building solutions that are
                                reliable, scalable, and maintainable. I enjoy
                                exploring how different technologies work
                                together, whether in cloud infrastructure,
                                backend services, automation pipelines, or
                                operating systems. This curiosity drives me to
                                continuously learn, adapt, and approach
                                problems with a focus on both functionality and
                                long-term sustainability.
                            </p>

                            <p className="text-lg text-gray-300 leading-relaxed font-body pt-3">
                                I believe strong engineering comes from
                                combining solid fundamentals with practical
                                implementation. Through hands-on projects, I
                                have developed experience in designing,
                                building, and troubleshooting systems while
                                learning to evaluate trade-offs and improve
                                reliability. In a team environment, I aim to
                                contribute through a proactive learning
                                mindset, attention to detail, effective
                                collaboration, and a willingness to take
                                ownership of challenges while continuously
                                improving both the solution and my own skills.
                            </p>
                        </div>
                    </motion.div>

                    {/* About Sections */}
                    <BuildAbout />
                    <ExploringAbout />

                    <Footer />
                </div>
            </div>
        </>
    );
}

export default AboutPage;