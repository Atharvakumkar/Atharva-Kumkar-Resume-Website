import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaFileAlt,
} from "react-icons/fa";

function IntroContact() {
    return (
        <section>
            {/* Content */}
                <motion.div
                    className="px-6 pt-16 md:pt-30"
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
                    <h1
                        className="
                            text-center
                            font-body
                            font-bold
                            text-3xl md:text-5xl
                            mb-6
                            text-white
                            [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_40px_rgba(255,255,255,0.2)]
                        "
                    >
                        Let's Connect
                    </h1>

                    <p
                        className="
                            max-w-4xl
                            mx-auto
                            text-center
                            font-body
                            text-lg md:text-2xl
                            text-white
                            [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_10px_rgba(255,255,255,0.2)]
                        "
                    >
                        Whether you'd like to discuss cloud infrastructure,
                        backend engineering, DevOps, open-source projects,
                        or potential opportunities, I'd be happy to connect.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=kumkaratharvawork@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="
                                bg-white
                                text-black
                                py-3
                                px-8
                                rounded-[4px]
                                font-body
                                flex
                                items-center
                                gap-2
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:[box-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff]
                            "
                        >
                            <FaEnvelope className="text-sm" />
                            Email Me
                        </a>

                        <a
                            href="https://github.com/Atharvakumkar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                bg-white
                                text-black
                                py-3
                                px-8
                                rounded-[4px]
                                font-body
                                flex
                                items-center
                                gap-2
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:[box-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff]
                            "
                        >
                            <FaGithub className="text-sm" />
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/atharvakumkar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                bg-white
                                text-black
                                py-3
                                px-8
                                rounded-[4px]
                                font-body
                                flex
                                items-center
                                gap-2
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:[box-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff]
                            "
                        >
                            <FaLinkedin className="text-sm" />
                            LinkedIn
                        </a>

                        <a
                            href="https://drive.google.com/file/d/1jW4EMRjzFF_CW_ssh-s-h9uUIlA4440j/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                bg-white
                                text-black
                                py-3
                                px-8
                                rounded-[4px]
                                font-body
                                flex
                                items-center
                                gap-2
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:[box-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff]
                            "
                        >
                            <FaFileAlt className="text-sm" />
                            Resume
                        </a>
                    </div>
                </motion.div>
        </section>
    );
}

export default IntroContact;