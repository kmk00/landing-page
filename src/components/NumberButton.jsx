import { AiOutlineClose } from 'react-icons/ai';
import NumberForm from './NumberForm';
import React, { useState } from 'react';

function NumberButton() {
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <>
      <button
        onClick={() => setDisplayForm(true)}
        className="text-blue-400 border border-2 border-blue-400 px-4 py-px rounded-3xl hover:scale-105"
      >
        Leave Number
      </button>
      {displayForm && (
        <>
          <div className="fixed bg-black/40 top-0 left-0 w-screen h-screen z-0"></div>

          <div className="fixed left-1/2 top-1/2 min-h-[320px] translate-x-[-50%]  translate-y-[-50%] bg-[#f5f5f7] z-[99] rounded-md flex flex-col p-8 items-center">
            <p className="text-center">Leave your phone number here</p>
            <NumberForm />
            <span
              onClick={() => setDisplayForm(false)}
              className="mt-8 group cursor-pointer"
            >
              <AiOutlineClose size={30} />
              <p className="hidden group-hover:block text-center">EXIT</p>
            </span>
          </div>
        </>
      )}
    </>
  );
}

export default NumberButton;
