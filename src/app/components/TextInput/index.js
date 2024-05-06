const TextInput = (props) => {
  return <input placeholder={"Sök..."} onChange={(e) => props.onChange(e)} />;
};

export default TextInput;
