function BuildAbout() {
    const buildss = [
        {
            title: "Cloud Infrastructure",
            description:
                "Designing and deploying cloud-native solutions with a focus on scalability, reliability, observability, and automation. I enjoy building event-driven architectures and leveraging managed cloud services to create resilient systems.",
            techStack: [
                "AWS",
                "Lambda",
                "S3",
                "IAM",
                "CloudWatch",
            ],
        },
        {
            title: "DevOps & Automation",
            description:
                "Building automated workflows that streamline development, testing, and deployment. My focus is on improving delivery speed, consistency, and operational reliability through modern DevOps practices.",
            techStack: [
                "Docker",
                "GitHub Actions",
                "Linux",
                "Bash",
                "CI/CD",
            ],
        },
        {
            title: "Backend Engineering",
            description:
                "Developing backend systems, APIs, and services that power applications and workflows. I enjoy creating maintainable, well-structured systems that prioritize performance, security, and reliability.",
            techStack: [
                "Python",
                "FastAPI",
                "Flask",
                "MongoDB",
                "REST APIs",
            ],
        },
        {
            title: "Systems Programming",
            description:
                "Exploring computing fundamentals through low-level development, operating systems, and system internals. Building software close to the hardware has strengthened my understanding of how modern systems operate.",
            techStack: [
                "C",
                "x86 Assembly",
                "GRUB",
                "QEMU",
                "BusyBox",
            ],
        },
    ]
    return (
        <section id="expertise" className="pt-22 px-6 font-body">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-2">
                 

                    <h2 className="
                        text-5xl
                        font-bold
                        mb-12
                        font-body
                        text-white
                        [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
                        What I Build
                    </h2>

                  
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {buildss.map((item, index) => (
                        <div
                            key={index}
                            className="
                                group
                                relative
                                overflow-hidden
                                backdrop-blur-xl
                                bg-white/[0.03]
                                border
                                border-white/10
                                rounded-3xl
                                p-8
                                transition-all
                                duration-500
                                hover:bg-white/[0.06]
                                hover:border-white/20
                                hover:-translate-y-2
                                hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                                min-h-[360px]
                                flex
                                flex-col
                            "
                        >
                            {/* Glow Effect */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    opacity-0
                                    group-hover:opacity-100
                                    transition-opacity
                                    duration-500
                                    bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]
                                "
                            />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-white text-2xl font-semibold mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed flex-grow">
                                    {item.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mt-0">
                                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
                                        Technologies
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.techStack.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
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
                                                        hover:[box-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff]">
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BuildAbout;