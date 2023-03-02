function Navigation() {
  return (
    <nav className="flex gap-4 md:text-lg md:gap-6 xl:gap-10">
      <a
        className="hover:text-blue-400 hover:border-b-2 border-blue-400 text-gray-600"
        href="#"
      >
        Home
      </a>
      <a
        className="hover:text-blue-400 hover:border-b-2 border-blue-400 text-gray-600"
        href="#"
      >
        About
      </a>
      <a
        className="hover:text-blue-400 hover:border-b-2 border-blue-400 text-gray-600"
        href="#"
      >
        Services
      </a>
      <a
        className="hover:text-blue-400 hover:border-b-2 border-blue-400 text-gray-600"
        href="#"
      >
        Pages
      </a>
    </nav>
  );
}

export default Navigation;
