import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import NumberButton from "./NumberButton";

function Footer() {
  return (
    <footer className="flex w-full  py-12 justify-around">
      <address className="not-italic">
        <h3 className="text-blue-600 text-xl mb-4">Our Contact</h3>
        <p className="pt-2">
          <span className="text-gray-400">Address: </span>Nowy Sacz, Poland
        </p>
        <p className="pt-2">
          <span className="text-gray-400">Tel:</span> +48 723 421 432
        </p>
        <p className="pt-2">
          <span className="text-gray-400">Email:</span> inbox@finance.com
        </p>
      </address>
      <div className="flex text-right flex-col">
        <div>
          <h3 className="text-blue-600 text-xl mb-4">Give us your number</h3>
          <NumberButton />
        </div>
        <h3 className="text-blue-600 text-xl my-4">Follow us</h3>
        <div className="flex justify-end gap-2">
          <AiFillFacebook size={30} />
          <FaTwitterSquare size={30} />
          <FaInstagramSquare size={30} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
