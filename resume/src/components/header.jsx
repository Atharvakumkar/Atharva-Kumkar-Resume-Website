function Header() {
  return (
    <>
    <header className="bg-black shadow-md font-text  drop-shadow-sm drop-shadow-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">
          Atharva Kumkar
        </h1>
    
        <nav>
          <ul className="flex items-center gap-8 text-gray-100 font-medium">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Projects
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Certificates
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
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