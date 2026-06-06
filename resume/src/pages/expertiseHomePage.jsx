import { Link } from "react-router-dom";

function Expertise() {
    const expertise = [
        {
            title: "Cloud Engineering",
            description:
                "Designing and deploying scalable cloud solutions with AWS, serverless architectures, storage services, identity management, and monitoring.",
            github:
                "https://github.com/Atharvakumkar/Serverless-PDF-Text-Extractor",
        },
        {
            title: "DevOps & CI/CD",
            description:
                "Automating software delivery through CI/CD pipelines, containerized workflows, version control, and infrastructure automation practices.",
            github:
                "https://github.com/Atharvakumkar/Cloud-Native-OS",
        },
        {
            title: "Linux Systems",
            description:
                "Working with Linux-based systems, shell scripting, system administration, operating system fundamentals, and performance optimization.",
            github:
                "https://github.com/Atharvakumkar/Cloud-Native-OS",
        },
        {
            title: "Backend Development",
            description:
                "Building reliable backend services, REST APIs, authentication systems, database integrations, and scalable application architectures.",
            github:
                "https://github.com/Atharvakumkar/Raksha-Bandhu",
        },
    ];

    return (
        <section className="mt-12 px-6 font-body">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expertise.map((item, index) => (
                        <div
                            key={index}
                            className="
                                backdrop-blur-xl
                                bg-white/5
                                border
                                border-white/10
                                rounded-2xl
                                p-5 md:p-8
                                hover:bg-white/10
                                hover:border-white/20
                                hover:-translate-y-2
                                transition-all
                                duration-300
                                flex
                                flex-col
                                min-h-[200px] md:min-h-[320px]
                            "
                        >
                            <h3 className="text-white text-xl font-semibold mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed flex-grow">
                                {item.description}
                            </p>

                            <a
                                href={item.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group
                                    mt-6
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-2
                                    border
                                    border-white/20
                                    text-white
                                    px-4
                                    py-2
                                    rounded-lg
                                    transition-all
                                    duration-300
                                    hover:bg-white
                                    hover:text-black
                                    hover:scale-105
                                    hover:[box-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff]
                                "
                            >
                                View Repository
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Link to="/projects">
                        <button className="group bg-white text-black py-2 px-8 rounded-[4px] font-body flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:[box-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff]">
                            View More Projects
                            <img
                                src="/forward.svg"
                                alt="Forward Arrow"
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Expertise;