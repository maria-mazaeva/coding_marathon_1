
const Nationality = ({inputValue, onInputChange}) => {
  return (
    <div>
      <h4>Nationality</h4>
      <select className="select-field" value={inputValue} onChange={(e) => onInputChange(e.target.value)}>
        <option>Finnish</option>
        <option>English</option>
        <option>German</option>
        <option>French</option>
      </select>
    </div>
  );
};

export default Nationality;
