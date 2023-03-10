import React, { useState } from "react";
import uuid from "react-uuid";
import { writeTelephone } from "../firebase";

function NumberForm({ setDisplayForm }) {
  const [formNumber, setFormNumber] = useState({
    number: "",
    checkBox: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = getDate();

    writeTelephone(uuid(), formNumber.number, date);
    alert("Success");
    setDisplayForm(false);
    setFormNumber({ number: "", checkBox: false });
  };

  function getDate() {
    const today = new Date(Date.now());
    return `${today.getDate()}-${today.getMonth()}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;
  }

  const handleChange = (event) => {
    setFormNumber({ ...formNumber, [event.target.name]: event.target.value });
  };

  const handleCheckbox = (event) =>
    setFormNumber({ ...formNumber, [event.target.name]: !formNumber.CheckBox });

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="tel"
        pattern="[+]{1}[0-9]{11,14}"
        name="number"
        value={formNumber.number}
        onChange={handleChange}
        className="p-2 mt-4 w-full rounded z-1"
      ></input>
      <div className="flex mt-2 gap-2">
        <input
          required
          className="border-2 p-2 focus:border-blue-500 outline-none"
          type="checkbox"
          name="checkBox"
          onClick={handleCheckbox}
          value={formNumber.checkBox}
        ></input>
        <label className="text-gray-600  text-sm">
          By clicking here, I state that I have read and understood the{" "}
          <a className="text-blue-500 hover:text-blue-700 underline" href="#">
            {" "}
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a className="text-blue-500 hover:text-blue-700 underline" href="#">
            {" "}
            Privacy Statement{" "}
          </a>
        </label>
      </div>
      <button className="bg-blue-500 px-4 py-1 my-4 text-white w-full rounded-xl hover:bg-blue-600 focus:border-none">
        Send
      </button>
    </form>
  );
}

export default NumberForm;
