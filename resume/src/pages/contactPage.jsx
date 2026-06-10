import { motion } from "framer-motion";

import Footer from "../components/footer";
import ContactHeader from "../components/contactHeader";
import IntroContact from "./introContact";

function ContactPage() {
    return (
        <>
            <ContactHeader />

            <motion.div 
                className="relative min-h-screen text-white overflow-hidden"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            >
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
                    <section className="px-4 md:px-6 mt-16 md:mt-36 mb-8">
                        <div className="max-w-7xl mx-auto border-t border-white/10 py-12">
                            <h2
                                className="
                                    text-center
                                    font-body
                                    text-2xl md:text-4xl
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
                                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-3 text-center font-body">
                                        Location
                                    </p>
                                    <p className="text-lg md:text-2xl font-semibold text-white text-center font-body">
                                        Mumbai
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-3 text-center font-body">
                                        Availability
                                    </p>
                                    <p className="text-lg md:text-2xl font-semibold text-white text-center font-body">
                                        Open to Opportunities
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-3 text-center font-body">
                                        Work Type
                                    </p>
                                    <p className="text-lg md:text-2xl font-semibold text-white text-center font-body">
                                        Remote / Hybrid / On-site
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-3 text-center font-body">
                                        Focus Areas
                                    </p>
                                    <p className="text-lg md:text-2xl font-semibold text-white text-center font-body">
                                        Cloud / DevOps
                                    </p>
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

export default ContactPage;