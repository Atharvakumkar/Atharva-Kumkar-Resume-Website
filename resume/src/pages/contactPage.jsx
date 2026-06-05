import { motion } from "framer-motion";

import Footer from "../components/footer";
import ContactHeader from "../components/contactHeader";
import IntroContact from "./introContact";

function ContactPage() {
    return (
        <>
            <ContactHeader />

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
                    <IntroContact />

                    {/* Quick Info */}
                    <section className="px-6 mt-32 mb-8">
                        <div className="max-w-7xl mx-auto border-t border-white/10 py-12">
                            <h2
                                className="
                                    text-center
                                    font-body
                                    text-4xl
                                    font-bold
                                    text-white
                                    uppercase
                                    tracking-wide
                                    mb-12
                                "
                            >
                                Quick Info
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                                <div>
                                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-3 text-center">
                                        Location
                                    </p>
                                    <p className="text-2xl font-semibold text-white text-center">
                                        India
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-3 text-center">
                                        Availability
                                    </p>
                                    <p className="text-2xl font-semibold text-white text-center">
                                        Open to Opportunities
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-3 text-center">
                                        Work Type
                                    </p>
                                    <p className="text-2xl font-semibold text-white text-center">
                                        Remote / Hybrid / On-site
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-3 text-center">
                                        Focus Areas
                                    </p>
                                    <p className="text-2xl font-semibold text-white text-center">
                                        Cloud / DevOps
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </motion.div>
            </div>
        </>
    );
}

export default ContactPage;