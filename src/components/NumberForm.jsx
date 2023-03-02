function NumberForm() {
  return (
    <form>
      <input className="p-2 mt-4 rounded z-1" placeholder="Number"></input>
      <button className="bg-red-500 px-4 py-1 my-4 text-white w-full rounded-xl hover:bg-red-600 focus:border-none">
        Send
      </button>
    </form>
  );
}

export default NumberForm;
