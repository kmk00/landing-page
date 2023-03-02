function Form() {
  return (
    <form className="flex flex-col gap-2 p-4">
      <input
        required
        className="border-2 p-2 focus:border-blue-500 outline-none"
        type="text"
        placeholder="First Name"
      ></input>
      <input
        required
        className="border-2 p-2 focus:border-blue-500 outline-none"
        type="text"
        placeholder="Last Name"
      ></input>
      <input
        required
        className="border-2 p-2 focus:border-blue-500 outline-none"
        type="tel"
        placeholder="Phone Number"
      ></input>
      <input
        required
        className="border-2 p-2 focus:border-blue-500 outline-none"
        type="email"
        placeholder="Email"
      ></input>
      <div className="flex gap-3">
        <input
          required
          className="border-2 p-2 focus:border-blue-500 outline-none"
          type="checkbox"
          placeholder=""
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
      <button className="bg-red-500 py-2 text-white tracking-widest rounded-full">
        SUBMIT
      </button>
    </form>
  );
}

export default Form;
