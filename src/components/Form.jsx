import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import uuid from "react-uuid";
import { writeUserToDatabase } from "../firebase";
import decor1 from "/26432.svg";

function Form() {
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    CheckBox: false,
  });

  function getDate() {
    const today = new Date(Date.now());
    return `${today.getDate()}-${today.getMonth()}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;
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
    const date = getDate();

    writeUserToDatabase(
      uuid(),
      form.FirstName,
      form.LastName,
      form.PhoneNumber,
      form.Email,
      date
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
      <div className="absolute">
        <img
          className="h-64 rotate-45 translate-x-[-40%] translate-y-10 opacity-60  hidden xl:block filter-gray"
          alt="decoration image"
          src={decor1}
        ></img>
      </div>
      {!isSent ? (
        <form
          onSubmit={submitForm}
          className="flex flex-col text-2xl sm:grid md:grid-cols-2 m-auto items-center max-w-[940px] gap-2 px-8"
        >
          <div className="w-full ">
            <input
              required
              className="border-2 p-2 w-full focus:border-blue-500 outline-none"
              type="text"
              name="FirstName"
              value={form.FirstName}
              onChange={handleChange}
            ></input>
            <label className="text-sm pl-2 text-gray-600">First name</label>
          </div>
          <div className="w-full">
            <input
              required
              className="border-2 p-2 w-full focus:border-blue-500 outline-none"
              type="text"
              name="LastName"
              value={form.LastName}
              onChange={handleChange}
            ></input>
            <label className="text-sm pl-2 text-gray-600">Last name</label>
          </div>
          <div className="w-full md:mt-2">
            <input
              required
              className="border-2 p-2 w-full focus:border-blue-500 outline-none"
              type="tel"
              name="PhoneNumber"
              pattern="[0-9]{9,12}"
              value={form.PhoneNumber}
              onChange={handleChange}
            ></input>
            <label className="text-sm pl-2 text-gray-600">Phone number</label>
          </div>
          <div className="w-full md:mt-2">
            <input
              required
              className="border-2 p-2 w-full focus:border-blue-500 outline-none"
              type="email"
              name="Email"
              value={form.Email}
              onChange={handleChange}
            ></input>
            <label className="text-sm pl-2 text-gray-600">Email</label>
          </div>
          <div className="flex mx-auto col-span-2 mt-4 gap-3">
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
              <a
                className="text-blue-500 hover:text-blue-700 underline"
                href="#"
              >
                {" "}
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a
                className="text-blue-500 hover:text-blue-700 underline"
                href="#"
              >
                {" "}
                Privacy Statement{" "}
              </a>
            </label>
          </div>
          <button className="bg-blue-500 py-2 mt-4 text-white col-span-2 mx-auto px-12 tracking-widest rounded-full transition ease-in-out duration-400 hover:bg-blue-600">
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
