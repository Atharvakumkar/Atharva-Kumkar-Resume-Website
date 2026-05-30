import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
    const iconClass =
        "text-[20px] text-white transition-all duration-300 hover:scale-125 hover:[filter:drop-shadow(0_0_8px_#fff)_drop-shadow(0_0_16px_#fff)_drop-shadow(0_0_32px_#fff)]";

    return (
        <footer className="w-full bg-black text-white flex flex-col items-center justify-center py-8 text-center">
            <h1 className="text-[20px] font-semibold opacity-90">
                Atharva Kumkar
            </h1>

            <p className="mt-2 opacity-75 text-[14px]">
                Systems & Cloud Engineering Practitioner | Building Linux-Based
                Infrastructure, CI/CD Pipelines & Scalable Systems
            </p>

            <div className="flex gap-8 mt-6">
                <a href="https://github.com/atharvakumkar" target="_blank" rel="noreferrer">
                    <FaGithub className={iconClass} />
                </a>

                <a href="https://www.linkedin.com/in/atharvakumkar" target="_blank" rel="noreferrer">
                    <FaLinkedin className={iconClass} />
                </a>

                <a href="https://x.com/Atharvakumkar08" target="_blank" rel="noreferrer">
                    <FaXTwitter className={iconClass} />
                </a>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kumkaratharvawork@gmail.com"
                target="_blank"
                rel="noreferrer" >
                    <MdEmail className={iconClass} />
                </a>
            </div>

            <h1 className="text-[14px] font-text mt-10 opacity-50">
                © 2026 Atharva Kumkar. All rights reserved. 
            </h1>
        </footer>
    );
}

export default Footer;