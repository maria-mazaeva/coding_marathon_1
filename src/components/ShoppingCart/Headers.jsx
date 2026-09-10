
import CheckBox from "./CheckBox";
import "./Headers.css";
import RemoveButton from "./RemoveButton";

export default function Headers({ allChecked, onToggleAll, onRemoveSelected }) {
  return (
    <div className="headers">
      <div className="header-left">
        <CheckBox checked={allChecked} onChange={onToggleAll} />
        <span className="header-label">PRODUCTS</span>
      </div>

      <span className="header-label quantity-label">QUANTITY</span>
      <span className="header-label price-label">PRICE</span>

      <RemoveButton onRemoveSelected={onRemoveSelected}/>
     
    </div>
  );
}