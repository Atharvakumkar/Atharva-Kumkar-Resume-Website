import { motion } from "framer-motion";

function ExperienceAbout() {
    const experienceData = [
        {
            role: "DevSecOps Associate",
            company: "TalaKunchi Networks Pvt Ltd",
            employmentType: "Internship",
            period: "Jul 2026 - Oct 2026 · 4 mos",
            location: "Mumbai, Maharashtra, India · On-site",
            points: [
                "Evaluated and tested 4–6 DevSecOps security tools and contributed to finalizing a 7–9-stage CI/CD pipeline workflow.",
                "Assisted in configuring Linux-based CI/CD infrastructure, developed Dockerfiles for internal projects, and supported software version upgrades.",
                "Contributed to DevSecOps tool selection, integration testing, and security assessment to support secure software delivery.",
                "Created a Snyk integration SOP for developers and contributed to Docker, Kubernetes, and OWASP-aligned security assessments.",
            ],
            technologies: [
                "DevSecOps",
                "CI/CD",
                "Docker",
                "Kubernetes",
                "Linux",
                "Snyk",
                "OWASP",
            ],
        },
    ];

    return (
        <section className="pt-16 md:pt-28 px-4 md:px-10 font-body">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 md:mb-12"
                >
                    <h1
                        className="
                            text-3xl md:text-5xl
                            font-bold
                            font-body
                            text-white
                            [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]
                        "
                    >
                        Experience
                    </h1>
                </motion.div>

                {/* Experience Cards */}
                <div className="space-y-8">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                            className="
                                group
                                relative
                                overflow-hidden
                                backdrop-blur-xl
                                bg-white/[0.03]
                                border
                                border-white/10
                                rounded-3xl
                                p-6 md:p-10
                                transition-all
                                duration-500
                                hover:bg-white/[0.06]
                                hover:border-white/20
                                hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                            "
                        >
                            {/* Radial Glow on Hover */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    opacity-0
                                    group-hover:opacity-100
                                    transition-opacity
                                    duration-500
                                    bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]
                                    pointer-events-none
                                "
                            />

                            <div className="relative z-10">
                                {/* Header Details */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-white/10">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                                {item.role}
                                            </h2>
                                            <span className="px-3 py-0.5 rounded-full text-xs font-medium text-gray-300 bg-white/10 border border-white/15">
                                                {item.employmentType}
                                            </span>
                                        </div>

                                        <p className="text-lg md:text-xl text-gray-200 font-medium">
                                            {item.company}
                                        </p>
                                    </div>

                                    <div className="text-sm md:text-base text-gray-400 font-normal md:text-right space-y-1">
                                        <p>{item.period}</p>
                                        <p>{item.location}</p>
                                    </div>
                                </div>

                                {/* Responsibilities / Bullet Points */}
                                <div className="py-6">
                                    <ul className="space-y-3.5 text-gray-300 leading-relaxed text-sm md:text-base">
                                        {item.points.map((point, pointIndex) => (
                                            <li key={pointIndex} className="flex items-start gap-3">
                                                <span className="mt-2 h-2 w-2 rounded-full bg-white shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack Pills */}
                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
                                        Technologies & Tools
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="
                                                    px-3
                                                    py-1.5
                                                    rounded-full
                                                    text-xs md:text-sm
                                                    text-gray-300
                                                    bg-white/5
                                                    border
                                                    border-white/10
                                                    transition-all
                                                    duration-300
                                                    hover:bg-white/15
                                                    hover:text-white
                                                    hover:scale-105
                                                    hover:[box-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff]
                                                "
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExperienceAbout;

