const InputFormHook = ({ onChange, value }) => {
  return <input onChange={(e) => onChange(e.target.value)} value={value} />;
};

export default InputFormHook;
