import CertificateHeader from "../components/certificatesHeader";
import Footer from "../components/footer";
import { motion } from "framer-motion";

function CertificatesPage() {
    const certificates = [
        {
            title: "Getting Started with Cloud Ops",
            issuer: "Amazon Web Services",
            category: "Cloud",
            link: "https://www.credly.com/badges/ff1b0cba-3e60-4782-89d2-acaa5a29427c/public_url",
        },
        {
            title: "Introduction to Linux",
            issuer: "The Linux Foundation",
            category: "Linux",
            link: "#",
        },
        {
            title: "High Performance Leadership: Lessons from Formula 1®",
            issuer: "Santander",
            category: "Soft Skills",
            link: "https://drive.google.com/file/d/1m9pweP5_XF0j5rcHfz43iqJ-_VYZFGZS/view?usp=sharing",
        },
    ];

    return (
        <>
            <CertificateHeader />

            <div className="relative min-h-screen text-white overflow-hidden">
                {/* Background */}
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/85" />

                {/* Content */}
                <div className="relative z-10">
                    {/* Intro + Heading Animation */}
                    <motion.div
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
                        {/* Intro */}
                        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-24">
                            <p
                                className="
                                    text-center
                                    text-sm md:text-lg
                                    text-gray-300
                                    leading-relaxed
                                    font-body
                                "
                            >
                                I believe strong engineering is built through
                                hands-on projects, experimentation, and
                                continuous learning. These certifications
                                complement my practical experience and reflect
                                my commitment to expanding my technical
                                knowledge.
                            </p>
                        </div>

                        {/* Heading */}
                        <div className="flex justify-center items-center mt-10 md:mt-16 mb-8 md:mb-12">
                            <h1
                                className="
                                    text-3xl md:text-6xl
                                    font-bold
                                    font-body
                                    text-white
                                    text-center
                                    [text-shadow:0_0_20px_rgba(255,255,255,0.4),0_0_40px_rgba(255,255,255,0.2)]
                                "
                            >
                                Certifications
                            </h1>
                        </div>
                    </motion.div>

                    {/* Certificates Grid */}
                    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                            {certificates.map((certificate, index) => (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                    }}
                                    className="
                                        bg-white/5
                                        backdrop-blur-md
                                        border border-white/10
                                        rounded-3xl
                                        p-5 md:p-6
                                        flex flex-col
                                        h-full
                                        transition-all
                                        duration-300
                                        hover:border-white/30
                                        hover:bg-white/10
                                        hover:-translate-y-1
                                    "
                                >
                                    {/* Category */}
                                    <span
                                        className="
                                            inline-block
                                            py-1
                                            text-xs
                                            font-medium
                                            text-gray-300
                                            mb-5
                                        "
                                    >
                                        {certificate.category}
                                    </span>

                                    {/* Title */}
                                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
                                        {certificate.title}
                                    </h2>

                                    {/* Issuer */}
                                    <p className="text-gray-400 mb-6">
                                        {certificate.issuer}
                                    </p>

                                    {/* Button */}
                                    <a
                                        href={certificate.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
                                            mt-auto
                                            w-full
                                            flex
                                            justify-center
                                            items-center
                                            py-3
                                            rounded-full
                                            border
                                            border-white/20
                                            bg-white/5
                                            text-white
                                            transition-all
                                            duration-300
                                            hover:bg-white
                                            hover:text-black
                                            hover:[box-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff]
                                            hover:border-white/40
                                        "
                                    >
                                        View Certificate →
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
}

export default CertificatesPage;