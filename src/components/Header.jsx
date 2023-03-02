import Navigation from './Navigation';

function Header() {
  return (
    <header className="flex gap-4 justify-between items-center">
      <Navigation />
      <button className="text-blue-400 border border-2 border-blue-400 px-4 py-2 rounded-xl hover:scale-105">
        Leave number
      </button>
    </header>
  );
}

export default Header;
