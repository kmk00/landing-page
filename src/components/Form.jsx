import React, { useState } from 'react';

function Form() {
  const [form, setForm] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    CheckBox: false,
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleCheckbox = (event) =>
    setForm({ ...form, [event.target.name]: !form.CheckBox });

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form);
    setForm({
      FirstName: '',
      LastName: '',
      Email: '',
      PhoneNumber: '',
      CheckBox: false,
    });
  };

  return (
    <form
      onSubmit={submitForm}
      className="flex flex-col sm:grid md:grid-cols-2 m-auto items-center max-w-[740px] gap-2 p-4"
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
          placeholder="Phone Number"
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
          placeholder="Email"
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
          By clicking here, I state that I have read and understood the{' '}
          <a className="text-red-500 hover:text-red-700 underline" href="#">
            {' '}
            Terms and Conditions
          </a>{' '}
          and{' '}
          <a className="text-red-500 hover:text-red-700 underline" href="#">
            {' '}
            Privacy Statement{' '}
          </a>
        </label>
      </div>
      <button className="bg-red-500 py-2 mt-4 text-white col-span-2 mx-auto px-12 tracking-widest rounded-full transition ease-in-out duration-400 hover:bg-red-600">
        SUBMIT
      </button>
    </form>
  );
}

export default Form;
