import Navigation from './Navigation';

function Header() {
  return (
    <header className="flex p-4 gap-4 justify-between items-center md:mx-8 border-b border-gray-200">
      <Navigation />
      <button className="text-blue-400 border border-2 border-blue-400 px-4 py-2 rounded-3xl hover:scale-105">
        Leave Number
      </button>
    </header>
  );
}

export default Header;
