import { motion } from "framer-motion";

function ExploringAbout() {
const exploring = [
{
title: "Distributed Systems",
description:
"Learning how modern applications achieve scalability, fault tolerance, and reliability across distributed environments.",
left: true,
},
{
title: "Multi-Cloud Technologies",
description:
"Exploring Microsoft Azure, Google Cloud Platform, and Oracle Cloud Infrastructure beyond the AWS ecosystem.",
left: false,
},
{
title: "Infrastructure Automation",
description:
"Studying advanced approaches to infrastructure provisioning, deployment automation, and operational efficiency.",
left: true,
},
{
title: "Advanced Linux Systems",
description:
"Deepening my understanding of Linux internals, operating system concepts, and low-level computing fundamentals.",
left: false,
},
];

return (
    <section className="max-w-6xl mx-auto px-6 py-20">
        <h1
            className="
                text-5xl
                font-bold
                mb-20
                font-body
                text-white
                text-center
                [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]
            "
        >
            What I'm Exploring
        </h1>

        <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/20 -translate-x-1/2"></div>

            {exploring.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative mb-20"
                >
                    {/* Dot */}
                    <div className="absolute left-1/2 top-5 h-4 w-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] -translate-x-1/2"></div>

                    <div
                        className={`flex ${
                            item.left ? "justify-start" : "justify-end"
                        }`}
                    >
                        <div
                            className="
                                w-full
                                md:w-[42%]
                                backdrop-blur-md
                                bg-white/5
                                border
                                border-white/10
                                rounded-2xl
                                p-6
                                transition-all
                                duration-300
                                hover:border-white/30
                                hover:bg-white/10
                            "
                        >
                            <h2 className="text-2xl font-semibold text-white mb-3">
                                {item.title}
                            </h2>

                            <p className="text-gray-300 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

}

export default ExploringAbout;
