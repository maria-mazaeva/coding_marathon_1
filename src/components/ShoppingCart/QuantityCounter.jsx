import "./QuantityCounter.css";

export default function QuantityCounter({quantity, addQuantity, removeQuantity}) {


    return (
        <div className="quantity-counter">
            <button 
                className="quantity-button" 
                onClick={removeQuantity}
            >-</button>
            <p className="quantity-count">{quantity}</p>
            <button 
                className="quantity-button" 
                onClick={ addQuantity}>+</button>

        </div>
    )
}