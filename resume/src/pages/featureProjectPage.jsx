import { motion } from "framer-motion";

import {
    FaGithub,
    FaDocker,
    FaAws,
} from "react-icons/fa";

import {
    HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";

import {
    TbCpu,
    TbPackage,
} from "react-icons/tb";

import {
    LuWorkflow,
} from "react-icons/lu";

function FeaturedProject() {
    const technologies = [
        "C",
        "x86 Assembly",
        "GRUB",
        "BusyBox",
        "QEMU",
        "Docker",
        "GitHub Actions",
        "AWS EC2",
        "CloudWatch",
    ];

    return (
        <section className="px-6 font-body">
            <div className="max-w-7xl mx-auto">

                {/* Featured Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -6 }}
                    className="
                        group
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/15
                        bg-white/[0.05]
                        backdrop-blur-none
                        p-8
                        md:p-12
                        min-h-[520px]
                        transition-all
                        duration-500
                        hover:border-white/25
                        hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
                        backdrop-blur-sm
                    "
                >
                    {/* Hover Glow */}
                    <div
                        className="
                            absolute
                            inset-0
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity
                            duration-500
                            bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_70%)]
                        "
                    />

                    <div className="relative z-10 flex flex-col h-full">
                        
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                            
                            <div className="flex-1">
                                <h2
                                    className="
                                        text-white
                                        text-4xl
                                        md:text-6xl
                                        font-bold
                                        mb-6
                                        [text-shadow:0_0_10px_rgba(255,255,255,0.25)]
                                    "
                                >
                                    Cloud Native OS
                                </h2>

                                <p
                                    className="
                                        text-gray-400
                                        text-lg
                                        leading-relaxed
                                        max-w-4xl
                                    "
                                >
                                    A minimal custom operating system built from
                                    scratch using C, x86 Assembly, BusyBox,
                                    GRUB, Docker, GitHub Actions, and AWS EC2.
                                    Designed to explore operating system
                                    internals, Linux boot architecture,
                                    virtualization, CI/CD automation, and
                                    cloud-native deployment workflows.
                                </p>
                            </div>

                            {/* GitHub CTA */}
                            <a
                                href="https://github.com/Atharvakumkar/Cloud-Native-OS"
                                target="_blank"
                                rel="noopener noreferrer"
                               className="
    inline-flex
    items-center
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
"
                            >
                                <FaGithub size={20} />
                                View Repository
                                <HiOutlineArrowTopRightOnSquare size={18} />
                            </a>
                        </div>

                        {/* Status */}
                        <div className="mt-8">
                            <span
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    px-4
                                    py-2
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/5
                                    text-sm
                                    text-gray-300
                                "
                            >
                                <span className="w-2 h-2 rounded-full bg-white" />
                                Completed
                            </span>
                        </div>

                        {/* Technologies */}
                        <div className="mt-10">
                            <p
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.25em]
                                    text-gray-500
                                    mb-4
                                "
                            >
                                Technologies
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="
                                            px-3
                                            py-1.5
                                            rounded-full
                                            text-sm
                                            text-gray-300
                                            bg-white/5
                                            border
                                            border-white/10
                                            transition-all
                                            duration-300
                                            hover:bg-white/15
                                            hover:text-white
                                            hover:scale-105
                                            hover:[box-shadow:0_0_30px_rgba(255,255,255,0.35)]
                                        "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Architecture Overview */}
                        <div
                            className="
                                mt-10
                                rounded-2xl
                                border
                                border-white/10
                                bg-black/20
                                backdrop-blur-none
                                p-6
                            "
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <LuWorkflow
                                    size={20}
                                    className="text-gray-300"
                                />
                                <h3 className="text-white font-semibold">
                                    Architecture Overview
                                </h3>
                            </div>

                            <div
                                className="
                                    grid
                                    grid-cols-1
                                    md:grid-cols-2
                                    lg:grid-cols-4
                                    gap-5
                                "
                            >
                                {/* Kernel */}
                                <motion.div
                                    whileHover={{
                                        y: -4,
                                        scale: 1.02,
                                    }}
                                    className="
    flex
    flex-col
    items-center
    text-center
    p-5
    rounded-2xl
    border
    border-white/5
    bg-white/[0.02]
    transition-all
    duration-300
    hover:border-white/15
    hover:bg-white/[0.04]
    hover:[box-shadow:0_0_8px_rgba(255,255,255,0.08),0_0_16px_rgba(255,255,255,0.04)]
"
                                >
                                    <TbCpu
                                        size={42}
                                        className="text-gray-300 mb-4"
                                    />

                                    <h4 className="text-white font-medium">
                                        Kernel Development
                                    </h4>

                                    <p className="text-gray-500 text-sm mt-2">
                                        C & x86 Assembly
                                    </p>
                                </motion.div>

                                {/* BusyBox */}
                                <motion.div
                                    whileHover={{
                                        y: -4,
                                        scale: 1.02,
                                    }}
                                  className="
    flex
    flex-col
    items-center
    text-center
    p-5
    rounded-2xl
    border
    border-white/5
    bg-white/[0.02]
    transition-all
    duration-300
    hover:border-white/15
    hover:bg-white/[0.04]
    hover:[box-shadow:0_0_8px_rgba(255,255,255,0.08),0_0_16px_rgba(255,255,255,0.04)]
"
                                >
                                    <TbPackage
                                        size={42}
                                        className="text-gray-300 mb-4"
                                    />

                                    <h4 className="text-white font-medium">
                                        Linux Userland
                                    </h4>

                                    <p className="text-gray-500 text-sm mt-2">
                                        BusyBox Environment
                                    </p>
                                </motion.div>

                                {/* Docker */}
                                <motion.div
                                    whileHover={{
                                        y: -4,
                                        scale: 1.02,
                                    }}
                                    className="
    flex
    flex-col
    items-center
    text-center
    p-5
    rounded-2xl
    border
    border-white/5
    bg-white/[0.02]
    transition-all
    duration-300
    hover:border-white/15
    hover:bg-white/[0.04]
    hover:[box-shadow:0_0_8px_rgba(255,255,255,0.08),0_0_16px_rgba(255,255,255,0.04)]
"
                                >
                                    <FaDocker
                                        size={42}
                                        className="text-gray-300 mb-4"
                                    />

                                    <h4 className="text-white font-medium">
                                        Container Workflow
                                    </h4>

                                    <p className="text-gray-500 text-sm mt-2">
                                        Docker + CI/CD
                                    </p>
                                </motion.div>

                                {/* AWS */}
                                <motion.div
                                    whileHover={{
                                        y: -4,
                                        scale: 1.02,
                                    }}
                                    className="
    flex
    flex-col
    items-center
    text-center
    p-5
    rounded-2xl
    border
    border-white/5
    bg-white/[0.02]
    transition-all
    duration-300
    hover:border-white/15
    hover:bg-white/[0.04]
    hover:[box-shadow:0_0_8px_rgba(255,255,255,0.08),0_0_16px_rgba(255,255,255,0.04)]
"
                                >
                                    <FaAws
                                        size={42}
                                        className="text-gray-300 mb-4"
                                    />

                                    <h4 className="text-white font-medium">
                                        Cloud Deployment
                                    </h4>

                                    <p className="text-gray-500 text-sm mt-2">
                                        AWS EC2 + CloudWatch
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default FeaturedProject;