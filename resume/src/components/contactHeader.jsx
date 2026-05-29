import { Link } from "react-router-dom";

function ContactHeader() {
  const navClass =
    "inline-block transition-all duration-300 hover:scale-110 hover:text-white hover:[text-shadow:0_0_5px_#ffffff,0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff]";

  return (
    <header className="bg-black shadow-md font-text">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">
          Atharva Kumkar
        </h1>

        <nav>
          <ul className="flex items-center gap-8 text-gray-100 font-medium">
            <li>
              <Link to="/" className={navClass}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className={navClass}>
                About
              </Link>
            </li>

            <li>
              <Link to="/projects" className={navClass}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="/certificates" className={navClass}>
                Certificates
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="relative inline-block scale-110 text-white [text-shadow:0_0_5px_#ffffff,0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_40px_#ffffff] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:shadow-[0_0_10px_rgba(255,255,255,1)]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default ContactHeader;