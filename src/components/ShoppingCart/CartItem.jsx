import QuantityCounter from "./QuantityCounter";
import CheckBox from "./CheckBox";
import "./CartItem.css"


export default function CartItem({ item, checked, onToggle, onAddQuantity, onRemoveQuantity}){
    const { product, brand, quantity, subtotal, tax, availability } = item;
    return (
        <div className="item-box">
            <div className="item-left">
                <CheckBox checked={checked} onChange={onToggle} />
                <div className="item-info">
                    <p className="item-name">{product}</p>
                    <p className="item-brand">{brand}</p>
                </div>
            </div>
            
            <QuantityCounter 
                quantity={quantity} 
                addQuantity={() => onAddQuantity(product)} 
                removeQuantity={() => onRemoveQuantity(product)}
            />
            <p>${subtotal}</p>
            <p></p>

        </div>
    );
} 