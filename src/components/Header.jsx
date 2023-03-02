import Navigation from './Navigation';

function Header() {
  return (
    <header className="flex gap-4 justify-between">
      <Navigation />
      <button>Leave number</button>
    </header>
  );
}

export default Header;
