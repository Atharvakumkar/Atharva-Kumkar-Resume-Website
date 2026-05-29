function Header() {
  return (
    <>
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
                  className="inline-block transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_40px_rgba(96,165,250,1)]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-block transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_40px_rgba(96,165,250,1)]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-block transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_40px_rgba(96,165,250,1)]"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-block transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_40px_rgba(96,165,250,1)]"
                >
                  Certificates
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-block transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_40px_rgba(96,165,250,1)]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;