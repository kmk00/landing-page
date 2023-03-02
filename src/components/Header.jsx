import Navigation from './Navigation';
import NumberButton from './NumberButton';

function Header() {
  return (
    <header className="flex p-4 w-full gap-4 justify-between items-center md:mx-8 border-b border-gray-200">
      <Navigation />
      <NumberButton />
    </header>
  );
}

export default Header;
