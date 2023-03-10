import { AiOutlineClose } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import NumberForm from "./NumberForm";
import React, { useState } from "react";

function NumberButton() {
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <>
      <button
        onClick={() => setDisplayForm(true)}
        className="text-blue-500 border-2 border-blue-500 px-4 py-4 font-normal md:py-1 rounded-3xl transition ease-in-out duration-300 hover:bg-blue-100"
      >
        <span className="hidden md:block">Leave Number</span>
        <span className="md:hidden">
          <BsTelephone />
        </span>
      </button>
      {displayForm && (
        <>
          <div className="fixed bg-black/40 top-0 left-0 w-screen h-screen z-[99999]"></div>

          <div className="fixed left-1/2 top-1/2 translate-x-[-50%]  translate-y-[-50%] bg-[#f5f5f7] z-[99999999] rounded-md flex flex-col p-8 pt-20 items-center w-11/12 mx-1 md:max-w-[400px]">
            <span
              onClick={() => setDisplayForm(false)}
              className="mt-8 top-[-2rem] bg-blue-500 hover:bg-blue-600 rounded-bl-xl rounded-tr-md right-0 p-4 fixed cursor-pointer"
            >
              <AiOutlineClose size={20} />
            </span>
            <p className="text-center uppercase font-bold">
              Leave your phone number here
            </p>
            <NumberForm setDisplayForm={setDisplayForm} />
          </div>
        </>
      )}
    </>
  );
}

export default NumberButton;
