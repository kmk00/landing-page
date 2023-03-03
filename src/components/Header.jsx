import Logo from "./Logo";
import Navigation from "./Navigation";
import NumberButton from "./NumberButton";

function Header() {
  return (
    <header className="flex p-4 pt-8 w-full gap-4 justify-between bg-transparent z-10 items-center md:items-start md:mx-8 ">
      <div className="flex md:flex-row flex-col">
        <Logo />
        <Navigation />
      </div>
      <NumberButton />
    </header>
  );
}

export default Header;
