import { AiOutlineMenu } from "react-icons/ai";

function Navigation() {
  return (
    <>
      <nav className="h-fit font-normal gap-4 md:text-lg md:gap-6 xl:gap-10 flex">
        <a
          className="hover:text-blue-400 hover:border-b-2 hover:font-semibold border-blue-400 text-gray-600"
          href="#"
        >
          Home
        </a>
        <a
          className="hover:text-blue-400 hover:border-b-2 hover:font-semibold border-blue-400 text-gray-600"
          href="#"
        >
          About
        </a>
        <a
          className="hover:text-blue-400 hover:border-b-2 hover:font-semibold border-blue-400 text-gray-600"
          href="#"
        >
          Services
        </a>
        <a
          className="hover:text-blue-400 hover:border-b-2 hover:font-semibold border-blue-400 text-gray-600"
          href="#"
        >
          Pages
        </a>
      </nav>
    </>
  );
}

export default Navigation;
