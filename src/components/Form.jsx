import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import uuid from "react-uuid";
import { writeUserToDatabase } from "../firebase";

function Form() {
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    CheckBox: false,
  });

  function getDate() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toUTCString();
  }

  const [isSent, setIsSent] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleCheckbox = (event) =>
    setForm({ ...form, [event.target.name]: !form.CheckBox });

  const submitForm = (event) => {
    event.preventDefault();
    setIsSent(true);
    console.log(form);

    writeUserToDatabase(
      uuid(),
      form.FirstName,
      form.LastName,
      form.PhoneNumber,
      form.Email,
      getDate()
    );

    setForm({
      FirstName: "",
      LastName: "",
      Email: "",
      PhoneNumber: "",
      CheckBox: false,
    });

    setTimeout(() => {
      setIsSent(false);
    }, 4000);
  };

  return (
    <>
      {!isSent ? (
        <form
          onSubmit={submitForm}
          className="flex flex-col sm:grid md:grid-cols-2 m-auto items-center max-w-[740px] gap-2 px-8"
        >
          <div className="w-full ">
            <input
              required
              className="border-2 p-2 w-full focus:border-blue-500 outline-none"
              type="text"
              name="FirstName"
              placeholder="First Name"
              value={form.FirstName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="w-full">
            <input
              required
              className="border-2 p-2 w-full  focus:border-blue-500 outline-none"
              type="text"
              name="LastName"
              placeholder="Last Name"
              value={form.LastName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="w-full md:mt-2">
            <input
              required
              className="border-2 p-2 w-full focus:border-blue-500 outline-none"
              type="tel"
              placeholder="+01 234 567 890"
              name="PhoneNumber"
              pattern="[+]{1}[0-9]{11,14}"
              value={form.PhoneNumber}
              onChange={handleChange}
            ></input>
          </div>
          <div className="w-full md:mt-2">
            <input
              required
              className="border-2 p-2 w-full focus:border-blue-500 outline-none"
              type="email"
              placeholder="john@gmail.com"
              name="Email"
              value={form.Email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex col-span-2 mt-4 gap-3">
            <input
              required
              className="border-2 p-2 focus:border-blue-500 outline-none"
              type="checkbox"
              name="CheckBox"
              onClick={handleCheckbox}
              value={form.CheckBox}
            ></input>
            <label className="text-gray-700 text-sm">
              By clicking here, I state that I have read and understood the{" "}
              <a className="text-red-500 hover:text-red-700 underline" href="#">
                {" "}
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a className="text-red-500 hover:text-red-700 underline" href="#">
                {" "}
                Privacy Statement{" "}
              </a>
            </label>
          </div>
          <button className="bg-red-500 py-2 mt-4 text-white col-span-2 mx-auto px-12 tracking-widest rounded-full transition ease-in-out duration-400 hover:bg-red-600">
            SUBMIT
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center fade-animation">
          <h2 className="text-green-600 text-3xl">
            Form was sent successfully
          </h2>
          <AiFillCheckCircle className="text-green-600" size={150} />
        </div>
      )}
    </>
  );
}

export default Form;
