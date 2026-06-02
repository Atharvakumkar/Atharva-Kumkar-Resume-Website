import { motion } from "framer-motion";

import {
    FaGithub,
    FaShieldAlt,
    FaFileAlt,
    FaBrain,
    FaHandsHelping,
} from "react-icons/fa";

import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

function SelectedProjects() {
    const projects = [
        {
            title: "AI-Powered SIEM Platform",
            status: "Ongoing",
            description:
                "AI-driven security monitoring platform integrating threat detection, log analytics, and automated incident response workflows.",
            technologies: [
                "Python",
                "Kafka",
                "Elastic",
                "Falco",
                "AWS",
            ],
            github: "https://github.com/Atharvakumkar/SIEM_SYSTEM",
        },
        {
            title: "Serverless PDF Text Extractor",
            status: "Completed",
            description:
                "Event-driven AWS pipeline that automatically extracts text from uploaded PDFs using Lambda and S3.",
            technologies: [
                "AWS Lambda",
                "S3",
                "PyMuPDF",
                "IAM",
                "CloudWatch",
            ],
            github: "https://github.com/Atharvakumkar/Serverless-PDF-Text-Extractor",
        },
        {
            title: "RAG Document Assistant",
            status: "Completed",
            description:
                "Semantic document retrieval system combining vector search, embeddings, and LLM-powered question answering.",
            technologies: [
                "Python",
                "OpenAI",
                "ChromaDB",
                "FastAPI",
                "RAG",
            ],
            github: "https://github.com/Atharvakumkar/RAG-Document-Assistant",
        },
        {
            title: "Raksha Bandhu",
            status: "Completed",
            description:
                "Fire safety and emergency response platform featuring NOC management, inspection workflows, safety awareness resources, and an S.O.S. system that transmits real-time location data to authorities during emergencies.",
            technologies: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
                "Nginx",
            ],
            github: "https://github.com/Atharvakumkar/Raksha-Bandhu",
        },
    ];

    return (
        <section className="px-6 py-24 font-body">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-14">
                    <h2
                        className="
                            text-5xl
                            md:text-5xl
                            font-bold
                            text-white
                            mb-4
                            [text-shadow:0_0_40px_rgba(255,255,255,0.25)]
                            text-center
                        "
                    >
                        Selected Projects
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-2 gap-6">

                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/[0.03]
                                p-8
                                min-h-[340px]
                                transition-all
                                duration-500
                                hover:border-white/20
                                hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]
                                backdrop-blur-sm
                            "
                        >

                            {/* Glow */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    opacity-0
                                    group-hover:opacity-100
                                    transition-opacity
                                    duration-500
                                    bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_70%)]
                                "
                            />

                            <div className="relative z-10 flex flex-col h-full">

                                {/* Top Section */}
                                <div className="flex items-start justify-between mb-6">

                                    <div>
                                        <div className="text-gray-300 mb-4">
                                            {project.icon}
                                        </div>

                                        <p
                                            className="
                                                text-[10px]
                                                uppercase
                                                tracking-[0.25em]
                                                text-gray-500
                                                mb-3
                                            "
                                        >
                                            {project.status}
                                        </p>

                                        <h3
                                            className="
                                                text-white
                                                text-2xl
                                                font-semibold
                                                leading-tight
                                            "
                                        >
                                            {project.title}
                                        </h3>
                                    </div>

                                </div>

                                {/* Description */}
                                <p
                                    className="
                                        text-gray-400
                                        leading-relaxed
                                        mb-8
                                        flex-grow
                                    "
                                >
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mb-8">
                                    <div className="flex flex-wrap gap-2">

                                        {project.technologies.map(
                                            (tech) => (
                                                <span
                                                    key={tech}
                                                    className="
                                                        px-3
                                                        py-1.5
                                                        rounded-full
                                                        text-xs
                                                        text-gray-300
                                                        bg-white/5
                                                        border
                                                        border-white/10
                                                        transition-all
                                                        duration-300
                                                        hover:bg-white/15
                                                        hover:text-white
                                                        hover:scale-105
                                                        hover:[box-shadow:0_0_20px_rgba(255,255,255,0.15)]
                                                    "
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* GitHub Button */}
                                <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="
        inline-flex
        items-center
        justify-center
        gap-3
        px-6
        py-3
        rounded-xl
        bg-white
        text-black
        font-medium
        transition-all
        duration-300
        hover:scale-105
        hover:[box-shadow:0_0_15px_#ffffff,0_0_30px_#ffffff,0_0_60px_#ffffff]
        shrink-0
        self-start
    "
>
                                    <FaGithub />

                                    View Repository

                                    <HiOutlineArrowTopRightOnSquare />
                                </a>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SelectedProjects;