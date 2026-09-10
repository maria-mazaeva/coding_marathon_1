import CartItem from "./CartItem";

export default function CartList({ items, checkedItems, onToggleItem, onAddQuantity, onRemoveQuantity}) {
    
    const style = {
        padding: "0 0" 
    }
    
    return (
        <div  style={style}>
            {items.map((item) => (
                <CartItem
                    key={item.product}
                    item={item}
                    checked={!!checkedItems[item.product]}
                    onToggle={() => onToggleItem(item.product)}
                    onAddQuantity={onAddQuantity} 
                    onRemoveQuantity={onRemoveQuantity}
                />
            ))}
        </div>
    )
}