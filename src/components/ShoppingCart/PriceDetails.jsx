import "./PriceDetails.css"

export default function PriceDetails({ items }) {

    const totalItems = items.length
    const subtotal = items.reduce((sum, item) => sum + item.subtotal * item.quantity, 0);
    const taxes = items.reduce((sum, item) => sum + item.tax *  item.quantity, 0);
    const total = subtotal + taxes;

    return(
        <div className="price-details-box">
            <h2 className="price-details-title">Price Details</h2>
            <div className="price-row">
                <p>Total No. of Items</p>
                <p>{totalItems}</p>
            </div>

            <div className="price-row">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
            </div>
            
            <div className="price-row">
                <p>Taxes</p>
                <p>${taxes.toFixed(2)}</p>
            </div>
            
            <div className="price-row total-row">
                <p>Total Price</p>
                <p>${total.toFixed(2)}</p>
            </div>
            
            <button className="checkout-button">Checkout</button>
        </div>
    )
}