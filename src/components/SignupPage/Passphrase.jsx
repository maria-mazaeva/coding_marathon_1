
const Passphrase = ({inputValue, onInputChange}) => {
  return (
    <div>
      <h4>Password</h4>
      <input type="password" placeholder="***" className="input-field" value={inputValue} onChange={(e) => onInputChange(e.target.value)}></input>
    </div>
  );
};

export default Passphrase;
