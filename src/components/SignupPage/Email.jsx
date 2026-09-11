
const Email = ({inputValue, onInputChange}) => {
  return (
    <div>
      <h4>Email</h4>
      <input type="email" placeholder="johndoe123@ymail.com" className="input-field" value={inputValue} onChange={(e) => onInputChange(e.target.value)}></input>
    </div>
  );
};

export default Email;
