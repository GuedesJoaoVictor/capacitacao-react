function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
