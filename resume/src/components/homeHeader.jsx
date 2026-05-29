function HomeHeader() {
  const navClass =
    "inline-block transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(96,165,250,1)]";

  return (
    <header className="bg-black shadow-md font-text">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">
          Atharva Kumkar
        </h1>

        <nav>
          <ul className="flex items-center gap-8 text-gray-100 font-medium">
            <li>
              <a
                href="#"
                className="relative inline-block scale-110 drop-shadow-[0_0_20px_rgba(96,165,250,1)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:shadow-[0_0_10px_rgba(96,165,250,1)]"
              >
                Home
              </a>
            </li>

            <li>
              <a href="#" className={navClass}>
                About
              </a>
            </li>

            <li>
              <a href="#" className={navClass}>
                Projects
              </a>
            </li>

            <li>
              <a href="#" className={navClass}>
                Certificates
              </a>
            </li>

            <li>
              <a href="#" className={navClass}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HomeHeader;